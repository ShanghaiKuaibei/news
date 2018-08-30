<template>
    <!-- 新闻详情页-->
    <div v-if="ch">
        <banner :bannerMsg="metBaMsg"></banner>
        <div class="new-list">
            <h2>{{newList.title}}</h2>
            <span>{{newList.time | dataFormat}}</span>
            <span class="author">{{newList.author?"作者："+newList.author:""}}</span>
            <span class="write" @click="writeComment">写评论</span>
            <hr>
            <p v-html="newListText"></p>
            <div class="golr">
                <span @click="golast">&larr;上一章 {{ LastNewList.title}}</span>
                <span @click="gonext">{{ NextNewList.title}} 下一章&rarr;</span>
            </div>
        </div>
        <comment></comment>
    </div>
    <div v-else>
        <banner :bannerMsg="metBaMsg"></banner>
        <div class="new-list">
            <h2>{{newListEn.title}}</h2>
            <span>{{newListEn.time | dataFormats}}</span>
            <span class="author">{{newListEn.author?"Author："+newListEn.author:""}}</span>
            <span class="write" @click="writeComment"> Leave a comment</span>
            <hr>
            <p v-html="newListTextEn"></p>
            <meat v-if="newListEn.sub" :url="apiUrl"></meat>
            <div class="golr">
                <span @click="golast">&larr;LAST {{ LastNewListEn.title}}</span>
                <span @click="gonext">{{ NextNewListEn.title}} NEXT&rarr;</span>
            </div>
        </div>
        <comment></comment>
    </div>
</template>
<script>
    import Banner from "../common/banner.vue"
    import Comment from "../common/comment.vue"
    import Meat from "../common/meat.vue"
    export default {
        data() {
            return {
                id: this.$route.params.id,
                lengths: 0,
                lengthsen: 0,
                metBaMsg: {
                    "img_url": ["../../../static/images/bannerindex.jpg"],
                    "ctitle": "文章",
                    "etitle": "Posts",
                    "btitle": ""
                },
                newList: {},
                LastNewList: {},
                NextNewList: {},
                newListtext: '',
                imgText: '',
                newListEn: {},
                LastNewListEn: {},
                NextNewListEn: {},
                newListtextEn: '',
                imgTextEn: '',
                apiUrl:''
            }
        },
        created() {
            this.getNew();
        },
        computed: {
            newListText() {
                const that = this
                return that.newListtext.replace(/\r\n/g, "<br />").replace(/<img>/g, `<img style="float:left;margin-right:10px;"src="${that.imgText}" /><p>`).replace(/\n\n/g, "<br />")
            },
            newListTextEn() {
                const that = this
                return that.newListtextEn.replace(/\r\n/g, "<br />").replace(/<img>/g, `<img style="float:left;margin-right:10px;"src="${that.imgText}" /><p>`).replace(/\n/g, "<br />")
            },
            ch() {
                return this.$store.state.ch;
            },
        },
        watch: {
            "$route": "getNew",
            "$store": "getNew"
        },
        methods: {
            writeComment() {
                window.location.hash = "#comment";
            },
            golast() {
                let that = this;
                if (that.id > 0) {
                    let ids = parseInt(--that.id)
                    that.$router.push({
                        path: '/category/news/' + ids
                    })
                    window.scrollTo(0, 250)
                }
            },
            gonext() {
                let that = this;
                if (that.id < that.lengths) {
                    let ids = parseInt(++that.id);
                    that.$router.push({
                        path: '/category/news/' + ids
                    })
                     window.scrollTo(0, 250)
                }
            },
            getNew() {
                let that = this;
                this.$http.post(api+"/news/post", {
                    id: that.id
                }).then(function(res) {
                    that.newList = res.data[0]
                    that.newListtext = res.data[0].text;
                    that.imgText = res.data[0].image;
                    // that.newListText=res.data[0].text.replace("\r\n","<br/>");
                }).catch(function(error) {})
                this.$http.post(api+"/newsen/post", {
                    id: that.id
                }).then(function(res) {
                    that.newListEn = res.data[0]
                    that.newListtextEn = res.data[0].text;
                    that.imgTextEn = res.data[0].image;
                    that.apiUrl=res.data[0].sub;
                    // that.newListText=res.data[0].text.replace("\r\n","<br/>");
                }).catch(function(error) {})
                this.$http.get(api+"/news/main").then(function(res) {
                    that.lengths = res.data.length;
                    const ids1 = that.id - (-1);
                    const ids2 = that.id - 1;
                    that.LastNewList = res.data.find(v => {
                        return v.id == ids2
                    })
                    that.NextNewList = res.data.find(v => {
                        return v.id == ids1
                    })
                    if (ids2 < 0) {
                        that.LastNewList = {
                            "title": ""
                        }
                        that.$route.params.id = 0
                    }
                    if (ids1 > that.lengths - 1) {
                        that.NextNewList = {
                            "title": ""
                        }
                        that.$route.params.id = that.lengths - 1
                    }
                }).catch(function(error) {})
                this.$http.get(api+"/newsen/main").then(function(res) {
                    that.lengthsen = res.data.length;
                    const ids1 = that.id - (-1);
                    const ids2 = that.id - 1;
                    that.LastNewListEn = res.data.find(v => {
                        return v.id == ids2
                    })
                    that.NextNewListEn = res.data.find(v => {
                        return v.id == ids1
                    })
                    if (ids2 < 0) {
                        that.LastNewListEn = {
                            "title": ""
                        }
                    }
                    if (ids1 > that.lengthsen - 1) {
                        that.NextNewListEn = {
                            "title": ""
                        }
                    }
                }).catch(function(error) {})
            },
        },
        components: {
            "banner": Banner,
            "comment": Comment,
            "meat": Meat
        }
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
    li {
        list-style: none;
    }
    h2 {
        font-size: 2rem;
        font-weight: 600;
    }
    .new-list {
        width: 76%;
        max-width:1000px;
        margin: 5rem auto;
    }
    p {
        line-height: 2rem;
        display: inline;
    }
    span {
        display: inline-block;
        margin-bottom: 0.5rem;
    }
    hr {
        display: block;
        margin-bottom: 2rem;
    }
    .write {
        color: #13B1CD;
        display: inline-block;
        margin: 0;
        cursor: pointer;
    }
    .author {
        color: #13B1CD;
        display: inline-block;
        margin: 0 2rem;
    }
    .golr {
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
        span {
            color: #13B1CD;
            display: inline-block;
            cursor: pointer;
            width: 18rem;
        }
    }
    @media screen and (max-width:768px) {
        .new-list {
            width: 90%;
            margin: 2rem auto;
        }
        .comment {
            width: 90%;
        }
        h2 {
        font-size: 1.5rem;
    }
        
    }
</style>