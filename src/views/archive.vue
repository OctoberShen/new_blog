<template>
    <div class="achive-container" :class="firstMove?'achive-container move': 'achive-container'">
        <div class="time-line">
            <h2 class="year">2022</h2>
            <a class="article-info">
                <span class="title">es-倒排索引</span>
                <span class="date">02-02</span>
            </a>
            <a class="article-info">
                <span class="title">es-倒排索引</span>
                <span class="date">02-02</span>
            </a>
            <a class="article-info">
                <span class="title">es-倒排索引</span>
                <span class="date">02-02</span>
            </a>
        </div>
        <div class="time-line">
            <h2 class="year">2021</h2>
            <a class="article-info">
                <span class="title">es-倒排索引</span>
                <span class="date">02-02</span>
            </a>
            <a class="article-info">
                <span class="title">es-倒排索引</span>
                <span class="date">02-02</span>
            </a>
            <a class="article-info">
                <span class="title">es-倒排索引</span>
                <span class="date">02-02</span>
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import request from '@/request/request.js'

export default defineComponent({
    name: 'archive',
    setup() {
        const firstMove = ref(false)

        interface Req {
            apiKey: string
            area?: string
            areaID?: string
        }
        interface Res {
            area: string
            areaCode: string
            areaid: string
            dayList: any[]
        }
        const get15DaysWeatherByArea = (data: Req) => {
            console.log('data', data)
            return request<Req, Res>({
                url: '/common/weather/get15DaysWeatherByArea',
                method: 'POST',
                data,
                interceptors: {
                    requestInterceptors(res) {
                        console.log('接口请求拦截')

                        return res
                    },
                    responseInterceptors(result) {
                        console.log('接口响应拦截')
                        return result
                    }
                }
            })
        }

        onMounted(async () => {
            setTimeout(() => {
                firstMove.value = true
            }, 500)
            const res = await get15DaysWeatherByArea({
                apiKey: 'vueBZyef42a12600d6d65bd84a619433b54a7778bc0eaa7',
                area: '杭州',
                areaID: '101210109'
            })

            console.log(res)
        })
        return {
            firstMove
        }
    }
})
</script>

<style lang="scss" scoped>
.achive-container {
    width: 80%;
    background: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 5% 10%;
    box-sizing: border-box;
    margin: 0 auto;
    .time-line {
        display: flex;
        flex-direction: column;
        color: #3C4858;
        font-size: 17px;
        padding: 20px;
        text-align: left;
        .year {
            font-size: 1.8rem;
            font-weight: 500;
            line-height: 1.2;
            margin-bottom: 10px;
        }
        .article-info {
            width: 100%;
            display: flex;
            align-items: center;
            padding: 20px;
            box-sizing: border-box;
            text-underline: none;
            cursor: pointer;
            .title {
               margin-right: auto;
            }
            .date {
                white-space: nowrap;
            }
        }
        .article-info:hover {
            background: #F8F9FB;
            color: #4CA5CE;
            border-radius: 6px;
        }
    }
}
.move {
    margin-top: -84px;
    transition: margin-top .8s ease-in-out;
}
</style>
