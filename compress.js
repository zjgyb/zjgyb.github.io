/**
 * 压缩vuepress生成的html
 */
const fs = require('fs');
const path = require('path')
const minifier = require('html-minifier').minify;

const minifierRules = {
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    removeComments: true,
    minifyJS: true,
    minifyCSS: true,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true
}
const output = path.resolve(__dirname, 'output');

function minifyHtml(dir) {
    fs.readdir(dir, (err, files) => {
        if (err) throw err;

        files.forEach(file => {
            // 判断是否为文件夹，如果是文件夹，则递归展示
            const filePath = path.resolve(dir, file);
            if (fs.statSync(filePath).isDirectory()) {
                minifyHtml(filePath);
                return;
            }

            if (!file.endsWith('.html')) {
                return;
            }

            let source = fs.readFileSync(filePath, 'utf8');
            let result = minifier(source, minifierRules);
            fs.writeFileSync(filePath, result);
        });
    });
}

minifyHtml(path.resolve(__dirname, './public'))