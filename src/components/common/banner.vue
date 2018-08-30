<template>
    <!-- banne图片部分-->
    <div class="hero">
        <!-- <img :src="bannerMsg.img_url" alt="">-->
        <div class="hero-inner">
            <p>{{ch?bannerMsg.ctitle:bannerMsg.etitle}}</p>
            <p>{{ch?bannerMsg.cbtitle:bannerMsg.ebtitle}}</p>
        </div>
        <template>
                                  <el-carousel indicator-position="outside" :interval="5000" arrow="never">
                                    <el-carousel-item v-for="item in bannerMsg.img_url" :key="item">
                                      <img :src="item" alt="">
                                    </el-carousel-item>
                                  </el-carousel>
</template>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {},
        computed: {
            ch() {
                return this.$store.state.ch;
            }
        },
        props: ["bannerMsg"]
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
    .hero {
        position: relative;
        height: 380px;
        margin-top: -1%;
        opacity: 1;
        animation: hero 1.5s linear alternate;
        animation: hero 1.5s linear alternate;
        -webkit-animation: run 2s infinite linear alternate;
        transition: all 1s 2.5s;
        -moz-transition: all 1s 2.5s;
        -webkit-transition: all 1s 2.5s;
        -o-transition: all 1s 2.5s;
        @keyframes hero {
            from {
                opacity: 0.4;
            }
            to {
                opacity: 1;
            }
        }
        .hero-inner {
            position: absolute;
            z-index: 30;
            right: 6%;
            top: 20%;
            p {
                color: #fff;
            }
            @keyframes word {
                from {
                    font-size: 0;
                }
                to {
                    font-size: 3rem;
                }
            }
            p:nth-child(1) {
                font-size: 3rem;
                font-weight: 700;
                animation: word 1.5s linear alternate;
                transition: all 1s 2.5s;
            }
            p:nth-child(2) {
                font-size: 1.5rem;
            }
        }
        img {
            position: absolute;
            clip: rect(0px, 1920px, 380px, 0px);
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
    }
    @media screen and (max-width: 768px) {
        body,
        html {
            font-size: 16px;
            .hero {
                position: relative;
                height: 30vh;
                .hero-inner {
                    position: absolute;
                    z-index: 3;
                    right: 0rem;
                    top: 5vh;
                    text-align: right;
                    p {
                        width: 70%;
                        margin: 0 auto;
                        text-align: left;
                    }
                    @keyframes word {
                        from {
                            font-size: 0;
                        }
                        to {
                            font-size: 2rem;
                        }
                    }
                    p:nth-child(1) {
                        font-size: 2rem;
                        font-weight: 700;
                        animation: word 1.5s linear alternate;
                         -webkit-animation:  word 1.5s linear alternate;
                        transition: all 1s 2.5s;
                        -moz-transition: all 1s 2.5s;
                        -webkit-transition: all 1s 2.5s;
                        -o-transition: all 1s 2.5s;
                    }
                    p:nth-child(2) {
                        font-size: 1.5rem;
                    }
                }
            }
            .hero>div,
            .hero>img {
                width: 100%;
                margin: 0;
                padding: 0;
            }
        }
    }
</style>