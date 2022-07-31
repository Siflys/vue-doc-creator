const { readdirSync, copyFileSync } = require('fs');

const { 
  innerDir: {
    cssDir,
    jsDir,
    htmlDir
  }, // temp_files文件夹下的路径
  outerPath : {
    cssPath,
    jsPath,
    htmlPath
  } // src文件夹下的路径
} = require('../config');

function initFiles () {
  // 拷贝css文件
  copyFiles('css');
  // 拷贝js文件
  copyFiles('js');
  // 拷贝欢迎页面
  copyWelcomePage();
}
// 拷贝js、css静态文件
function copyFiles(field) {
  // temp_files
  let innerFiles = [];
  // src
  let outerFiles = [];
  // temp_files路径
  let _dir = '';
  // src路径
  let _path = '';

  switch (field) {
    case 'css':
      _dir = cssDir;
      _path = cssPath;
      break;
    case 'js':
      _dir = jsDir;
      _path = jsPath;      
      break;
    default:
      break;
  }
  // temp_files文件夹下的所有文件
  innerFiles = readdirSync(_dir);
  // src文件夹下的所有文件
  outerFiles = readdirSync(_path);

  // 将temp_files文件夹下的相关文件拷贝到src文件夹下
  innerFiles.map(function (innerFile) {
    // src文件夹下innerFile文件不存在时，拷贝文件
    if (outerFiles.indexOf(innerFile) === -1) {
      /**
       * 拷贝文件
       * param1 origin file源文件路径
       * param2 target file 需要创建的目标文件路径及名称
       * param3 默认值为0
       * param4 callback错误回调函数
       */
      copyFileSync(_dir + '/' + innerFile, _path + '/' + innerFile, 0, function (error) {
        if (error) {
          throw new Error("File is failed to copy.", error);
        }
      })
    }
  })
}

// 拷贝html文件中（welcome.html）
function copyWelcomePage () {
  // 读取src文件夹下html文件夹的文件
  const htmlFiles = readdirSync(htmlPath);
  // 只有在外层html文件夹中没有任何文件的前提下拷贝welcome.html
  if (!htmlFiles.length) {
    copyFileSync(htmlDir + '/welcome.html', htmlPath + '/welcome.html', 0, function (error) {
      throw new Error("File is failed to copy.", error);
    })
  }
}

module.exports = initFiles();