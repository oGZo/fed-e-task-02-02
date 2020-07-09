### fed-e-task-02-02 简答题
第一题 webpack的构建流程有哪些环节
   1. 安装webpack  webpack-cli  webpack-cli
   2. 添加webpack配置文件
   3. 命令行执行webpack

webpack 执行流程
1. 验证配置
2. 默认webpack配置
3. 通过mode配置打包模式
4. 从entry入口读取文件
5. 通过module 配置不同的loader
6. 通过resolve,resloveLoader 配置   资源的路径和别名
7. 通过loader加装不同类型资源
8. 通过plugins做一些资源的操作  比如  copy文件 清空文件夹 提取样式  生成html文件等
9. 通过 output 配置输入文件信息


10. 通过devServer配置 开发环境配置参数
11. 通过 optimization 配置处理文件相关配置
12. 通devtool配置sourcemap格式；
    

第二题
1. loader 是用来解析和检测对应资源, 可以扩展webpack加载资源的类型 主要分三类   编译型 资源型 和 lint型
2. plugins 主要是通过webpack内部的钩子机制在自定义做相应的操作

loader必须是 方法 接收一个source  返回一个 js表达式  如果不是js表达式 则需要其他可以承接其内容


### 代码部分提供的事项目说明文档