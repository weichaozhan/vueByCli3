<!-- 首页 -->
<template>
    <div class="wrapper-index">
        <div class="sum-count">
            <h3>
                医生注册总人数
            </h3>
            <p>
                {{doctorNum}}
            </p>
        </div>
        <div class="sum-count">
            <h3>
                平台总问诊数
            </h3>
            <p>
                {{inquisitionNum}}
            </p>
        </div>
        <div class="sum-count">
            <h3>
                用户注册总人数
            </h3>
            <p>
                {{patientNum}}
            </p>
        </div>
    </div>
</template>

<script>
import {
    getPeopleCountAPI,
} from '@/api/homeAPI.js';

export default {
    name: '',
    data() {
        return {
            doctorNum: '',
            inquisitionNum: '',
            patientNum: '',
        };
    },
    methods: {
        /**
         * 获取首页人数数据
         */
        getPeopleCount() {
            getPeopleCountAPI()
                .then(res => {
                    const dataCount = res.data.data;

                    this.doctorNum = dataCount.doctorNum;
                    this.inquisitionNum = dataCount.inquisitionNum;
                    this.patientNum = dataCount.patientNum;
                });
        },
    },
    created() {
        this.getPeopleCount();
    },
}
</script>

<style scoped="scoped" lang="less">
.wrapper-index {
    display: flex;
    justify-content: space-around;
    align-items: center;
} 
.sum-count {
    width: 200px;
    height: 200px;
    line-height: 2;
    padding: 60px 0px;
    color: #fff;
    text-align: center;
    background: #009688;
    border-radius: 100px;
    &:not(:nth-child(2)) {
        cursor: pointer;
    }

    p {
        font-size: 20px;
    }
}
</style>