<template>
    <footer class="footer">
        <div class="copyright">@2022 octobershen 版权所有 ICP证： <a class="link" href="https://beian.miit.gov.cn/#/Integrated/index">浙ICP备2021015346号-1</a></div>
    </footer>
</template>

<script lang="ts">
export default {
    name: 'myFooter'
}
</script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    height: 80px;
    padding: 0 10%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.98);
    .copyright {
        display: flex;
        margin-left: 18px;
        color: #898fa0;
        font-size: 14px;
        flex-basis: 0;
        justify-content: flex-start;
        align-items: center;
        flex-grow: 1;
        .link {
            text-decoration: none;
            color: #333333;
            cursor: pointer;
        }
    }
}
</style>
