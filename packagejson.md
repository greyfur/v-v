{
  "name": "vue2-webpack2-cli-vux2-multe-page",
  "version": "2.0.1",
  "description": "blue fox",
  "author": "蓝狐 <bluefox1688>",
  "private": true,
  "scripts": {
    "dev": "node build/dev-server.js",
    "build": "node build/build.js",
    "unit": "cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run",
    "e2e": "node test/e2e/runner.js",
    "test": "npm run unit && npm run e2e"
  },
  ` dependencies指定依赖的其它包，这些依赖是指包发布后正常执行时所需要的，也就是线上需要的包。`
  "dependencies": { 
    "accounting": "^0.4.1",
    "axios": "^0.16.0",
    "fastclick": "^1.0.6", ` 消除点击延时`
    "postcss-loader": "^1.3.3", ` 添加浏览器前缀`
    "store": "^2.0.4", ` store,vuex之类的属于状态管理`
    "vue": "^2.2.2",
    "vue-router": "^2.2.0",
    "vuex": "^2.1.1",  
    "vuex-i18n": "^1.3.1",
    "vux": "^2.2.0",
    "vux-loader": "^1.0.57"
  },
  "devDependencies": {   ` 这些依赖只有在开发时候才需要`
    "autoprefixer": "^6.7.2",  ` 是用于给css3属性自动加属性前缀的`
    "babel-core": "^6.22.1",
    "babel-loader": "^6.2.10",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-preset-env": "^1.2.1",
    "babel-preset-stage-2": "^6.22.0",
    "babel-register": "^6.22.0",
    "chalk": "^1.1.3", ` chalk适用于格式化输出命令行信息的`
    "compression-webpack-plugin": "^0.3.2",
    "connect-history-api-fallback": "^1.3.0",
    "copy-webpack-plugin": "^4.0.1",
    "css-loader": "^0.26.1",
    "eventsource-polyfill": "^0.9.6",
    "express": "^4.14.1", ` 用于启动 node http server的服务`
    "extract-text-webpack-plugin": "^2.0.0",
    "file-loader": "^0.10.0",
    "friendly-errors-webpack-plugin": "^1.1.3",
    "function-bind": "^1.1.0",
    "html-webpack-plugin": "^2.28.0", `  webpack 里载入和处理html的插件`
    "http-proxy-middleware": "^0.17.3", ` node server 的中间件工具`
    "webpack-bundle-analyzer": "^2.2.1",
    "cross-env": "^3.1.4", `  设定环境变量的工具，NODE_ENV变量跟它有关`
    "karma": "^1.4.1", ` karma相关的都是单元测试工具`
    "karma-coverage": "^1.1.1",
    "karma-mocha": "^1.3.0",
    "karma-phantomjs-launcher": "^1.0.2",
    "karma-sinon-chai": "^1.2.4",
    "karma-sourcemap-loader": "^0.3.7",
    "karma-spec-reporter": "0.0.26",
    "karma-webpack": "^2.0.2",
    "lolex": "^1.5.2",
    "mocha": "^3.2.0",
    "chai": "^3.5.0",
    "sinon": "^1.17.7",
    "sinon-chai": "^2.8.0",
    "inject-loader": "^2.0.1",
    "babel-plugin-istanbul": "^3.1.2",
    "phantomjs-prebuilt": "^2.1.14",
    "chromedriver": "^2.27.2",
    "cross-spawn": "^5.0.1",
    "nightwatch": "^0.9.12",
    "selenium-server": "^3.0.1",
    "semver": "^5.3.0", ` // 一个版本检查工具`
    "opn": "^4.0.2",  ` // 跨平台的开启文件或者网页的工具`
    "optimize-css-assets-webpack-plugin": "^1.3.0",
    "ora": "^1.1.0", ` // 命令行里自动运行的信息提示`
    "rimraf": "^2.6.0", ` // 跑shell命令 rm-rf 的工具`
    "url-loader": "^0.5.7",
    "yaml-loader": "^0.4.0",
    "less": "^2.7.1",
    "less-loader": "^2.2.3",
    "vux-loader": "^1.0.56",
    "vue-loader": "^11.1.4",
    "vue-style-loader": "^2.0.0",
    "vue-template-compiler": "^2.2.1",` // webpack相关的用于，把图片，*.vue, *.js, 这些组合成最终的项目，webpack-dev用于跑测试服务器`
    "webpack": "^2.2.1",
    "webpack-dev-middleware": "^1.10.0",
    "webpack-hot-middleware": "^2.16.1", 
    "webpack-merge": "^2.6.1"
  },
  "engines": { ` 指定 依赖的nodejs 的版本号码`
    "node": ">= 4.0.0",
    "npm": ">= 3.0.0"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
}