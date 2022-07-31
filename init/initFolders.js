const { mkdirSync, existsSync } = require('fs');

const {
  outerPath: {
    srcPath,
    jsPath,
    htmlPath,
    cssPath,
    mdPath
  }
}  = require('../config');


function initFolders() {
  // 相应文件夹不存在的情况下，再创建
  if (!existsSync(srcPath)) {
    createFolder(srcPath);
  }
  if (!existsSync(jsPath)) {
    createFolder(jsPath);
  }
  if (!existsSync(htmlPath)) {
    createFolder(htmlPath);
  }
  if (!existsSync(cssPath)) {
    createFolder(cssPath);
  }
  if (!existsSync(mdPath)) {
    createFolder(mdPath);
  }
}

// 同步创建文件夹
function createFolder (path) {
  // path文件夹路径
  // callback错误回调函数
  mkdirSync(path, function (error) {
    if (error) {
      throw new Error("Folder is failed to create", error);
    }
  });
}

module.exports = initFolders;