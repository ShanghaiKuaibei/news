<template>
  <div id="app">
    <m-header :lang="lang"></m-header>
    <router-view/>
    <m-footer :lang="lang" v-if="!allShow&&!shShow"></m-footer>
    <m-isfooter :lang="lang" v-if="allShow"></m-isfooter>
    <m-shfooter :lang="lang" v-if="shShow"></m-shfooter>
  </div>
</template>

<script>
  import Header from './components/apps/header.vue'
  import Footer from './components/apps/footer.vue'
  import ISFooter from './components/apps/isfooter.vue'
  import ShFooter from './components/apps/shfooter.vue'
  export default {
    data() {
      return {
        language:""
      }
    },
     computed: {
            allShow() {
                return this.$store.state.allShow;
            },
            lang(){
              return this.$store.state.ch?"ch":"en"
            },
            shShow(){
               return this.$store.state.shShow;
            }
        },
    methods: {},
    created(){

    },
    watch:{
      '$route'(newValue){
        const { lang }=newValue.params;
        if(lang) this.$store.commit(lang==="ch"?"toCh":"toEn")
      }
    },
    components: {
      'm-header': Header,
      'm-footer': Footer,
      'm-isfooter':ISFooter,
      'm-shfooter':ShFooter
    }
  }
</script>

<style>
body{
  margin:0;
  padding:0;
}
  #app {
    margin:0;
    padding:0;
    width:100%;
  }
</style>
