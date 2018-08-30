<template>
    <!--会议日程 -->
    <div class="met-plau" v-if="ch">
        <p>会议日程</p>
        <ul v-if="haveOne==false">
            <li class="met-am" :class="{methide:hideFlag}">
                <p>上午</p>
                <ul ref="mon">
                    <li v-for="(item,i) in metPlauMsg" :key="i" v-if="item.morning">
                        {{item.title}}<br>
                        <span>{{item.speaker?"演讲嘉宾：":""}}
                        {{item.speakertitle}}&nbsp;{{item.speaker}}</span>
                    </li>
                </ul>
            </li>
            <li class="met-pm" :class="{metone:flag}">
                <p>下午</p>
                <ul>
                    <li v-for="(item2,i) in metPlauMsg" :key="i" v-if="item2.afternoon">
                       {{item2.title}}<br>
                        <span>{{item2.speaker?"演讲嘉宾：":""}}{{item2.speakertitle}}&nbsp;{{item2.speaker}}</span>
                    </li>
                </ul>
            </li>
        </ul>
        <ul v-if="haveOne==true">
         <li class="met-pm metone">
                <p></p>
                <ul>
                    <li v-for="(item,i) in metPlauMsg" :key="i">
                        &bull;&nbsp;&nbsp;&nbsp;{{item.title}}
                        <span>{{item.speaker?"演讲嘉宾：":""}}{{item.speakertitle}}&nbsp;{{item.speaker}}</span>
                    </li>
                </ul>
            </li>
        </ul>
        <div  v-if="showRoad" class="mt-road">
        <h2>项目路演</h2>
        <p>本次大会设有企业路演环节，用于选出最好的区块链项目在天空账簿上发展，具体时间为6月10日17:00-19:00。如需报名请于6月5日18：00前发送email到<a href="mailto:skynews@shellpay2.com">skynews@shellpay2.com</a>。 请务必注明您的姓名，公司，电话及项目介绍。</p>
        </div>
    </div>
    <div class="met-plau" v-else>
        <p>AGENDA</p>
        <ul v-if="haveOne==false">
            <li class="met-am">
                <p>MORNING SESSION</p>
                <ul>
                    <li v-for="(item,i) in metPlauMsg" :key="i" v-if="item.morning">
                        {{item.title_en}}<br>
                        <span>{{item.speakertitle_en}}&nbsp;{{item.speaker_en}}</span>
                    </li>
                </ul>
            </li>
            <li class="met-pm">
                <p>AFTERNOON SESSION</p>
                <ul>
                    <li v-for="(item2,i) in metPlauMsg" :key="i" v-if="item2.afternoon">
                        {{item2.title_en}}<br>
                        <span>{{item2.speakertitle_en}}&nbsp;{{item2.speaker_en}}</span>
                    </li>
                </ul>
            </li>
        </ul>
           <ul v-if="haveOne==true">
         <li class="met-pm metone">
                <p></p>
                <ul>
                    <li v-for="(item,i) in metPlauMsg" :key="i">
                        &bull;&nbsp;&nbsp;&nbsp;{{item.title_en}}
                        <span>{{item.speakertitle_en}}&nbsp;{{item.speaker_en}}</span>
                    </li>
                </ul>
            </li>
        </ul>
          <div v-if="showRoad" class="mt-road">
        <h2>Project road show</h2>
        <p>This is a pitch event where entrepreneurs get to pitch directly to the Skyledger team. The best project will be selected to develop on the Skyledger platform. For registration please email to:<a href="mailto:skynews@shellpay2.com">skynews@shellpay2.com</a>,with your name, phone number, and a project pitch deck by 18:00, June 5.</p>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                flag: false,
                hideFlag: false,
            }
        },
        computed: {
            ch() {
                return this.$store.state.ch;
            }
        },
        created() {},
        mounted() {
        },
        methods: {},
        props: ["metPlauMsg","haveOne","showRoad"]
    }
</script>
<style lang="scss">
.mt-road{
    text-align:center;
    color:#fff;
    h2{
        font-size:2rem;
    }
    p{
        font-size:1.1rem;
        line-height:1.8rem;
        padding:0 1rem;
    }
}
    .met-plau>p {
        text-align: center;
        font-size: 2rem;
        color: #fff;
        padding-top: 1rem;
    }
    .met-plau>ul {
        width: 95%;
        max-width:1300px;
        padding: 0 1rem;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
    }
    .met-plau>ul>li {
        background-color: #fff;
        text-align: center;
        width: 49%;
        list-style:none;
        p {
            color: #13B1CD;
            font-size:1.2rem;
        }
    }
    .met-plau {
        background-color: #13B1CD;
        padding-bottom: 3rem;
        margin-bottom: 3rem;
    }
    .met-am,
    .met-pm {
        ul {
            li {
                text-align: center;
                font-size: 1.1rem;
                list-style:none;
                span {
                    color: #13B1CD;
                    font-size: 0.9rem;
                    display: block;
                    margin: 0.8rem 0 1.5rem 1rem;
                }
            }
        }
    }
    .met-plau>ul>.metone {
        width: 90%;
        margin:0 auto;
        ul {
             padding:2rem 0rem;
            li {
                padding:0rem 2rem;
                margin-bottom:2rem;
                text-align: left;
                list-style:none;
                span {
                    display: inline-block;
                    margin: 0;
                    float: right;
                    width:24rem;
                    text-align:left;
                    
                }
            }
        }
    }
    .met-plau>ul>.methide {
        display: none;
    }
    @media screen and (max-width:768px) {
        .met-plau>ul {
            width:91%;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
        }
        .met-plau>ul>li {
            width: 100%;
            margin-bottom: 2rem;
            list-style:none;
        }
        .met-plau>ul>.metone {
        ul {
            li {
                text-align:center;
                margin-bottom:1.3rem;
                 padding:0rem 1rem;
                 list-style:none;
                span {
                    display: block;
                    float: none;
                    text-align:center;
                    margin-top:0.8rem;
                     width:100%;
                    
                }
            }
        }
    }
    }
</style>