const { resolve } = require('path');

// 默认端口
const port = process.env.npm_config_port;
// 默认域名
const domain = "http://localhost";
// 默认标题
const title = "This is my first Document";

/**
 * 项目目录体系
 * src ->
 *     css  ->
 *     js   -> 
 *     html -> md -> html
 *     workspace -> 编辑markdown
 *     index.html
 */
const outerPath = {
  rootPath: resolve(__dirname, '../../../'),
  srcPath: resolve(__dirname, '../../../src/'),
  htmlPath: resolve(__dirname, '../../../html/'),
  jsPath: resolve(__dirname, '../../../js/'),
  mdPath: resolve(__dirname, '../../../workspace/')
}

/**
 * 插件目录体系
 * temp_files ->
 *        css ->
 *        js  ->
 *        html-> index.html/md.html
 */
const innerDir = {
  rootDir: resolve(__dirname, '../temp_files/'),
  htmlDir: resolve(__dirname, '../temp_files/html/'),
  jsDir: resolve(__dirname, '../temp_files/js/'),
  cssDir: resolve(__dirname, '../temp_files/css/'),
}

module.exports = {
  port,
  domain,
  title,
  outerPath,
  innerDir
}