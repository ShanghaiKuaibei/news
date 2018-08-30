<template>
    <!-- 尾部-->
    <div>
        <div class="footer clearfix">
            <div class="footer-left clearfix">
                <p>{{ch?"联系我们":"Contact&nbsp;us"}}</p>
                <a href="mailto:skynews@shellpay2.com">skynews@shellpay2.com</a>
                <div class="footer-center">
                    <p>{{ch?"官方公众号":"Official Accounts"}}</p>
                    <ul>
                        <li v-for="(item,i) in company" :key="i">
                            <img :src="item.cimg" alt="">
                            <span>{{ch?item.cname:item.ename}}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-right clearfix">
                <div>
                    <ul>
                        <li v-for="(item,i) in panter" :key="i">
                            <span>{{ch?item.ctitle:item.etitle}}：</span>
                            <a v-for="(imgurl,j) in item.imgs" :href="imgurl.link" :title="ch?imgurl.cname:imgurl.ename" :key="j" target="_blank">
                                <img :src="imgurl.cimg" alt="">
                            </a>
                        </li>
                    </ul>
                    <!-- <ul class="footer-link">
                                        <li v-for="(item,i) in link" :key="i">
                                            <a :href="http+item">{{item}}</a>
                                        </li>
                                    </ul> -->
                </div>
            </div>
        </div>
        <p class="bot">{{ch?"© 2018 天空资讯":"© skyledger"}}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                http: "http://",
                panter: [{
                        'ctitle': '主办单位',
                        'etitle': 'Hosted by',
                        'imgs': [{
                            "cimg": "../../../static/images/sh02.png",
                            "cname": "永邦数字局 ",
                            "ename": "Digital Economy Bureau of Yongbang",
                            "link": "javascript:void(0)"
                        }]
                    },
                    {
                        'ctitle': '承办单位',
                        'etitle': 'Organizer',
                        'imgs': [{
                            "cimg": "../../../static/images/01.png",
                            "cname": "上海快贝网络科技有限公司 ",
                            "ename": "Shellpay",
                            "link": "http://www.shellpay2.com"
                        }]
                    },
                    {
                        'ctitle': '支持单位',
                        'etitle': 'Sponser',
                        'imgs': [{
                            "cimg": "../../../static/images/02.png",
                            "cname": "上海喵爪网络科技有限公司 ",
                            "ename": "MiaoZhua",
                            "link": "http://www.mzworld.cn/"
                        }, {
                            "cimg": "../../../static/images/shtg.png",
                            "cname": "天宫孵化器",
                            "ename": "SkyPalace",
                            "link": "javascript:void(0)"
                        }, {
                            "cimg": "../../../static/images/iquant.jpg",
                            "cname": "i量化交易所",
                            "ename": " iQuant",
                            "link": "https://www.5iquant.org/"
                        }]
                    },
                    {
                        'ctitle': '媒体支持',
                        'etitle': 'Media partner',
                        'imgs': [
                            {
                            "cimg": "../../../static/images/04.png",
                            "cname": "天空资讯 ",
                            "ename": " Skyledger",
                            "link": "http://shellchain2.net"
                        },
                            {
                            "cimg": "../../../static/images/03.png",
                            "cname": "天空社区 ",
                            "ename": " Skynews",
                            "link": "https://www.skycoin.net/"
                        }, {
                            "cimg": "../../../static/images/sh05.jpg",
                            "cname": "世链财经",
                            "ename": "Shilian",
                            "link": "http://www.shilian.com/"
                        }, {
                            "cimg": "../../../static/images/shhul.jpg",
                            "cname": "火链财经",
                            "ename": " Huolian",
                            "link": "https://51huolian.com/"
                        },
                        {
                           "cimg": "../../../static/images/bj.jpg",
                            "cname": "白鲸财经",
                            "ename": " BaiJing",
                            "link": "https://Baijingapp.com"
                        },
                        {
                           "cimg": "../../../static/images/wl.jpg",
                            "cname": "未来财经",
                            "ename": " WeiLai",
                            "link": "https://www.weilaicaijing.com"
                        },
                        ]
                    }
                ],
                company: [{
                    "cimg": "../../../static/images/0003.jpg",
                    "cname": "上海快贝网络科技有限公司 ",
                    "ename": "Shellpay,Shanghai",
                }, {
                    "cimg": "../../../static/images/0004.jpg",
                    "cname": "上海喵爪网络科技有限公司 ",
                    "ename": "MZ Education",
                }, {
                    "cimg": "../../../static/images/0006-e1520246379984.jpg",
                    "cname": "Skycoin社区",
                    "ename": "Skycoin Community",
                }, ],
            }
        },
        computed: {
            ch() {
                return this.$props.lang === 'ch';
                // return this.$store.state.ch;
            }
        },
        props: {
            lang: {
                type: String
            }
        },
        updated() {}
    }
