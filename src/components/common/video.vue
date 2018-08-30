<template>
    <!-- 会议报名表单-->
    <div class="my-all" v-if="isOver">
        <div class="my-video">
            <!--   <video :src="video_url" autoplay></video> -->
            <video v-for="item in url" :src="item.url" controls="controls"></video>
        </div>
        </div>
</template>
<script>
    export default {
        data() {
            return {
            }
        },
    computed: {
            ch() {
                return this.$store.state.ch;
            }
        },
        methods: {
        },
    
    props: ["url","isOver"]
    }
</script>
<style lang="scss">
    .my-all {
        width: 60%;
        height: 30%;
        margin:0 auto;
    }
    .my-video {
        width: 100%;
        video {
            width: 100%;
            height: 100%;
            object-fit: fill;
            margin-top:5%;
        }
        video:last-child{
            margin-bottom:5%;
        }
    }
</style>