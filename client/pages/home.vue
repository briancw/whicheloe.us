<template>
    <div class="home_page">
        <div class="w_background"></div>
        <div class="card" @click="updateIcon">
            <h1>Brian Whicheloe</h1>
            <h2>Development Director</h2>
            <h2>Brian@<a href="http://clever.ly">clever.ly</a></h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            iconB: 0,
        }
    },
    methods: {
        updateIcon() {
            let favicon = document.getElementById('favicon')
            if (favicon.href.includes('favicon.ico') || favicon.href.includes('favicon_w.ico')) {
                favicon.href = 'favicon_b.ico'
            } else {
                favicon.href = 'favicon_w.ico'
            }
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
    }
}

@keyframes offtable {
  20%   { @include shadow1; }
  100% { @include shadow3; }
}
</style>
