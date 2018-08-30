<template>
<!--会议项目介绍 -->
    <div class="my-pro">
        <p>{{ch?"项目":"PROJECTS"}}</p>
        <ul v-if="ch">
            <li v-for="(item,i) in metProjMsg" :key="i">
                <div class="p-img">
                    <img :src="item.image_url">
                </div>
                <div class="p-text">
                    <p>{{item.name}}</p>
                    <p>{{item.introduce}}</p>
                </div>
            </li>
        </ul>
        <ul v-else>
          <li v-for="(item,i) in metProjMsg" :key="i">
                <div class="p-img">
                    <img :src="item.image_url">
                </div>
                <div class="p-text">
                    <p>{{item.name_en}}</p>
                    <p style="text-align:center">{{item.introduce_en}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
         computed:{
            ch(){
                return this.$store.state.ch;
            }
        },
        methods: {},
        props: ["metProjMsg"]
    }
</script>
<style lang="scss">
.my-pro {
  
    width:95%;
    max-width:1300px;
    margin:0 auto;
}
    .my-pro>p {
        font-size: 2rem;
        color: #13B1CD;
        text-align: center;
    }
    .my-pro ul {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        width:100%;
    }
    .my-pro li {
        position: relative;
        width: 30%;
        border: 2px solid #13B1CD;
        list-style: none;
        margin: 0 1.1rem;
        padding: 0;
        margin-bottom: 3rem;
    }
    .my-pro li .p-img {
        transform: rotateY(0);
        transition: all 0.30s ease-in-out 0s;
    }
    .my-pro li .p-img img {
        display: block;
        width: 100%;
        height: 100%;
    }
    .my-pro li:hover .p-img {
        transform: rotateY(90deg);
    }
    .p-text {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #13B1CD;
        height: 100%;
        overflow: auto;
        overflow-x: hidden;
        transform: rotateY(-90deg);
        transition: all 0.30s ease-in-out 0s;
    }
    .p-text::-webkit-scrollbar {
        /*滚动条整体样式*/
        width: 4px;
        /*高宽分别对应横竖滚动条的尺寸*/
        height: 4px;
    }
    .p-text::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        background: rgba(0, 0, 0, 0.2);
    }
    .p-text::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        border-radius: 0;
        background: rgba(0, 0, 0, 0.1);
    }
    .my-pro li:hover .p-text {
        transform: rotateY(0);
    }
    .p-text p {
        color: #fff;
        font-size: 0.9rem !important;
        line-height: 1.5rem !important;
        text-align: left;
        text-indent: 1rem;
        padding: 0 1rem;
    }
    .p-text p {
        margin: 0 0 1rem 0!important;
    }
    .p-text p:nth-child(1) {
        text-align: center;
        font-weight: 700 !important;
        margin-top: 1rem !important;
    }
    @media screen and (max-width:768px) {
        .my-pro > p{
            font-size: 1.7rem;
        }
        .my-pro ul {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
        }
        .my-pro li {
            width: 100%;
        }
    }
</style>