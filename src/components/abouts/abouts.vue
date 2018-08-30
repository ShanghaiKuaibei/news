<template>
<!--联系我们 -->
    <div class="about" v-if="ch">
        <banner :bannerMsg="metBaMsg"></banner>
        <div class="a-msg">
        <p>天空账本资讯</p> 
        <p>第三代区块链天空账本是一个雄心勃勃的项目，它不仅旨在提供比以太坊、Stellar或Neo更好、更快且更灵活的区块链平台，还致力于创建一个全新的经济体，这将为我们的连接、交互和访问信息提供支撑。</p>
            <p> 天空账本资讯作为一个初创项目，能够让每个人均有机会了解天空账本世界中发生的一切事件。
            </p><p> 从基于区块链的新业务到Skywire的发展，这种全新的去中心化网络将使能源回归到用户的手中，我们希望每个人都了解天空账本以及创建该平台的先驱。</p>
        
        <img src="../../../static/images/logo1.jpg" alt="">
        <p>上海快贝网络科技公司提供最先进的天空账本底层平台技术，致力于运用区块链技术，在多个行业建立分布式的去中介化的商业活动平台，包括金融、制造、知识产权等</p><p>上海快贝官网
            <a href="http://www.shellpay2.com"  target="_blank">http://www.shellpay2.com/</a> </p><p>天空账本资讯的中文版内容由上海快贝有限公司负责，对于天空账本资讯中文版用于最终解释权
        </p>
        </div>
    </div>
     <div class="about" v-else>
        <banner :bannerMsg="metBaMsg"></banner>
        <div class="a-msg">
        <h3>Contact us</h3>
            <a href="mailto:skynews@shellpay2.com">skynews@shellpay2.com</a> 
        </div>
    </div>
</template>
<script>
    import Banner from "../common/banner.vue"
    export default {
        data() {
            return {
                metBaMsg: {
                    "img_url":[ "../../../static/images/bannerindex.jpg"],
                    "ctitle": "联系我们",
                    "etitle":"Contact us",
                    "btitle": ""
                },
            }
        },
         computed: {
            ch() {
                 return  this.$store.state.ch;
                // return this.$store.state.ch;
            },
         },
        components: {
            "banner": Banner
        }
    }
</script>
<style lang="scss">
.a-msg{
    width:70%;
    max-width:1300px;
    margin:0 auto;
    font-size:1.15rem;
    line-height:3rem;
    margin-top:5rem;
   a{
       color:#13B1CD;
   }
}
 @media screen and (max-width:768px){
     body,html{
         font-size:16px;
     }
     .a-msg{
         width:90%;
 margin-top:2rem;
  line-height:2rem;
  font-size:1rem;
  img{
      display:block;
      width:100%;
      height:auto;
  }
     }
 }

</style>