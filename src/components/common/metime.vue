<template>
    <!--会议时间 -->
    <div class="m-london" v-if="ch">
        <h2>{{metTimeMsgCh.name}}</h2>
        <h2>{{metTimeMsgCh.date | dataFormat}} {{metTimeMsgCh.time}}</h2>
        <p>地点：{{metTimeMsgCh.where}}</p> 
        <p>{{metTimeMsgCh.address}}</p>
        <img :src="imgUrl" alt=""> 
    </div>
    <div class="m-london" v-else>
        <h2>{{metTimeMsgEn.name}}</h2>
        <h2>{{metTimeMsgEn.date | dataFormat}}&nbsp;&nbsp; {{metTimeMsgEn.time}}</h2>
        <p>Venue：{{metTimeMsgEn.where}} {{metTimeMsgEn.address}}</p>
         <img :src="imgUrl" alt=""> 
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        computed: {
            ch() {
                return this.$store.state.ch;
            },
            metTimeMsgCh() {
                return this.$props.metTimeMsg.find((v,i) => {
                   return  v.language == "中文"
                })
            },
            metTimeMsgEn() {
                return this.$props.metTimeMsg.find((v,i) => {
                    return v.language == "English"
                })
            },
        },
        mounted(){
            console.log(this.$props.metTimeMsg.find((v,i)=>{
                return v.language == "English"
            }))
        },
        props: ["metTimeMsg","imgUrl"]
    }
</script>
<style lang="scss">
    .m-london {
        margin:0 auto;
        margin-top: 3rem;
        max-width:1300px;
        img{
            margin:0 auto;
            display:block;
            width:80%;
            height:auto;
        }
    }
    .m-london>h2,
    .m-london>p {
        color: #13B1CD;
        font-size: 2rem;
        text-align: center;
        line-height: 2rem;
    }
    @media screen and (max-width:768px) {
        body,
        html {
            font-size: 16px;
        }
        .m-london>h2,
        .m-london>p {
            font-size: 1.7rem;
        }
        .m-london>h2 {
            line-height: 3rem;
        }
    }
</style>