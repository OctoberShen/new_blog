<template>
    <div class="hader-bg">
        <div class="bg-content" v-show="showType===0">
            <span>
                <img class="bg-logo" src="../../assets/images/os.png" alt="logo">
            </span>
            <h2 v-show="contentType === 0">coding is not all but a very important part of life</h2>
            <h1 v-show="contentType === 1">9 ARTICLES IN 2 YEAR</h1>
        </div>
        <div class="bg-about" v-show="showType===4">
             <span>
                <img class="bg-logo" src="../../assets/images/os.png" alt="logo">
            </span>
            <div class="about-content"><span class="name">octobershen</span><span class="indroduce">coding is  not all but a very important part of life</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

export default defineComponent({
    name: 'Home',
    setup () {
        const showType = ref(0)
        const route = useRoute()
        const contentType = ref(0)

        onBeforeRouteUpdate(to => {
            console.log(to)
        })

        watch(
            () => route.fullPath,
            (n) => {
                switch (n) {
                    case '/':
                        showType.value = 0
                        contentType.value = 0
                        break
                    case '/archive':
                        showType.value = 0
                        contentType.value = 1
                        break
                    case '/about':
                        showType.value = 4
                        contentType.value = 4
                        break
                    default:
                        showType.value = 1
                        break
                }
            }
        )
        return {
            showType,
            contentType
        }
    }
})
</script>

<style lang="scss" scoped>
.hader-bg {
    width: 100%;
    height: 466px;
    display: flex;
    flex-shrink: 0;
    background: linear-gradient(to top, #f1f5fb, #f9fcff);
    .bg-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        span {
            display: flex;
            height: 152px;
            font-size: 36px;
            line-height: 48px;
            color: #12183A;
            align-items: center;
            .bg-logo {
                width: 56px;
                height: 56px;
            }
        }
        h2 {
            display: flex;
            margin-top: 4px;
            font-size: 16px;
            font-weight: normal;
            line-height: 22px;
            letter-spacing: 2px;
            text-transform: uppercase;
            text-align: center;
            color: #12183A;
        }
        h1 {
            font-size: 27px;
            font-weight: normal;
            color: #12183a;
        }
    }
    .bg-about {
        display: flex;
        flex-basis: 721px;
        padding: 196px 40px 160px;
        margin: 0 auto;
        .bg-logo {
            display: flex;
            flex: 0;
            width: 88px;
            height: 88px;
            border-radius: 50%;
            margin-top: 30px;
            margin-right: 30px;
        }
        .about-content {
            display: flex;
            margin-top: 40px;
            flex: 1;
            flex-direction: column;
            .name {
                font-size: 30px;
                font-weight: 500;
                color: #12183a;
                text-align: left;
            }
            .indroduce {
                display: flex;
                font-size: 15px;
                margin-top: 10px;
                color: #898F9F;
            }
        }
    }
}
</style>
