<template>
    <!--新闻列表页 -->
    <div class="all-news" v-if="ch">
        <banner :bannerMsg="metBaMsg"></banner>
        <ul class="news-list">
            <li v-for="(item,i) in  data" :key="i" v-if="item.important">
                <h2 @click="goRead(item.id)">{{item.title}}</h2>
                <span>{{item.time | dataFormat}}</span>
                <span v-html="item.text.replace(/<img[^<>]+>/g,'').replace(/<div[^<>]+>/g,'').replace(/<p[^<>]+>/g,'')"></span><span>...</span>
                <a class="go-read" @click="goRead(item.id)">继续阅读</a>
                 <hr>
            </li>
             <li v-for="(item,i) in  data" :key="i" v-if="!item.important">
                <h2 @click="goRead(item.id)">{{item.title}}</h2>
                <span>{{item.time | dataFormat}}</span>
                <span  v-html="item.text.replace(/<img[^<>]+>/g,'').replace(/<div[^<>]+>/g,'').replace(/<p[^<>]+>/g,'')"></span><span>...</span>
                <a class="go-read" @click="goRead(item.id)">继续阅读</a>
                <hr>
            </li>
        </ul>
        <div class="pagination">
            <el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize" :current-page="currentPage" @size-change="handleSizeChange" @current-change="handleCurrentChange">
            </el-pagination>
        </div>
    </div>
     <div class="all-news" v-else>
        <banner :bannerMsg="metBaMsg"></banner>
        <ul class="news-list">
            <li v-for="(item,i) in  dataEn" :key="i" v-if="item.important">
                <h2 @click="goRead(item.id)">{{item.title}}</h2>
                <span>{{item.time | dataFormats}}</span>
                <span  v-html="item.text.replace(/<img[^<>]+>/g,'').replace(/<div[^<>]+>/g,'').replace(/<p[^<>]+>/g,'')"></span><span>...</span>
                <a class="go-read" @click="goRead(item.id)">Read More</a>
                 <hr>
            </li>
             <li v-for="(item,i) in  dataEn" :key="i" v-if="!item.important">
                <h2 @click="goRead(item.id)">{{item.title}}</h2>
                <span>{{item.time | dataFormats}}</span>
                <span v-html="item.text.replace(/<img[^<>]+>/g,'').replace(/<div[^<>]+>/g,'').replace(/<p[^<>]+>/g,'')"></span><span>...</span>
                <a class="go-read" @click="goRead(item.id)">Read More</a>
                <hr>
            </li>
        </ul>
        <div class="pagination">
            <el-pagination background layout="prev, pager, next" :total="totalEn" :page-size="pageSizeEn" :current-page="currentPageEn" @size-change="handleSizeChangeEn" @current-change="handleCurrentChangeEn">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    import Banner from "../common/banner.vue"
    export default {
        data() {
            return {
                currentPage: 1,
                pageSize: 10,
                currentPageEn: 1,
                pageSizeEn: 10,
                metBaMsg: {
                    "img_url": ["../../../static/images/bannerindex.jpg"],
                    "ctitle": "分类：SKY新闻",
                    "etitle": "Category: Sky News"
                },
                newList: [],
                newListEn:[],
            }
        },
        created() {
            this.getNews();
            this.getNewsEn();
        },
        methods: {
            goRead(id) {
                this.$router.push({
                    path: '/category/news/' + id
                })
            },
            handleSizeChange(val) {
                this.pageSize = val;
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                 window.scrollTo(0, 290)
            },
             handleSizeChangeEn(val) {
                this.pageSizeEn = val;
            },
            handleCurrentChangeEn(val) {
                this.currentPageEn = val;
                  window.scrollTo(0, 270)
            },
            getNews() {
                let that = this;
                this.$http.get(api+"/news/main").then(function(res) {
                    that.newList=res.data;
                }).catch(function(error) {})
            },
            getNewsEn() {
                let that = this;
                this.$http.get(api+"/newsen/main").then(function(res) {
                    that.newListEn=res.data;
                }).catch(function(error) {})
            },
        },
        mounted() {},
        computed: {
            data() {
                return this.newList.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
            },
              dataEn() {
                return this.newListEn.slice((this.currentPageEn - 1) * this.pageSizeEn, this.currentPageEn * this.pageSizeEn)
            },
            total() {
                return this.newList.length
            },
            totalEn() {
                return this.newListEn.length
            },
             ch() {
                return this.$store.state.ch;
            },
        },
        components: {
            "banner": Banner,
        }
    }
</script>
<style lang="scss">
    .all-news {
        
        .pagination {
            margin-bottom: 3rem !important;
        }
        li {
            list-style: none;
            margin-bottom: 5rem;
        }
        span {
            display: inline-block;
            height:1.15rem;
            width: 100%;
            overflow: hidden;
            margin-top: 1rem;
            font-size:16px;
        }
        h2 {
            font-size: 1.8rem;
            font-weight: 500;
            cursor: pointer;
        }
        h2:hover {
            color: #13B1CD;
        }
        .go-read {
            display: block;
            color: #13B1CD;
            cursor: pointer;
            margin-top: 1rem;
        }
        .news-list {
            width: 60%;
            max-width:1000px;
            margin: 5rem auto;
        }
        .el-pagination {
            white-space: nowrap;
            padding: 2px 5px;
            color: #13B1CD !important;
            font-weight: 700;
            text-align: center !important;
        }
        .el-pagination.is-background .el-pager li:not(.disabled).active {
            background-color: #13B1CD !important;
            color: #fff !important;
        }
    }
    .write {
        color: #13B1CD;
        display: inline-block;
        margin: 0 3rem;
        cursor: pointer;
    }
    @media screen and (max-width: 768px) {
        body,
        html {
            font-size: 16px;
        }
        .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
            margin:0 2px !important;
        }
        .all-news {
            h2 {
                font-size: 1.5rem;
            }
            span {
                margin-top: 0;
                width: 100%;
            }
            .news-list {
                width: 90%;
                margin: 0;
                padding: 1rem;
                li {
                    span:nth-child(2) {
                        width: 4rem;
                    }
                }
            }
        }
    }
</style>