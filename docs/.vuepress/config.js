const themeConfig = require('./config/theme/index');
const plugins = require('./plugins/index');

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
    },
    plugins
};