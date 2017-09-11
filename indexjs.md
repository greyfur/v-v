// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path') ` // path是node.js的路径模块，用来处理路径统一的问题`

module.exports = {
  build: { ` // build是生产编译环境下的一些配置`
    env: require('./prod.env'), ` // 导入prod.env.js配置文件,用来指定当前环境`
          ```
            下面是prod.env.js的配置内容
          module.exports = {
              // 作用是导出一个对象，NODE_ENV是一个环境变量，指定production环境
              NODE_ENV: '"production"'
          }
          ```
    index: path.resolve(__dirname, '../dist/index.html'),` 相对路径的拼接`
    assetsRoot: path.resolve(__dirname, '../dist'), ` 定义的是静态资源的根目录dist`
    assetsSubDirectory: 'static', ` 定义的是静态资源根目录的子目录static`
    assetsPublicPath: '/', ` 定义的是静态资源的公开路径，也就是真正的引用路径`
    productionSourceMap: true, ` 是否生成生产环境的sourcmap，sourcmap是用来debug编译后文件的，通过映射到编译前文件来实现`
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false, ` 是否在生产环境中压缩代码，如果要压缩必须安装compression-webpack-plugin`
    productionGzipExtensions: ['js', 'css'], ` 定义要压缩哪些类型的文件`
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report ` 是用来开启编译完成后的报告` 
  },` process.env.npm_config_report表示定义的一个npm_config_report环境变量，可以自行设置`
  dev: { ` dev是开发编译环境下的一些配置`
    env: require('./dev.env'), ` 引入当前目录下的dev.env.js，用来指明开发环境`
        ```
          下面是dev.env.js的配置内容
          // 首先引入的是webpack的merge插件，该插件是用来合并对象，也就是配置文件用的，相同的选项会被覆盖，至于这里为什么多次一举，可能另有他图吧
          var merge = require('webpack-merge')
          // 导入prod.env.js配置文件
          var prodEnv = require('./prod.env')
          // 将两个配置对象合并，最终结果是 NODE_ENV: '"development"'
          module.exports = merge(prodEnv, {
              NODE_ENV: '"development"'
          })
        ```
    port: 8080, ` dev-server的端口号`
    autoOpenBrowser: true, ` 以下表示是否自定代开浏览器`
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    ` 下面是代理表，用来建一个虚拟api服务器用来代理本机的请求，只能用于开发模式`
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    ` 是否生成css，map文件，上面这段英文就是说使用这个cssmap可能存在问题`
    cssSourceMap: false
  }
}
  ```
    下面是proxyTable的一般用法
    vue-cli使用这个功能是借助http-proxy-middleware插件，一般解决跨域请求api
    proxyTable: {
        '/list': {
            target: 'http://api.xxxxxxxx.com', -> 目标url地址
            changeOrigin: true, -> 指示是否跨域
            pathRewrite: {
            '^/list': '/list' -> 可以使用 /list 等价于 api.xxxxxxxx.com/list
            }
        }
    }
  ```