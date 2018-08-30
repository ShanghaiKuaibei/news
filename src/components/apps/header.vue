<template>
    <!--头部导航 -->
    <div class="top clearfix">
        <ul>
            <li class="title" v-model="navleft">
            <router-link :to="`/index/${ch?'ch':'en'}`">{{ch?"天空资讯":"SKYNEWS"}}</router-link>
            </li>
        </ul>
        <ul class="nav clearfix" v-if="shownavs">
            <li>
                <router-link :to="`/index/${ch?'ch':'en'}`">{{ch?"首页":"Home"}}</router-link>
            </li>
            <li>
                <router-link to="/category/news">{{ch?"天空新闻":"Sky&nbsp;News"}}</router-link>
            </li>
            <li>
                <router-link to="/conferenceshanghai">{{ch?"会议":"Conference"}}</router-link>
            </li>
            <li>
                <router-link to="/category/articles">{{ch?"天空Exchange":`Sky&nbsp;Exchange`}}</router-link>
            </li>
            <li>
                <router-link to="/aboutus">{{ch?"联系我们":"Contact Us"}}</router-link>
            </li>
            <li v-if="screenWidth>768" @mouseenter="enter()" @mouseleave="leave()">{{ch?"选择语言":"Language"}}
                <ul v-if="flag==true" class="language">
                    <li @click.stop="chinese()">简体中文</li>
                    <li @click.stop="english()">English</li>
                </ul>
            </li>
            <li v-if="screenWidth<768">{{ch?"选择语言":"Language"}}
                <span class="add" @click="showChoice">{{xflag?"+":"-"}}</span>
                <ul v-if="flag==true" class="language">
                    <li @click.stop="chinese();">简体中文</li>
                    <li @click.stop="english()">English</li>
                </ul>
            </li>
        </ul>
        <div class="menu" v-if="show" @click="shownav">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="menu" v-if="!show" @click="hidenav">
            <p>X</p>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isCollapse: true,
                shownavs: true,
                navleft: "天空资讯",
                navright: ["", "", "", "", "", ""],
                flag: false,
                show: true,
                xflag: true,
                language:"",
            }
        },
        props:{
            lang:{
                type:String
            }
        },
        mounted() {
            this.nav()
        },
        computed: {
            ch() {
                 return  this.$props.lang==='ch';
                // return this.$store.state.ch;
            },
            screenWidth(){
                return window.screen.width
            }
        },
        created(){
            this.$props.lang=="ch" ?
                this.chinese()
                :this.english();
                this.language=this.$props.lang;
    
        },
        methods: {
            chinese() {
                var index=this.$route.fullPath.lastIndexOf("/");
                var path=this.$route.fullPath.substring(0,index);
                if(path=='/index'){
                this.$router.push({path:path+"/ch"});}
                if(path=='/category/news'){
                    this.$router.push({path:path})
                }
                this.$store.commit("toCh")
                this.hidenav();
            },
            english() {
                var index=this.$route.fullPath.lastIndexOf("/");
                var path=this.$route.fullPath.substring(0,index);
                if(path=='/index'){
                this.$router.push({path:path+"/en"});}
                 if(path=='/category/news'){
                    this.$router.push({path:path})
                }
                this.$store.commit("toEn");
                 this.hidenav();
            },
            enter() {
                this.flag = true;
            },
            leave() {
                this.flag = false;
            },
            handleOpen(key, keyPath) {
            },
            handleClose(key, keyPath) {
            },
            nav() {
                const that = this;
                if (that.screenWidth < 768) {
                    that.shownavs = false;
                } else {
                    that.shownavs = true;
                }
            },
            shownav() {
                const that = this;
                if (that.screenWidth <= 768) {
                    that.shownavs = !that.shownavs;
                    that.show = !that.show;
                } else {
                    that.shownavs = true;
                    that.show = false;
                }
            },
            hidenav() {
                const that = this;
                if (that.screenWidth <= 768) {
                    that.shownavs = false;
                    that.show = true;
                } else {
                    that.shownavs = true;
                    that.show = false;
                }
            },
            showChoice() {
                this.flag = !this.flag;
                this.xflag = !this.xflag;
            }
        },
        watch: {
            // 如果路由有变化，会再次执行该方法
            "$route": "hidenav"
        },
    }
