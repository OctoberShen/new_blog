<template>
    <div :class="[small?'header-container move1': 'header-container move2']">
        <div class="header-left">
            <img class="logo" src="../../assets/images/os.png" alt="logo">
            <div class="logo-text" @mouseover="showBottomLine" @mouseleave="hideBottomLine" @click="goHome">
                <span class="text">OctoberShen</span>
                <span class="bottom-line" v-show="bottomLineShow"></span>
            </div>
        </div>
        <div class="header-right">
            <ul>
                <li :class="isSelect===1 ? 'select':''" @click="changeSelect(1)"><span class="href">Home</span><span
                    class="dot"></span></li>
                <li :class="isSelect===2 ? 'select':''" @click="changeSelect(2)"><span class="href">archive</span><span
                    class="dot"></span></li>
                <li :class="isSelect===3 ? 'select':''" @click="changeSelect(3)"><span
                    class="href">Categorie</span><span class="dot"></span></li>
                <li :class="isSelect===4 ? 'select':''" @click="changeSelect(4)"><span class="href">Tags</span><span
                    class="dot"></span></li>
                <li :class="isSelect===5 ? 'select':''" @click="changeSelect(5)"><span class="href">About</span><span
                    class="dot"></span></li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, onMounted, onBeforeUnmount, defineComponent, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
    name: 'header',
    setup () {
        const bottomLineShow = ref(false)
        const isSelect = ref(1)
        const small = ref(false)
        const router = useRouter()
        const route = useRoute()

        function showBottomLine () {
            bottomLineShow.value = true
        }

        function hideBottomLine () {
            bottomLineShow.value = false
        }

        function changeSelect (val: number) {
            isSelect.value = val
            switch (val) {
                case 1:
                    router.replace({
                        path: '/'
                    })
                    break
                case 2:
                    router.replace({
                        path: '/archive'
                    })
                    break
                case 3:
                    router.replace({
                        path: '/'
                    })
                    break
                case 4:
                    router.replace({
                        path: '/'
                    })
                    break
                case 5:
                    router.replace({
                        name: 'about'
                    })
                    break
                default:
                    router.replace({
                        path: '/'
                    })
            }
        }

        watch(() => route.fullPath, (n) => {
           switch (n) {
               case '/':
                   isSelect.value = 1
               break
               case '/archive':
                   isSelect.value = 2
                   break
               case '/about':
                   isSelect.value = 5
               break
               default:
                   isSelect.value = 1
                   break
           }
        })

        function documentScroll () {
            small.value = window.pageYOffset > 100
        }

        onMounted(() => {
            window.addEventListener('scroll', documentScroll)
        })
        onBeforeUnmount(() => {
            window.removeEventListener('scroll', documentScroll)
        })
        function goHome() {
            router.push({
                path: '/'
            })
        }

        return {
            bottomLineShow,
            showBottomLine,
            hideBottomLine,
            isSelect,
            changeSelect,
            small,
            goHome
        }
    }
})
</script>

<style lang="scss" scoped>
.header-container {
    width: 100%;
    height: 100px;
    padding: 0 10%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.98);
    position: fixed;
    z-index: 199;
    .header-left {
        display: flex;
        flex-basis: 0;
        justify-content: flex-start;
        align-items: center;
        flex-grow: 1;
        .logo {
            width: 36px;
            height: 36px;
        }
        .logo-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 5px;
            padding: 5px 0;
            box-sizing: border-box;
            position: relative;
            cursor: pointer;
            .text {
                font-size: 20px;
                font-weight: bold;
            }
        }
        .bottom-line {
            display: block;
            width: 100%;
            height: 2px;
            background: #333333;
            position: absolute;
            bottom: 0;
        }
    }
    .header-right {
        display: flex;
        flex-basis: 0;
        justify-content: flex-end;
        align-items: center;
        flex-grow: 1;
        ul {
            display: flex;
            align-items: center;
            font-size: 16px;
            font-weight: 400;
            text-transform: uppercase;
            list-style: none;
            li {
                padding: 0 18px;
                white-space: nowrap;
                .dot {
                    display: inline-block;
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    position: relative;
                    top: -12px;
                    left: 2px;
                }
                .href {
                    color: #898fa0;
                    text-decoration: none;
                }
                .href:hover {
                    color: #12183A;
                }
            }
            .select {
                .href {
                    color: #12183A;
                }
                .dot {
                    display: inline-block;
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background: #006AFF;
                    position: relative;
                    top: -12px;
                    left: 2px;
                }
            }
        }
    }
}
.move1 {
    height: 72px;
    transition: height .8s ease-in-out;
    box-shadow: 0 10px 40px 0 rgba(50, 50, 50, 0.08);
}
.move2 {
    height: 100px;
    transition: height .8s ease-in-out;
}
</style>
