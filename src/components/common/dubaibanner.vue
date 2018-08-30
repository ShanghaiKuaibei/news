<template>
    <!-- banne图片部分-->
    <div class="dubaiHero">
        <!-- <img :src="bannerMsg.img_url" alt="">-->
        <div class="dubaiHero-inner">
            <img :src="logo_url" alt="">
            <p>{{msg}}</p>
            <span>{{ch? metTimeMsgCh.name:metTimeMsgEn.name}}</span>
            <span>{{ch?metTimeMsgCh.date:metTimeMsgEn.date | dataFormat}}</span>
            <span>{{ch?metTimeMsgCh.address:metTimeMsgEn.address}}</span>
        </div>
        <template>
                                  <el-carousel indicator-position="outside" :interval="5000"  arrow="never">
                                    <el-carousel-item v-for="item in img_url" :key="item">
                                      <img :src="item" alt="">
                                    </el-carousel-item>
                                  </el-carousel>
</template>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                metTimeMsg: [],
                msg: "Welcome To The Future Of Blockchain",
                img_url: ["../../../static/images/SLIDE-SKYLEDGERLONDON1.jpg"],
                logo_url: "../../../static/images/SKYLEDGER-LOGO-WEB-RETINA-BLACK.png"
            }
        },
        created() {
            this.getTime();
        },
        methods: {
            getTime() {
                let that = this;
                this.$http.get(api+'/conference-dubai/conference')
                    .then(function(res) {
                        that.metTimeMsg = res.data;
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            },
        },
        computed: {
            ch() {
                return this.$store.state.ch;
            },
             metTimeMsgCh() {
                return this.metTimeMsg.find((v,i) => {
                   return  v.language == "中文"
                })
            },
            metTimeMsgEn() {
                return this.metTimeMsg.find((v,i) => {
                    return v.language == "English"
                })
            },
        },
    }
</script>
<style lang="scss">
    .el-carousel {
        height: 100% !important;
    }
    .el-carousel__container {
        height: 100% !important;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        margin: 0;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .el-carousel__indicators--outside {
        display: none;
    }
    .dubaiHero {
        height: 100vh;
        width: 100vw;
        position: relative;
        .dubaiHero-inner {
            position: absolute;
            top: 0rem;
            left: 0;
            z-index: 3;
            width: 100%;
            height: 100%;
            background-color: rgba(8, 49, 85, 0.5);
            img {
                height: 13%;
                display: block;
                width: auto;
                margin: 3rem 0rem 0 1.5rem;
            }
            p {
                color: #fff;
                font-size: 2rem;
                margin-left: 1.5rem;
                margin-top: 5rem;
            }
            span {
                display: block;
                width: 40%;
                color: #fff;
                font-size: 1.2rem;
                margin-left: 1.5rem;
            }
            span:nth-child(4) {
                margin: 0.5rem 0 2rem 1.5rem;
            }
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
    @media screen and (max-width: 768px) {
        body,
        html {
            font-size: 16px;
        }
        .dubaiHero {
            height: 50vh;
            width: 100%;
            .dubaiHero-inner {
                p {
                    font-size: 1.5rem;
                    margin-top:1rem;
                }
                span{
                    width:100%;
                }
                span:nth-child(4){
                    margin:0.5rem 0 0.8rem 1.5rem;
                }
            }
        }
    }
</style>