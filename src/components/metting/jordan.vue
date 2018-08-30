<template>
    <!-- 会议约旦-->
    <div>
        <banner :bannerMsg="metBaMsg"></banner>
        <mettime :metTimeMsg="metTimeMsg" :imgUrl="imgUrl"></mettime>
        <div class="click-enrolment" @click="register" v-if="!isOver">
            <p>
                {{ch?`
                <--点击报名-->`:`
                    <--REGISTRATION-->`}}
            </p>
        </div>
        <div class="is-msg" v-html="ch?isMsg.detail:isMsg.detail_en">
       
        </div>
        <myvideo :url="videoUrl" :isOver="isOver"></myvideo>
        <metper :metPerMsg="metPerMsg" :introduce="introduce" :introduceEn="introduceEn"></metper>
        <metproj :metProjMsg="metProjMsg"></metproj>
        <metplau :metPlauMsg="metPlauMsg" :haveOne="haveOne" :showRoad="showRoad"></metplau>
        <register :url="url" :isOver="isOver"></register>
    </div>
</template>
<script>
    import Banner from "../common/banner.vue"
    import MetTime from "../common/metime.vue"
    import MetPer from "../common/metper.vue"
    import MetProj from "../common/metproj.vue"
    import MetPlau from "../common/metplau.vue"
    import Register from "../common/register.vue"
    import Video from "../common/video.vue"
    export default {
        data() {
            return {
                haveOne: false,
                url: "conference-shanghai/registration",
                metBaMsg: {
                    "img_url": ["../../../static/images/bannerindex.jpg", "../../../static/images/SLIDE-SKYLEDGERLONDON2.jpg",
                        "../../../static/images/shanghaibanner.jpg"
                    ],
                    "ctitle": "天空账簿区块链大会约旦站",
                    "etitle": "SKYLEDGER Jordan 2018",
                    "btitle": ""
                },
                metTimeMsg: [],
                metPerMsg: [],
                metProjMsg: [],
                metPlauMsg: [],
                introduce: [],
                introduceEn: [],
                isOver: false,
                videoUrl: [],
                showRoad: true,
                imgUrl: '',
                isMsg:''
            }
        },
        created() {
            this.getTime();
            this.getProject();
            this.getPlau();
            this.getSpeaker();
            this.getImgUrl();
            this.showFooter();
        },
        computed: {
            ch() {
                return this.$store.state.ch;
            },
        },
         destroyed() {
            this.hideFooter()
        },
        methods: {
            getImgUrl() {
                let that = this;
                this.$http.get(api+'/conference-shanghai/detail')
                    .then(function(res) {
                        that.isMsg=res.data[0];
                        that.imgUrl=res.data[0].map
                    })
                    .catch(function(error) {
                        console.log(error);
                    })
            },
            getUrl() {
                let that = this;
                this.$http.get(api+'/conference-shanghai/vedio')
                    .then(function(res) {
                        that.videoUrl = res.data;
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            },
            showFooter() {
                this.$store.commit("toShowSh");
            },
            hideFooter() {
                this.$store.commit("toHideSh");
            },
            register() {
                window.location.hash = "#register";
            },
            getTime() {
                let that = this;
                this.$http.get(api+'/conference-shanghai/conference')
                    .then(function(res) {
                        that.metTimeMsg = res.data;
                           that.isOver=res.data[0].over
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            },
            getProject() {
                let that = this;
                this.$http.get(api+'/conference-shanghai/project')
                    .then(function(res) {
                        that.metProjMsg = res.data;
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            },
            getPlau() {
                let that = this;
                this.$http.get(api+'/conference-shanghai/agenda')
                    .then(function(res) {
                        that.metPlauMsg = res.data;
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            },
            getSpeaker() {
                let that = this;
                this.$http.get(api+'/conference-shanghai/speaker')
                    .then(function(res) {
                        that.metPerMsg = res.data;
                        that.introduce = res.data.map(function(item) {
                            return item.introduce.replace(/\r\n/g, "<p>")
                        })
                        that.introduceEn = res.data.map(function(item) {
                            return item.introduce_en.replace(/\r\n/g, "<p>")
                        })
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        },
        components: {
            "banner": Banner,
            "mettime": MetTime,
            "metper": MetPer,
            "metproj": MetProj,
            "metplau": MetPlau,
            "register": Register,
            "myvideo": Video
        },
    }
</script>
<style lang="scss" scoped>
.is-msg{
    width:70%;
    margin:0 auto;
    h4{
        font-size:1.5rem !important;
        text-align:center !important;
    }
    p{
        text-indent:1.5rem;

    }
}
    .click-enrolment {
        display: flex;
        justify-content: center;
    }
    .click-enrolment p {
        text-align: center;
        width: 12rem;
        color: #FD404E;
        transition: all 1s;
        -moz-transition: all 2s;
        -webkit-transition: all 2s;
        -o-transition: all 2s;
        animation: run 2s infinite linear alternate;
         -webkit-animation: run 2s infinite linear alternate;
        cursor: pointer;
    }
    .click-enrolment:hover p {
         animation-play-state: paused;
        -webkit-animation-play-state: paused;
    }
    @keyframes run {
        0% {
            transform: scale(0.9);
            -ms-transform: scale(0.9);
            -moz-transform: scale(0.9);
            -webkit-transform: scale(0.9);
            -o-transform: scale(0.9);
        }
        100% {
            transform: scale(1.1);
            -ms-transform: scale(1.1);
            -moz-transform: scale(1.1);
            -webkit-transform: scale(1.1);
            -o-transform: scale(1.1);
        }
    }
    .registration p {
        font-size: 2rem !important;
    }
</style>
