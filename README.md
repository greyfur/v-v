## 使用前注意事项
1. 直接使用 `cnpm`可能会导致依赖不正确。强烈建议给 `npm` 设置 taobao 的 registry。
2. 新建页面，需重新`npm run dev`才可以正常访问新建的页面。
3. `views`文件名结构及名称不能动！如需修改名字，还要到config/index.js修改`moduleName`参数 
4. `views`文件夹下面的模块名称可以自定义！
5. 在`view`里二级文件夹，一个文件夹就是一个html，`js``vue``html` 都统一放在当前文件夹里，也可以继续放其他的资源，例如css、图片等，webpack会打包到当前模块里。
6. ` 注意：所有有资源的目录都要求为二级！！！！例如：views/home/list.....所有文件要写在list文件夹下,但是页面跳转时的跳转路径不用写二级目录名！例：../demo/details.html(详见demo!)`
7. 修改端口号在`config/index.js`文件里，修改默认打开文件路径，在` build/dev-server.js`里
8. ` 注意：二级目录名字要和html文件的名字相同 如：views/home/list/list.html`
9. 本架子借鉴于https://github.com/bluefox1688/vue-cli-multi-page

## Build Setup
 
``` bash
# 安装依赖
npm install

# 调试环境 serve with hot reload at localhost:8091
npm run dev

# 生产环境 build for production with minification
npm run build

```
## 目录结构
``` 
webpack
 |---build
 |---src
     |---assets    #这里放置公共资源
        |---css
        |---js
        |---img
     |---components  #放置公共组件组件
        |---Form.vue  嵌入到home/list.html里的子组件
     |---views    #这里放置所有模块！
        |---home    #一级目录   注意：当一级目录下只有一个二级目录，一级目录名就和二级目录名同名，即home改为list
           |---list    #二级目录
             |---list.html
             |---list.js
             |---listApp.vue
        |---family    #一级目录
           |---button    #二级目录
              |---button.html
              |---button.js
              |---buttonApp.vue	
           |---calendar    #二级目录
              |---calendar.html
              |---calendar.js
              |---calendarApp.vue	
  |---static    #放置公共静态资源
        |---css
        |---js
        |---image
        |---mui	 
     
  ```
 ## 一些文件说明

build目录放的是构建脚本（包括构建时要用到的webpack 配置）
config目录放的是配置脚本（主要是你这个vue项目启动时需要的配置，开发模式和生产模式）
src目录就是你的项目源码目录
.babelrc 是babel的配置 ` 不能删！`
.gitignore 项目git时要忽略追踪文件的配置  ` 不能删！`
.postcssrc 用到的css的前or后处理器的配置  ` 不能删！`
package.json 整个项目的一个启动入口和依赖包安装指南  ` 不能删！`
 
