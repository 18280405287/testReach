const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//导入到内存中 自动生成index 页面的插件


//创建一个插件的实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),//源文件 ,__dirname 是当前文件所在的目录,根目录
    filename: 'index.html'//生成的内存中首页的名称,并自动将打包好的main.js注入到内存中去
});

//向外暴露一个打包配置对象;  因为 webpack是基于Node构建的,所以webpack支持所有 Node API 和语法
module.exports = {
    mode: 'development',//development开发环境 production产品环境(会压缩代码,减少配置文件的体积)
    //在 webpack 4.x 中 ,有一个很大的特性,就是约定大于配置; 约定.默认打包入口路径是src -> index.js

    //插件
    plugins: [
        htmlPlugin
    ]
};


// 行不行 ？  目前不行； // 这是 ES6 中 向外导出模块的API 与之对应的 是  import ** from '标识符'
// export default {}
// 那些 特性 Node 支持呢？  如果 chrome 浏览器支持哪些，则 Node 就支持哪些；

//配置 dev 的 参数 webpack-dev-server自动打包 --open自动打开浏览器 --port 3000端口号 --hot热更新 --progress打包进度 --compress压缩 --host 127.0.0.1域名
//chrome 默认打开谷歌浏览器
