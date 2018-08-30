<template>
<!-- 天空Echange-->
    <div v-if="ch">
        <banner :bannerMsg="metBaMsg"></banner>
        <div class="echange">
            <h1>未找到任何信息</h1>
            <p>看来我们不能找到您要找的东西。请尝试进行搜索。</p>
            <input type="text" placeholder="搜索..."><button class="el-button--primary">搜索</button>
        </div>
    </div>
     <div v-else>
        <banner :bannerMsg="metBaMsg"></banner>
        <div class="echange">
            <h1>No information was found</h1>
            <p>It seems that we can't find what you are looking for. Please try the search.</p>
            <input type="text" placeholder="Search..."><button class="el-button--primary">SEARCH</button>
        </div>
    </div>
</template>
<script>
    import Banner from "../common/banner.vue"
    export default {
        data() {
            return {
                metBaMsg: {
                    "img_url": ["../../../static/images/bannerindex.jpg"],
                    "ctitle": "天空Exchange",
                    "etitle":"Category: Sky Exchange",
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
.el-button--primary{
    background: -webkit-linear-gradient(#5BABD6, #8DC8E7) !important;
  background: -o-linear-gradient(#5BABD6, #8DC8E7) !important; 
  background: -moz-linear-gradient(#5BABD6, #8DC8E7) !important; 
  background: linear-gradient(#5BABD6, #8DC8E7) !important; 
  border:none !important;
  color:#000 !important;
  font-weight:700 !important;
  padding:0.5rem 1rem;
}
.el-button--primary:hover{
    background: -webkit-linear-gradient(#8DC8E7,#5BABD6) !important; 
  background: -o-linear-gradient(#8DC8E7,#5BABD6) !important; 
  background: -moz-linear-gradient(#8DC8E7,#5BABD6) !important; 
  background: linear-gradient(#8DC8E7,#5BABD6) !important; 
  color:#000 !important;
  font-weight:700 !important;
}
    .echange {
        width: 60%;
        max-width:1300px;
        margin: 5rem auto;
        h1 {
            text-align: center;
            font-size: 3rem;
            font-weight: 500;
        }
        p {
            font-size: 1.2rem;
        }
        input {
            height: 30px;
            width: 30%;
            background-color: #eee;
            padding-left: 1rem;
            border: none;
            margin-right: 1rem;
        }
    }
    @media screen and (max-width:768px) {
        .echange {
            width: 90%;
        }
        .echange h1{
            font-size:1.7rem;
        }
        .echange p{
             font-size:1.1rem;
        }
        .echange input{
            width:60%;
        }
    }
</style>