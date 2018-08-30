<template>
    <!-- banne图片部分-->
    <div class="londonHero">
        <!-- <img :src="bannerMsg.img_url" alt="">-->
        <div class="londonHero-inner">
            <img :src="logo_url" alt="">
            <p>{{ch?cmsg:emsg}}</p>
        </div>
        <template>
                              <el-carousel indicator-position="outside" :interval="4000"  arrow="never">
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
                emsg: "Welcome To The Future Of Blockchain",
                cmsg: "2018天空账簿区块链大会",
                img_url: ["../../../static/images/SLIDE-SKYLEDGERLONDON1.jpg", "../../../static/images/SLIDE-SKYLEDGERLONDON2.jpg","../../../static/images/SLIDE-SKYLEDGERLONDON3.jpg",
                "../../../static/images/SLIDE-SKYLEDGERLONDON4.jpg"],
                logo_url: "../../../static/images/SKYLEDGER-LOGO-WEB-RETINA-BLACK.png"
            }
        },
        methods: {},
        computed: {
            ch() {
                return this.$store.state.ch;
            }
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
    .londonHero {
        height: 80vh;
        width: 100vw;
        position: relative;
        .londonHero-inner {
            position: absolute;
            top: 3rem;
            left: 0;
            z-index: 30;
            text-align: center;
            width: 100%;
            img {
                height: 10%;
                display: block;
                width: 25%;
                 margin: 1rem 0rem 0 1.5rem;
            }
            p {
                color: #fff;
                font-size: 3rem;
                transition: all 1s;
                opacity: 1;
                animation: hero 2s infinite alternate;
            }
            @keyframes hero {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
    @media screen and (max-width: 768px){
        .londonHero .londonHero-inner img{
            width:45%;
        }
        body,html{
            font-size:16px;
        }
        .londonHero {
        height: 50vh;
        width: 100%;
         .londonHero-inner {
            p {
                font-size: 2rem;
              
            }
        }
    }
    }
</style>