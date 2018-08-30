<template>
    <!--首页 -->
    <div class="home">
        <banner :bannerMsg="indexMsg"></banner>
        <div class="v-all">
            <div class="v-video">
                <video :src="video_url" controls="controls" autoplay></video>
                  <!-- <video src="../../../static/hy.mp4" autoplay controls="controls"></video> -->
            </div>
           <div class="v-img">
                <ul>
                    <li v-for="(item,i) in  imgMsg" :key="i">
                        <img :src="item.img_url" alt="">
                        <p v-if="ch">{{item.msg}}</p>
                    </li>
                </ul>
            </div>
            <!-- <div class="v-img">
                <ul>
                    <li v-for="(item,i) in  imgMsg" :key="i">
                        <video src="../../../static/hy.mp4" controls="controls"></video> 
                    </li>
                </ul>
            </div>
            -->
        </div>
        <div class="sky">
            <!--会议 -->
            <div class="sky-met">
                <h2>{{ch?"会议":"CONFERNCE"}}</h2>
                <ul v-if="ch">
                    <li v-for="(item,i) in  metName" :key="i" @click="goMet(item.name)">
                        <span>{{item.time}}</span>
                        <span>&bull;</span>
                        <span>{{item.title}}</span>
                    </li>
                </ul>
                <ul v-else>
                    <li v-for="(item,i) in  metName" :key="i" @click="goMet(item.name)">
                        <span>{{item.etime}}</span>
                        <span>&bull;</span>
                        <span>{{item.etitle}}</span>
                    </li>
                </ul>
                 <h2>SKY EXCHANGE</h2>
            </div>
            <!--新闻 -->
            <div class="sky-new" v-if="ch">
                <h2>sky新闻</h2>
                <!--最重要信息 -->
                <ul ref="impor">
                    <li v-for="(item,i) in metMsg" v-if="item.important" :key="i">
                        <h3 @click="goNew(item.id)">【{{item.title}}】</h3>
                        <p>
                            <span v-html="item.text.replace(/<img[^<>]+>/g,'').replace(/<div[^<>]+>/g,'').replace(/<p>/g,'').replace(/<h1>/g,'').replace(/<video[^<>]+>/g,'')"></span>
                        </p>
                        <span class="more" @click="goNew(item.id)">
                                                                                                   <span>...</span>
                        <span>了解更多</span>
                        </span>
                        <span>{{item.time | dataFormat}}</span>
                    </li>
                </ul>
                <!--最新信息 -->
                <ul ref="normal">
                    <li v-for="(item,i) in metMsg" v-if="!item.important&& i<nLength" :key="i">
                        <h3 @click="goNew(item.id)">【{{item.title}}】</h3>
                        <p>
                            <span v-html="item.text.replace(/<img[^<>]+>/g,'').replace(/<div[^<>]+>/g,'').replace(/<p>/g,'').replace(/<h1>/g,'').replace(/<video[^<>]+>/g,'')"></span>
                        </p>
                        <span class="more" @click="goNew(item.id)">
                                                                                                   <span>...</span>
                        <span>了解更多</span>
                        </span>
                        <span>{{item.time | dataFormat}}</span>
                    </li>
                </ul>
                <!--更多信息 -->
                <div class="more-new" ref="more">
                    <ul>
                        <li v-for="(item,i) in moreMsg" v-if="!item.important&& i>nLength-1&&i<10" :key="i" @click="goNew(item.id)">
                            {{item.title}}
                        </li>
                    </ul>
                    <p @click="goNews()">更多资讯</p>
                </div>
            </div>
            <div class="sky-new" v-if="!ch">
                <h2>SKY NEWS</h2>
                <!--最重要信息 -->
                <ul ref="imporEn">
                    <li v-for="(item,i) in metMsgEn" v-if="item.important" :key="i">
                        <h3 @click="goNew(item.id)">【{{item.title}}】</h3>
                        <p>
                            <span v-html="item.text.replace(/< img[^<>]+>/g,'').replace(/<img[^<>]+>/g,'').replace(/<div[^<>]+>/g,'').replace(/<p><\/p>/g,'').replace(/<p[^<>]+>/g,'').replace(/<h1>/g,'').replace(/<video[^<>]+>/g,'')"></span>
                        </p>
                        <span class="more" @click="goNew(item.id)">
                                                                                                   <span>...</span>
                        <span>Read More</span>
                        </span>
                        <span>{{item.time | dataFormats}}</span>
                    </li>
                </ul>
                <!--最新信息 -->
                <ul ref="normal">
                    <li v-for="(item,i) in metMsgEn" v-if="!item.important&& i<nLengthEn" :key="i">
                        <h3 @click="goNew(item.id)">【{{item.title}}】</h3>
                        <p>
                            <span v-html="item.text.replace(/< img[^<>]+>/g,'').replace(/<img[^<>]+>/g,'').replace(/<div[^<>]+>/g,'').replace(/<p[^<>]+>/g,'').replace(/<h1>/g,'').replace(/<video[^<>]+>/g,'')"></span>
                        </p>
                        <span class="more" @click="goNew(item.id)">
                                                                                                   <span>...</span>
                        <span>Read More</span>
                        </span>
                        <span>{{item.time | dataFormats}}</span>
                    </li>
                </ul>
                <!--更多信息 -->
                <div class="more-new" ref="more">
                    <ul>
                        <li v-for="(item,i) in moreMsgEn" v-if="!item.important&& i>nLengthEn-1&&i<10" :key="i" @click="goNew(item.id)">
                            {{item.title}}
                        </li>
                    </ul>
                    <p @click="goNews()">More Information</p>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import Banner from "../common/banner.vue"
    export default {
        data() {
            return {
                lang:"",
                video_url: "",
                iLength: 0,
                nLength: 0,
                 iLengthEn: 0,
                nLengthEn: 0,
                indexMsg: {
                    "img_url": ["../../../static/images/bannerindex.jpg", "../../../static/images/bannerindex1.jpg", "../../../static/images/bannerindex2.jpg",
                        "../../../static/images/bannerindex3.jpg",
                        "../../../static/images/bannerindex4.jpg",
                        "../../../static/images/bannerindex5.jpg",
                        "../../../static/images/bannerindex6.png"
                    ],
                    "ctitle": "探索天空账本星空的奥秘",
                    "etitle": "Explore Skyledger Universe",
                    "cbtitle": "共同创建天空账本社区",
                    "ebtitle": "Building Skyledger Community"
                },
                imgMsg: [{
                        "img_url": "../../../static/images/02.jpg",
                        "msg": "南昌消息 | 盛大、腾讯、快贝等大咖云集，共话区块链技术"
                    },
                    {
                        "img_url": "../../../static/images/03.jpg",
                        "msg": "聚焦马耳他 ①：数字科技创新中心"
                    },
                    {
                        "img_url": "../../../static/images/04.jpg",
                        "msg": "太阳能公司在迪拜的发展"
                    }
                ],
                metName: [{
                        "time": "4月20日",
                        "title": "英国.伦敦",
                        "etime": "Apr.20th",
                        "etitle": "London,England",
                        "name": "conference-london"
                    },
                    {
                        "time": "4月28/29日",
                        "title": "迪拜",
                        "etime": "Apr.28th/29th",
                        "etitle": "Dubai",
                        "name": "conferencedubai"
                    },
                    {
                        "time": "5月21日",
                        "title": "以色列.特拉维夫",
                        "etime": "May.21",
                        "etitle": "Tel Aviv,Israel",
                        "name": "conferenceisrael"
                    },
                     {
                        "time": "6月10日",
                        "title": "中国.上海",
                        "etime": "June.10",
                        "etitle": "Shanghai,China",
                        "name": "conferenceshanghai"
                    },
                    {
                        "time": "9月5日",
                        "title": "约旦",
                        "etime": "Sept.5",
                        "etitle": "Jordan",
                        "name": "conferencejordan"
                    }
                ],
                metMsg: [],
                 metMsgText: [],
                moreMsg: [],
                metMsgEn: [],
                moreMsgEn: []
            }
        },
        computed: {
            ch() {
                return this.$store.state.ch;
            },
            normalLength() {
                var normalLength = 5 - this.$refs.impor.children.length;
                return normalLength
            },
             normalLengthEn() {
                var normalLength = 5 - this.$refs.imporEn.children.length;
                return normalLength
            }
        },
        created() {
            this.getVideo();
            this.getNews();
             this.getNewsEn();
             const { lang }=this.$route.params;
             localStorage.setItem("lang",lang);
             if(lang){
                this.lang = lang;
                this.lang==="ch"?
                    this.$store.commit("toCh")
                    :this.$store.commit("toEn");
             };
        },
        watch:{
            '$route'(newValue){
                const { lang }=newValue.params;
                lang && (this.lang = lang);
            }
        },
        methods: {
            goMet(name) {
                this.$router.push({
                    path: "/" + name
                })
            },
            goNew(id) {
                this.$router.push({
                    path: '/category/news/' + id
                })
            },
            goNews() {
                this.$router.push({
                    path: '/category/news'
                })
            },
            getNews() {
                let that = this;
                this.$http.get(api+"/news/main").then(function(res) {
                    that.metMsg = res.data;
                    let count = 0;
                    for (let i = 0; i < that.metMsg.length; i++) {
                        if (that.metMsg[i].important) {
                            count++
                        }
                    }
                    that.iLength = count;
                    that.nLength = 5 - count;
                    that.moreMsg = res.data;
                }).catch(function(error) {})
            },
             getNewsEn() {
                let that = this;
                this.$http.get(api+"/newsen/main").then(function(res) {
                    that.metMsgEn= res.data;
                    let count = 0;
                    for (let i = 0; i < that.metMsgEn.length; i++) {
                        if (that.metMsgEn[i].important) {
                            count++
                        }
                    }
                    that.iLengthEn = count;
                    that.nLengthEn = 5 - count;
                    that.moreMsgEn = res.data;
                }).catch(function(error) {})
            },
            getVideo() {
                let that = this;
                this.$http.get(api+"/vedio").then(function(res) {
                    that.video_url = res.data[res.data.length - 1].url;
                }).catch(function(error) {})
            },
        },
        components: {
            "banner": Banner
        }
    }
