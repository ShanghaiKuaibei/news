<template>
    <!--会议演讲 -->
    <div class="met-per" v-if="ch">
        <p>演讲嘉宾</p>
        <ul>
            <li v-for="(item,i) in metPerMsg" :key="i">
                <!-- speaker 简单信息-->
                <div class="spa-img" :class="{active:item.showimg}">
                    <img :src="item.imageurl" alt="">
                    <div class="spa-title" @click="imgHide(i)">
                        <p>{{item.name}}</p>
                        <span>{{item.title1}}</span>
                        <span>{{item.title2}}</span>
                    </div>
                </div>
                <!-- speaker 详细信息-->
                <div class="spa-msg" :class="{active:item.showimg}" @click="msgHide(i)">
                    <h2>{{item.name}}</h2>
                    <p v-html="introduce[i]"></p>
                </div>
            </li>
        </ul>
    </div>
    <div class="met-per" v-else>
        <p>SPEAKER</p>
        <ul>
            <li v-for="(item,i) in metPerMsg" :key="i">
                <!-- speaker 简单信息-->
                <div class="spa-img" :class="{active:item.showimg}">
                    <img :src="item.imageurl" alt="">
                    <div class="spa-title" @click="imgHide(i)">
                        <p>{{item.name_en}}</p>
                        <span>{{item.title1_en}}</span>
                        <span>{{item.title2_en}}</span>
                    </div>
                </div>
                <!-- speaker 详细信息-->
                <div class="spa-msg espa-msg" :class="{active:item.showimg}" @click="msgHide(i)">
                    <h2>{{item.name_en}}</h2>
                    <p v-html="introduceEn[i]"></p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                imgflag: false,
                msgflag: false,
            }
        },
        computed: {
            ch() {
                return this.$store.state.ch;
            },
        },
        methods: {
            imgHide(i) {
                for (let j = 0; j < this.$props.metPerMsg.length; j++) {
                    this.$props.metPerMsg[j].showimg = false;
                }
                this.$props.metPerMsg[i].showimg = !this.$props.metPerMsg[i].showimg;
            },
            msgHide(i) {
                for (let j = 0; j < this.$props.metPerMsg.length; j++) {
                    this.$props.metPerMsg[j].showimg = false;
                }
            }
        },
        props: ["metPerMsg", "introduce", "introduceEn"]
    }
</script>
<style lang="scss">
    .spa-img {
        transform: rotateY(0);
        transition: all 0.30s ease-in-out 0s;
    }
    .spa-img.active {
        transform: rotateY(90deg);
        transition: all 0.30s ease-in-out 0s;
    }
    .spa-msg {
        position: absolute;
        top: 0;
        left: 0;
        overflow: auto;
        overflow-x: hidden;
        transform: rotateY(-90deg);
        transition: all 0.30s ease-in-out 0s;
        cursor: pointer;
    }
    .espa-msg {
        text-align: center;
    }
    .spa-msg.active {
        transform: rotateY(0deg);
        transition: all 0.30s ease-in-out 0s;
    }
    .spa-msg::-webkit-scrollbar {
        width: 4px;
        height: 4px;
    }
    .spa-msg::-webkit-scrollbar-thumb {
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        background: rgba(0, 0, 0, 0.2);
    }
    .spa-msg::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        border-radius: 0;
        background: rgba(0, 0, 0, 0.1);
    }
    .spa-img:hover {
        cursor: pointer;
    }
    .spa-img img {
        transition: all 0.3s;
    }
    .spa-img img:hover {
        transform: scale(1.1) !important;
        -ms-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        -o-transform: scale(1.1);
    }
    .spa-title:hover p {
        color: #13B1CD;
    }
    ul,
    li {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .met-per>p {
        font-size: 2rem;
        color: #13B1CD;
        text-align: center;
    }
    .met-per {
        padding: 0 3rem;
        max-width:1400px;
         margin:0 auto;
        .spa-img {
            padding: 1rem;
        }
        ul {
            display: flex;
            flex-wrap: wrap;
            width:100%;
            li {
                position: relative;
                width: 22%;
                border: 1px solid #ccc;
                margin-bottom: 2rem;
                margin-right: 2.2vw;
                img {
                    display: block;
                    width: 85%;
                    height: auto;
                    margin: 0rem auto;
                }
                .spa-title {
                    p {
                        text-align: center;
                        font-size: 1rem;
                        font-weight:600;
                    }
                    span {
                        text-align: center;
                        display: block;
                        font-size: 0.9rem;
                        line-height: 2rem;
                    }
                }
                .spa-msg {
                    background-color: #13B1CD;
                    color: #fff;
                    width: 100%;
                    height: 100%;
                    h2 {
                        font-size: 1rem;
                        text-align: center;
                        padding: 0rem;
                    }
                    p {
                        font-size: 0.9rem;
                        line-height: 1.5rem;
                        padding: 0rem;
                        text-indent: 1rem;
                        margin-top: 0.3rem;
                        margin-bottom: 0;
                    }
                }
                .spa-msg>p {
                    text-indent: 2rem;
                    padding: 0 1rem;
                }
            }
            li:nth-child(4n) {
                margin-right: 0;
            }
        }
    }
    @media screen and (max-width:768px) {
        .met-per{
            padding:0 2rem;
        }
        .met-per>p {
            font-size: 1.7rem;
        }
        .met-per ul {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
        }
        .met-per ul li {
            width: 100%;
        }
    }
</style>