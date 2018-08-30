/* eslint-disable */
import Vue from 'vue'
//导入时间管理类库
import moment from 'moment'
//创建全局过滤器  
Vue.filter('dataFormat',function(val,pattern='ll'){
return moment(val).format(pattern)
})
Vue.filter('dataFormats',function(val,pattern='MM/DD/YYYY'){
    return moment(val).format(pattern)
    })