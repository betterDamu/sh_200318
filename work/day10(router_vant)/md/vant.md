### 使用脚手架创建项目
    vue init webpack vant-demo

### 安装vant
    npm i vant

### 安装vant的babel插件
    npm i babel-plugin-import -D

### 修改.babelrc
    {
      "plugins": [
        ["import", {
          "libraryName": "vant",
          "libraryDirectory": "es",
          "style": true
        }]
      ]
    }

### 引入按钮组件(1)
    import Vue from 'vue';
    import { Button } from 'vant';
    Vue.use(Button);

    模板:
        <van-button type="default">默认按钮</van-button>

### 引入按钮组件(2)
    import { Button } from 'vant';
      export default {
        name: 'App',
        components:{
          [Button.name]:Button
        }
      }

    模板:
      <van-button type="default">默认按钮</van-button>