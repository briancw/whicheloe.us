<template>
    <div class="home_page">
        <div class="card">
            <h1>Brian Whicheloe</h1>
            <h2>Development Director</h2>
            <h2>Brian@<a href="http://clever.ly">clever.ly</a></h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
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
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        padding: 20px;
        width: 320px;
        height: 180px;
        line-height: 24px;

        h1, h2, a {
            color: #111;
            font-weight: 400;
            text-decoration: none;
        }
    }
}
</style>
