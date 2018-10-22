/**
 * 首页 接口
 * @author weichaozhan
 */
import http from '@/public/http'

/**
 * 首页人数统计
 */
export const getPeopleCountAPI = () => {
    return http({
        url: '/home/getPeopleCount',
        method: 'get',
    });
};