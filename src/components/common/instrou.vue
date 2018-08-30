<template>
    <div class="instrou">
        <h4></h4>
        <div></div>
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
            }
        },
        methods: {},
        props: ["insMsg"]
    }
</script>
<style lang="scss">
    .instrou {
        h4 {
            text-align: center;
        }
        p{
            text-indent:2rem;
        }
    }
</style>