const themeConfig = require('./config/theme/index');
const plugins = require('./plugins/index');
const mathjax3 = require('markdown-it-mathjax3');

module.exports = {
    title: "Tony's Blob",
    description: "越努力越幸运",
    dest: "public",
    head: [
        ["link", { rel: "icon", href: "/favicon.ico" }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        [
            "meta",
            {
                name: "viewport",
                content: "width=device-width,initial-scale=1,user-scalable=no",
            },
        ],
    ],
    theme: "reco",
    themeConfig,
    markdown: {
        lineNumbers: true,
        extendMarkdown: md => {
            md.set({ breaks: true });
            md.use(mathjax3)
        },
    },
    plugins,
    chainWebpack: (config) => {
        config.module.rule('xxx')
            .test(/\.(webp|png|jpe?g|gif)(\?.*)?$/)
            .use('file-loader')
            .loader('file-loader')
            .options({
                name: 'assets/img/[name].[hash:8].[ext]'
            });
        config.module.rules.delete('images')
        config.module
        .rule('images')
          .test(/\.(webp|png|jpe?g|gif)(\?.*)?$/)
          .use('url-loader')
            .loader('url-loader')
            .options({
              limit: 1,
              name: `assets/img/[name].[hash:8].[ext]`
            })
    }
};

