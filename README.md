# vue  

    npm install -g @vue/cli

vue.config.js 에서 포트 번호 바꿀 수 o

    const { defineConfig } = require('@vue/cli-service')
    module.exports = {
      transpileDependencies: true,
      devServer: {
        port: 8080
      }
    }

### 📁참고 강의
- 코딩애플 : 인스타그램을 만들며 배워보는 Vue.js 3 완벽 가이드
- 인프런(캡틴판교) : Vue.js 시작하기 - Age of Vue.js
