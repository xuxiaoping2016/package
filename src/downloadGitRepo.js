/*
 * @Author: xiaoping.xu
 * @Date: 2021-04-28 16:54:05
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-04-28 17:40:10
 * @Desc: 
 */
const download = require("download-git-repo");
const path = require("path");
const rimraf = require("rimraf");

const dir = path.join(process.cwd(), "test"); //这里可以自定义下载的地址

rimraf.sync(dir, {});  //在下载前需要保证路径下没有同名文件

download(
  "https://stash.weimob.com:WF/saas-fe-kraken-core-react", 
  dir,
  { clone: true },
  function (err) {
    console.log(err ? "Error" : "Success", err);
  }
);
