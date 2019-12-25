// commonJS 引入path模块
var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 判断当前环境是开发环境还是 部署环境，主要是 mode属性的设置值。
const devMode = process.env.NODE_ENV !== 'production';

// 导出整个webpack配置对象
module.exports = {
    // webpack 提供 mode 配置选项，配置 webpack 相应模式的内置优化。
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.(sa|c|sc)ss$/,
                // css 和 style 模块解析的依赖 style-loader 和 css-loader
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            sourceMap: true,
                            plugins: loader => [
                                require('autoprefixer')({ browsers: ['> 0.15% in CN'] }) // 添加前缀
                            ]
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // 设置最终输出的文件名
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
        })
    ]
};