<template>
    <div class="home_page">
        <div class="w_background"></div>
        <section class="card" @click="updateIcon">
            <h1>Brian Whicheloe</h1>
            <h2>Full Stack Developer</h2>
            <h2>Brian@whicheloe.us</h2>

            <a class="github_link" href="https://github.com/briancw" target="_blank"></a>
            <!-- <a class="twitter_link" href="https://twitter.com/brianwhicheloe" target="_blank"></a> -->
        </section>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            isVariant: false,
        }
    },
    meta() {
        return {
            description: 'Brian Whicheloe is a full stack, full time developer. He was most recently the Director of Development at Clever.ly. He\'s currently specializing in full stack Javascript',
        }
    },
    methods: {
        updateIcon() {
            let favicon = document.getElementById('favicon')
            let themeColor = document.getElementById('theme_color')

            if (this.isVariant) {
                favicon.href = 'icons/favicon_b.ico'
                themeColor.content = '#4e4e4e'
            } else {
                favicon.href = 'icons/favicon_w.ico'
                themeColor.content = '#347ca7'
            }

            this.isVariant = !this.isVariant
        },
    },
}
</script>

<style lang="less">
@import '../styles/mixins.less';
.home_page {
    background: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    .card {
        .roboto();
        position: relative;
        background: #fff;
        border-radius: 2px;
        font-size: 18px;
        padding: 20px;
        width: 320px;
        height: 180px;
        line-height: 24px;
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        animation: offtable 20s infinite;
        animation-direction: alternate;
        z-index: 20;

        h1, h2, a {
            color: #111;
            font-weight: 400;
            text-decoration: none;
        }

        .github_link {
            display: inline-block;
            position: absolute;
            background-image: url('../img/github_64.png');
            background-size: 32px 32px;
            width: 32px;
            height: 32px;
            bottom: 8px;
            right: 12px;
        }
    }
}

@keyframes offtable {
  20% { box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); }
  100% { box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); }
}
</style>
