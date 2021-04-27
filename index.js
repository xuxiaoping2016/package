/*
 * @Author: xiaoping.xu
 * @Date: 2021-04-27 23:50:02
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-04-27 23:55:04
 * @Desc: 
 */

const fs = require('fs'); //文件系统
const program = require('commander'); //终端输入处理框架
const package = require('./package.json'); //获取版本信息
program.version(package.version, '-v,--version')
       .command('init <name>')
       .action(name=>{
           console.log(name)
       })
  program.parse(process.argv);