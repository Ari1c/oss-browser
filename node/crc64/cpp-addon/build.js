<<<<<<< HEAD
const shell = require('shelljs');
const path = require('path');
const VERSION = '1.6.5';

shell.rm('-rf', 'build')
shell.mkdir('build')

var buildCmd = `node-gyp configure build --target=${VERSION} --arch=${process.arch} --dist-url=https://npm.taobao.org/mirrors/atom-shell`;
if(process.platform=='win32'){
  shell.exec(`set HOME=~/.electron-gyp && ${buildCmd}`);
}else{
  shell.exec(`HOME=~/.electron-gyp ${buildCmd}`);
}

var target = path.join(__dirname, 'lib/'+process.platform+'-'+process.arch);
shell.rm('-rf', target);
shell.mv('-f','build', target);

console.log('done');
=======
const shell = require("shelljs");
const path = require("path");
const VERSION = "1.6.5";

shell.rm("-rf", "build");
shell.mkdir("build");

var buildCmd = `node-gyp configure build --target=${VERSION} --arch=${process.arch} --dist-url=https://npm.taobao.org/mirrors/atom-shell`;
if (process.platform == "win32") {
  shell.exec(`set HOME=~/.electron-gyp && ${buildCmd}`);
} else {
  shell.exec(`HOME=~/.electron-gyp ${buildCmd}`);
}

var target = path.join(
  __dirname,
  "lib/" + process.platform + "-" + process.arch
);
shell.rm("-rf", target);
shell.mv("-f", "build", target);

console.log("done");
>>>>>>> a3c34812de130a3964bc82c152cfbffc0e61eba5
