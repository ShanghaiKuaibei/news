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
                <p>{{ch?"合作伙伴":"Our&nbsp;Partner"}}</p>
                <div>
                    <ul>
                        <li v-for="(item,i) in panter" :key="i">
                            <a :href="item.link" :title="ch?item.cname:item.ename" target="_blank">
                                <img :src="item.cimg" alt="">
                            </a>
                        </li>
                    </ul>
                    <!-- <ul class="footer-link">
                            <li>
                                <a href="http://www.the-blockchain.com/author/richard-kastelein/">www.the-blockchain.com</a>
                            </li>
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
                        "cimg": "../../../static/images/01.png",
                        "cname": "上海快贝网络科技有限公司 ",
                        "ename": "Shellpay,Shanghai",
                        "link": "http://www.shellpay2.com"
                    }, {
                        "cimg": "../../../static/images/02.png",
                        "cname": "上海喵爪网络科技有限公司 ",
                        "ename": "MZ Education",
                        "link": "http://www.mzworld.cn/"
                    }, {
                        "cimg": "../../../static/images/03.png",
                        "cname": "Skycoin社区",
                        "ename": "Skycoin Community",
                        "link": "https://www.skycoin.net/"
                    },
                    {
                        "cimg": "../../../static/images/04.png",
                        "cname": "Skyledger.news",
                        "ename": "Skyledger.news",
                        "link": "https://www.skyledger.news/"
                    },
                    {
                        "cimg": "../../../static/images/05.png",
                        "cname": "BlockchainNews ",
                        "ename": "BlockchainNews",
                        "link": "http://www.the-blockchain.com/"
                    },
                    {
                        "cimg": "../../../static/images/06.png",
                        "cname": "Rise TLV",
                        "ename": "Rise TLV",
                        "link": "javascript:void(0)"
                    },
                    {
                        "cimg": "../../../static/images/07.png",
                        "cname": "Asian-Israel-Blockchain-Association ",
                        "ename": "Asian-Israel-Blockchain-Association",
                        "link": "javascript:void(0)"
                    },
                ],
                company: [{
                    "cimg": "../../../static/images/0003.jpg",
                    "cname": "上海快贝网络科技有限公司 ",
                    "ename": "Shellpay,Shanghai"
                }, {
                    "cimg": "../../../static/images/0004.jpg",
                    "cname": "上海喵爪网络科技有限公司 ",
                    "ename": "MZ Education"
                }, {
                    "cimg": "../../../static/images/0006-e1520246379984.jpg",
                    "cname": "Skycoin社区",
                    "ename": "Skycoin Community"
                }],
            }
        },
        computed: {
            ch() {
                 return this.$props.lang==='ch';
                // return this.$store.state.ch;
            }
        },
        props:{
            lang:{
                type:String
            }
        },
        updated() {
            console.dir(this.GLOBAL);
        }
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
        padding:1rem 0rem 1rem 3rem;
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
         margin-left:3rem;
         width:67%;
         position:absolute;
         right:0;
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
              display:flex;
            justify-content:flex-start;
              flex-wrap: wrap;
              max-width:900px;
            li {
                height: 63px;
                display: flex;
                border-right:1px  solid #eee;
                 border-bottom:1px  solid #eee;
               a{
                   display:block;
                   width:100%;

               }
                img {
                    width: auto;
                    height: 100%;
                }
            }
          
        }
    }
    a {
        color: #72BDD0 !important;
    }
    @media screen and (max-width: 768px) {
        .footer {
            padding: 1rem 1rem 0 1rem;
            display:flex;
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
          width:100%;
          
          position:static;
            ul:nth-child(1) {
                display: flex;
                justify-content: flex-start;
                flex-wrap: wrap;
                li {
                    width: 50%;
                    height:71px;
                    margin-bottom: 1rem;
                     border:none;
                    img{
                        display:block;
                        width:100%;
                        height:100%;
                    }
                }
               
            }
        }
    }
</style>