</script>
<style lang="scss" scoped>

 .v-img{
     ul{
         li{
             video{
                  width: 100%;
                height: 100%;
                object-fit: fill;
             }
         }
     }
 }
    ul,
    li {
        margin: 0;
        padding: 0;
    }
    li {
        list-style: none;
    }
    .v-all {
        max-width:1300px;
        margin:0 auto;
        margin-top: 4rem;
        display: flex;
        justify-content: space-between;
        padding: 0 5rem;
        height: 367px;
        overflow: hidden;
        .v-video {
            width: 64%;
            height:100%;
            video {
                width: 100%;
                height: 100%;
                object-fit: fill;
            }
        }
        .v-img {
            width: 35%;
            height: 100%;
            ul {
                width: 100%;
                height: 100%;
                display: flex;
                flex-wrap: wrap;
                margin: 0;
                padding: 0;
                li {
                    width: 100%;
                    position: relative;
                    p {
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        color: #fff;
                        font-size: 1.09rem;
                        line-height: 1.3rem;
                        margin: 0;
                        background-color: #000;
                        opacity: 0.5;
                        padding: 0.5rem;
                    }
                    img {
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
                li:nth-child(1) {
                    width: 100%;
                    height: 60%;
                }
                li:nth-child(n+2) {
                    width: 47%;
                    height: 35%;
                }
                li:last-child {
                    margin-left: 5%;
                }
            }
        }
    }
    .sky {
        padding: 0 5rem;
        max-width:1300px;
        margin:0 auto;
        margin-top: 3rem;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 3rem;
    }
    .sky-met {
        color: #13B1CD;
        width: 35%;
        margin-right: 5%;
        h2 {
            font-size: 1.5rem;
            font-weight: 600;
        }
        li {
            padding: 1rem;
            height: 5rem;
            background: url("../../../static/images/xian.png") no-repeat 2.1rem 3rem;
            span:nth-child(1) {
                display: inline-block;
                width: 7rem;
            }
            span:nth-child(2) {
                margin-right: 2rem;
            }
        }
        li:last-child {
            background: none;
        }
        li:hover {
           font-weight:700;
            cursor: pointer;
        }
    }
     .sky-new>ul>li>p {
            font-size: 0.875rem;
            line-height: 2rem;
            overflow: hidden;
            height: 4.5rem;
        }
    .sky-new>ul>li {
        position: relative;
        border-bottom: 1px solid #13B1CD;
        padding-bottom: 2rem;
        margin-bottom: 2rem;
        .more {
            cursor: pointer;
            position: absolute;
            right: 0rem;
            bottom: 5rem;
            width: 7rem;
            font-size: 0.875rem;
            background-color: #fff;
            z-index: 2;
            span:last-child {
                color: #13B1CD;
            }
        }
    }
    .sky-new {
        width: 60%;
        h2 {
            font-size: 1.5rem;
            font-weight: 600;
            color: #13B1CD;
        }
        h3 {
            cursor: pointer;
            color: #13B1CD;
            font-size: 1.1rem;
            font-weight: 600;
        }
       
        .more-new {
            li {
                list-style: disc;
                color: #13B1CD;
                font-size: 1.1rem;
                margin-top: 0.5rem;
                cursor: pointer;
            }
            p {
                font-size: 0.9rem;
                color: #13B1CD;
                cursor: pointer;
            }
        }
    }
    @media screen and (max-width: 768px) {
        body,
        html {
            font-size: 16px;
        }
        .v-all {
            width: 100%;
            margin: 0;
            padding: 0;
            margin-top: 2rem;
            display: flex;
            height: auto;
            justify-content: flex-start;
            flex-direction: column;
            .v-video {
                width: 100%;
            }
            .v-img {
                width: 100%;
                ul {
                    display: flex;
                    flex-direction: column;
                    li {
                        width: 100%;
                        margin-top: 2rem;
                        p {
                            width: 100%;
                            padding-left: 1rem;
                            padding-right: 1rem;
                        }
                    }
                    li:nth-child(n+2) {
                        width: 100%;
                    }
                    li:last-child {
                        margin-left: 0%;
                    }
                }
            }
        }
        .v-all>div {
            width: 100%;
        }
        .sky {
            padding: 0 1rem;
            margin-top: 2rem;
            margin-bottom: 2rem;
            .sky-met {
                width: 100%;
                margin-right: 0;
                li {
                    background: url("../../../static/images/xian.png") no-repeat 1.2rem 3rem;
                     span:nth-child(1){
                         width:6.2rem;
                     }
                }
                li:last-child {
                    background: none;
                }
            }
            .sky-new {
                width: 100%;
                .more-new {
                    padding-left: 1rem;
                }
            }
        }
    }
</style>
 