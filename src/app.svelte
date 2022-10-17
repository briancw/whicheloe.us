<script>
    import './styles/global.less'
</script>

<main class="home_page">
    <div class="w_background"></div>
    <section class="card">
        <h1>Brian Whicheloe</h1>
        <h2>Full Stack Developer</h2>
        <h2>Brian@whicheloe.us</h2>

        <a class="github_link" href="https://github.com/briancw" target="_blank" rel="noreferrer">
            <span class="github_link_content">Github</span>
        </a>
    </section>
</main>
  
<style lang="less">
    .home_page {
        background: #f1f1f1;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    
        .card {
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
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
                background-image: url('img/github_64.png');
                background-size: 32px 32px;
                width: 32px;
                height: 32px;
                bottom: 8px;
                right: 12px;
            }

            .github_link_content {
                display: none;
            }
        }
    }
    
    @keyframes offtable {
        20% { box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); }
        100% { box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); }
    }
    </style>
  