</script>
<style lang="scss" scoped>
    .clearfix::after,
    .clearfix::before {
        content: "";
        display: block;
        visibility: hidden;
        height: 0;
        line-height: 0;
        clear: both;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    a {
        color: #000;
        text-decoration: none;
    }
    a:hover {
        color: #000;
    }
    li>a {
        display: block;
        width: 100%;
        height: 100%;
        padding: 0rem 1rem;
    }
    .top {
        position: relative;
       
        background-color: #fff;
        border-bottom: 1px solid #eee;
        display: flex;
        width: 100%;
        height: 100px;
        background-color: #fff;
        .title {
            font-weight: 700;
            font-size: 1.5rem;
            padding-left: 2rem;
        }
        ul {
            margin: 0;
            padding: 0;
        }
        ul li {
            list-style: none;
        }
        ul:nth-child(1),
        .nav {
            width: 48%;
            display: flex;
            justify-content: space-between;
            li {
                line-height: 100px;
            }
        }
        .nav {
            width: 50%;
            float: right;
            li:hover {
                background-color: #eee;
            }
        }
        .nav>li:last-child {
            cursor: pointer;
        }
        .language {
            background-color: #fff;
            position: absolute;
            top: 90px;
            right: 0rem;
            z-index: 50000;
            margin-top: -0.7rem;
            width: 12rem !important;
            display: flex;
            flex-direction: column;
            li {
                line-height: 3rem !important;
                padding: 0rem 1rem;
                cursor: pointer;
            }
        }
    }
    .language>li:nth-child(1) {
        background: url("../../../static/images/0300-1.png") no-repeat 1rem center;
        background-size: 1.2rem 1.2rem;
        padding-left: 3rem !important;
    }
    .language>li:nth-child(2) {
        background: url("../../../static/images/0400-1.png") no-repeat 1rem center;
        background-size: 1rem 1rem;
        padding-left: 3rem !important;
    }
    .menu {
        display: none;
        position: absolute;
        top: 0;
        right: 1rem;
        width: 3.5rem;
        height: 4rem;
        margin: 0;
        padding: 0;
        div {
            width: 100%;
            height: 0.5rem;
            background-color: #252525;
            margin-bottom: 0.5rem;
            opcity: 0.5;
        }
        p {
            width: 100%;
            height: 100%;
            font-size: 3rem;
            margin: 0;
            text-align: center;
        }
    }
    .add {
        display: inline-block;
        height: 100%;
        width: 4rem;
        background-color: #eee;
        text-align: center;
        font-size: 3rem;
        color: #fff;
        float: right;
        margin-right: 3rem;
        text-indent:0;
    }
    @media screen and (max-width:768px) {
        .top {
            height: 5rem;
            .nav {
                position: absolute;
                left: 0;
                top: 4rem;
                width: 100%;
                z-index: 50000;
                background-color: #fff;
                display: block;
                justify-content: flex-start;
                flex-wrap: wrap;
                li {
                    line-height: 5rem;
                    font-size: 1.2rem;
                    border-top: 1px solid #eee;
                    a {
                        padding: 0 2rem;
                    }
                }
                li:last-child {
                   text-indent:2rem;
                    border-bottom: 1px solid #eee;
                }
            }
            .title {
                padding-left: 0.5rem;
            }
            ul:nth-child(1) li {
                line-height: 4rem;
            }
            .menu {
                display: block;
            }
            .nav>li:last-child {
                position: relative;
            }
            .language {
                width: 100% !important;
                position: absolute;
                margin-top: 0;
                top: 5rem;
                li {
                    padding-top: 0.9rem;
                    padding-bottom: 0.9rem;
                }
                li:nth-child(1),li:nth-child(2){
                    padding-left:0 !important;
                }
            }
        }
    }
</style>