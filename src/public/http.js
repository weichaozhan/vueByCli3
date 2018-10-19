import axios from 'axios';
import Qs from 'qs';
import Vue from 'vue';
import router from '@/router';
import {Message} from 'element-ui';

import {BASE_URL} from './constant';

Vue.prototype.$message = Message;

/**
 * axios 请求封装
 * @param {Object} config axios 配置
 * @param {Boolean} isUploadFile 是否为上传文件的请求，true 为上传类型
 */
const http = (config, isUploadFile = false) => {
    let headers = {}

    if (!isUploadFile) {
        headers['Content-Type'] = 'application/json';
    }
    
    if (config.headers) {
        headers = Object.assign(headers, config.headers);
    }
    headers['Content-Type'] === 'application/json' && (
        headers['Authorization'] = `${localStorage.getItem('token')}`
    );

    // Content-Type 为 application/x-www-form-urlencoded 时序列化 data
    let data = (!headers['Content-Type'] || headers['Content-Type'] === 'application/x-www-form-urlencoded') ? Qs.stringify(config.data) : (config.data || '');

    const newRequest = new Promise((resolve, reject) => {
        axios({
            baseURL: BASE_URL,
            url: config.url,
            method: config.method || 'get',
            headers: headers,
            data: data,
            params: config.params || '',
            timeout: config.timeout || 0,
            // withCredentials: true,
        })
            .then(function (response) {
                if (response.data.code === 1002) {
                    Vue.prototype.$message({type: 'error', message: '登录信息过期！请重新登录'})
                    reject('登录信息过期！请重新登录');
                    router.push('/login');
                } else {
                    resolve(response);
                }
            })
            .catch(function (error) {
                console.log(error);
                reject(error);
            })
    });

    return newRequest;
}

export default http;
