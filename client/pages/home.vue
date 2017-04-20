<template>
    <div class="home_page">
        <div class="w_background"></div>
        <section class="card" @click="updateIcon">
            <h1>Brian Whicheloe</h1>
            <h2>Full Stack Developer</h2>
            <h2>Brian@whicheloe.us</h2>

            <a class="twitter_link" href="https://twitter.com/brianwhicheloe" target="_blank"></a>
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

<style lang="scss">
@import '../styles/mixins.scss';
.home_page {
    background: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    .card {
        @include roboto;
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

        .twitter_link {
            display: inline-block;
            position: absolute;
            background-image: url('../img/twitter_logo.svg');
            width: 32px;
            height: 32px;
            bottom: 8px;
            right: 12px;
        }
    }
}

@keyframes offtable {
  20%   { @include shadow1; }
  100% { @include shadow3; }
}
</style>
