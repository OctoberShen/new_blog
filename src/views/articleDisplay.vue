<template>
    <div class="article-container">
        <viewer :value="text" :plugins="plugins"  />
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Viewer } from '@bytemd/vue-next'
import 'bytemd/dist/index.css'
import gfm from '@bytemd/plugin-gfm'
import frontmatter from '@bytemd/plugin-frontmatter'
import breaks from '@bytemd/plugin-breaks'
import math from '@bytemd/plugin-math'
import mermaid from '@bytemd/plugin-mermaid'
import highlight from '@bytemd/plugin-highlight'
import 'highlight.js/styles/vs.css'
import 'juejin-markdown-themes/dist/juejin.min.css'

export default defineComponent({
    name: 'ArticleDisplay',
    components: {
        Viewer
    },
    setup() {
        const text = ref('')
        const plugins = [
            gfm(),
            frontmatter(),
            breaks(),
            math(),
            mermaid(),
            highlight()
        ]

        text.value = '#### 使用iterm连接服务器\n' +
            '\n' +
            '::: tip\n' +
            '  dsa\n' +
            ':::\n' +
            '首先来写一个脚本命令，直接在桌面新建一个itermssh.sh\n' +
            '\n' +
            '```shell\n' +
            '#!/usr/bin/expect -f\n' +
            'set user 你的用户名\n' +
            'set host 你的服务器ip\n' +
            'set password 你的密码\n' +
            'set port 22\n' +
            'set timeout -1\n' +
            'spawn ssh -p $port $user@$host\n' +
            'expect "$user@$host\'s password:"\n' +
            'send "$password\\r"\n' +
            'interact\n' +
            '```\n' +
            '\n' +
            '然后需要在profiles里面新建一个新的配置文件\n' +
            '\n' +
            '![image-20220412150423948](/Users/octobershen/Library/Application Support/typora-user-images/image-20220412150423948.png)\n' +
            '\n' +
            '\n' +
            '\n' +
            '#### ！！！Tips需要给脚本文件赋权限，不然会报错\n' +
            '\n' +
            '```shell\n' +
            '# 文件夹路径填写自己的文件路径\n' +
            'chmod -R a+x /Users/octobershen/Desktop/script\n' +
            '```\n' +
            '\n' +
            '\n'

        return {
            text,
            plugins
        }
    }
})
</script>

<style scoped>

</style>
