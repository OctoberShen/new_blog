<template>
    <div class="about-container">
        <div :class="firstMove?'about-main about-move': 'about-main'">
            <div class="about-content">
                <h3>我是谁：</h3>
                <p>从前端入门，干了3年多前端程序员，后自学golang，并成功转后端，目前是一名golang开发。</p>
            </div>
            <div class="about-content">
                <h3>本站前端技术栈：</h3>
                <p>框架：Vue3.0</p>
                <p>语言：Typescript</p>
            </div>
            <div class="about-content">
                <h3>本站后端技术栈：</h3>
                <p>框架：gin</p>
                <p>语言：goland</p>
                <p>存储：gorm、redis</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
    name: 'about',
    setup () {
        const firstMove = ref(false)

        onMounted(() => {
            setTimeout(() => {
                firstMove.value = true
            }, 500)
        })
        return {
            firstMove
        }
    }
})
</script>

<style lang="scss" scoped>
.about-container {
    width: 100%;
    display: flex;
    justify-content: center;
    .about-main {
        display: flex;
        width: 80%;
        padding: 20px 10% 40px;
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;
        background-color: #FFFFFF;
        box-sizing: border-box;
        .about-content {
            display: flex;
            width: 100%;
            padding: 10px;
            font-size: 18px;
            flex-direction: column;
            background: #FFFFFF;
            border-radius: 10px;
            h3 {
                font-size: 20px;
                margin: 15px 0 10px;
                padding-left: 10px;
                border-left: 3px solid #059dc0;
                text-align: left;
            }
            p {
                margin-top: 6px;
                line-height: 1.5em;
                font-size: .95em;
                letter-spacing: .7px;
                text-align: left;
            }
        }
    }
    .about-move {
        margin-top: -84px;
        transition: margin-top .8s ease-in-out;
    }
}

</style>