</script>
<style lang="scss" scoped>
    .clearfix::after,
    .clearfix::before {
        content: "";
        display: block;
        visibility: hidden;
        height: 0;
        line-height: 0;
        clear: both;
    }
    .bot {
        text-align: center;
    }
    p {
        margin: 1rem;
        padding: 0;
    }
    .footer {
        display: flex;
        p {
            margin-left: 0;
        }
        background-color:#F5F5F5;
        padding:1rem 0rem 5rem 3rem;
    }
    ul {
        margin: 0;
        padding: 0;
    }
    li {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .footer-center {
        p {
            color: #72BDD0;
        }
        p:nth-child(1) {
            font-size: 1.5rem;
        }
        ul {
            display: flex;
            justify-content: flex-start;
            li {
                width: 96px;
                display: flex;
                flex-direction: column;
                img {
                    width: 96px;
                    height: 96px;
                }
                span {
                    font-size: 0.7rem;
                    text-align: center;
                    line-height: 1.2rem;
                }
            }
        }
    }
    .footer-left {
        p {
            color: #72BDD0;
        }
        p:nth-child(1) {
            font-size: 1.5rem;
        }
    }
    .footer-right {
        margin-left: 3rem;
        width: 67%;
        position: absolute;
        right: 0;
        div {
            display: flex;
            justify-content: flex-start;
        }
        float:right;
        p {
            font-size: 1.5rem;
            color: #72BDD0;
        }
        ul:nth-child(1) {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            max-width: 800px;
            margin-left:6rem;
            li:nth-child(2){
                margin-left:5rem;
                 border:none;
                span{
                    width:6rem;
                }
            }
              
            
            li {
                
                display: flex;
                margin-bottom:0.5rem;
                flex-wrap:wrap;
                max-width:800px;
                 
                a{
                    height: 49px;
                    
                }
                a:nth-child(6){
                    margin-left:7rem;
                }
                span{
                     color:#72BDD0;
                     line-height:49px;
                     font-weight: 600;
                     display:inline-block;
                     font-size:0.85rem;
                     width:7rem;
                     
                }
                
                img {
                    width: 142px;
                    height: auto;
                }
            }
        }
    }
    a {
        color: #72BDD0 !important;
    }
    @media screen and (max-width: 768px) {
        .footer {
            padding: 1rem 1rem 3rem 1rem;
            display: flex;
            flex-direction: column;
        }
        .footer-right,
        .footer-left,
        .footer-center {
            width: 100%;
            margin: 0;
            padding: 0;
            margin-bottom: 1rem;
        }
        .footer-left>p,
        .footer-right>p,
        .footer-center>p {
            text-align: left;
        }
        .footer-right {
            width: 100%;
            position: static;
              ul:nth-child(1)>li>a:nth-child(5n){
                    margin-left:0rem;
                }   
            ul:nth-child(1) {
                display: flex;
                justify-content: flex-start;
                flex-wrap: wrap;
                 margin-left:0rem;
                li:nth-child(2){
                    margin-left:0;
                }
                li {
                     a:nth-child(6){
                    margin-left:0rem;
                    border:none;
                }
                    span{
                        display:block;
                        width:100%;
                    }
                    width: 48%;
                    margin-right:2%;
                    display:block;
                    margin-bottom: 1rem;
                    img {
                        display: block;
                        width: 100%;
                        height: auto;
                        margin-top:0.5rem;
                    }
                }
            }
        }
    }
</style>
