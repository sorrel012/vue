# vue

npm install -g @vue/cli

## axios 정리
https://www.canva.com/design/DAFq6bZZ584/M_pISqK_npD_lUaUvsc83A/edit


created vs mounted

watch vs computed

emit

props

async, await 로 axios 활용

beforeDestroy() : Vue3.0 명칭 바뀜

vue.config.js 에서 포트 번호 바꿀 수 o

    const { defineConfig } = require('@vue/cli-service')
    module.exports = {
      transpileDependencies: true,
      devServer: {
        port: 8080
      }
    }

:bind
