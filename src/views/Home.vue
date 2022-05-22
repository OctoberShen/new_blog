<template>
    <div class="home">
        <div :class="firstMove?'main move': 'main'">
            <div class="display" @click="goArticle">
                <h2 class="article-title">思路的开关</h2>
                <img class="article-pic" src="http://cdn.octobershen.top/%E5%BD%A9%E8%99%B9%E9%97%A8.jpg" alt="文章配图">
                <div class="article-foot">
                    <span class="author">scb</span>
                    <span class="date">2022-03-12</span>
                </div>
            </div>

            <div class="display">
                <h2 class="article-title">思路的开关</h2>
                <img class="article-pic" src="http://cdn.octobershen.top/%E5%BD%A9%E8%99%B9%E9%97%A8.jpg" alt="文章配图">
                <div class="article-foot">
                    <span class="author">scb</span>
                    <span class="date">2022-03-12</span>
                </div>
            </div>

            <div class="display">
                <h2 class="article-title">思路的开关</h2>
                <img class="article-pic" src="http://cdn.octobershen.top/%E5%BD%A9%E8%99%B9%E9%97%A8.jpg" alt="文章配图">
                <div class="article-foot">
                    <span class="author">scb</span>
                    <span class="date">2022-03-12</span>
                </div>
            </div>

            <div class="display">
                <h2 class="article-title">思路的开关</h2>
                <img class="article-pic" src="http://cdn.octobershen.top/%E5%BD%A9%E8%99%B9%E9%97%A8.jpg" alt="文章配图">
                <div class="article-foot">
                    <span class="author">scb</span>
                    <span class="date">2022-03-12</span>
                </div>
            </div>
            <div class="display">
                <h2 class="article-title">思路的开关</h2>
                <img class="article-pic" src="http://cdn.octobershen.top/%E5%BD%A9%E8%99%B9%E9%97%A8.jpg" alt="文章配图">
                <div class="article-foot">
                    <span class="author">scb</span>
                    <span class="date">2022-03-12</span>
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
    name: 'Home',
    components: {},
    setup() {
        const firstMove = ref(false)
        const router = useRouter()

        onMounted(() => {
            setTimeout(() => {
                firstMove.value = true
            }, 500)
        })
        const goArticle = () => {
            router.push('/article')
        }

        return {
            firstMove,
            goArticle
        }
    }
})
</script>

<style lang="scss">
.home {
    display: flex;
    flex-grow: 1;
    flex-basis: auto;
    flex-direction: column;
    margin-top: 0;
    .main {
        display: flex;
        max-width: 100%;
        padding:0 10% 40px;
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;
        background-color: #f1f5fb;
        .display {
            display: flex;
            flex-grow: 1;
            flex-shrink: 1;
            flex-basis: 360px;
            position: relative;
            /* min-height: 420px; */
            margin: 20px;
            background-color: #FFF;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 20px 40px 0 rgba(50, 50, 50, 0.08);
            flex-direction: column;
            top: 0;
            transition: top .5s ease-in-out;
            -moz-transition: top .5s;
            -webkit-transition: top .5s;
            -o-transition: top .5s;
            cursor: pointer;
            .article-title {
                padding: 20px 24px 20px 24px;
                display: flex;
                flex-grow: 1;
                font-size: 20px;
                font-weight: 500;
                line-height: 36px;
                color: #000000;
            }
            .article-pic {
                width: 100%;
                height: 200px;
                margin-bottom: 10px;
                background: linear-gradient(to top, #f1f5fb, #f9fcff);
                object-fit: cover;
            }
            .article-foot{
                display: flex;
                flex-direction: column;
                padding: 0 10px 10px 10px;
                box-sizing: border-box;
                .author {
                    display: flex;
                    z-index: 3;
                    align-content: flex-start;
                    align-items: center;
                    padding: 2px 8px;
                    font-size: 14px;
                    line-height: 20px;
                    color: #898FA0;
                    background: transparent;
                    border-radius: 12px;
                    text-decoration: none;
                    outline: 0;
                }
                .date {
                    margin: 8px 0 0 8px;
                    font-size: 12px;
                    line-height: 18px;
                    color: #12183A;
                    text-align: left;
                }
            }
        }
        .display:hover {
            top: -20px;
            transition: top .5s ease-in-out;
            -moz-transition: top .5s;
            -webkit-transition: top .5s;
            -o-transition: top .5s;
        }
    }
    .move {
        margin-top: -84px;
        transition: margin-top .8s ease-in-out;
    }
}
</style>
