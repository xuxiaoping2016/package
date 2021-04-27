#!/usr/bin/env node
const program = require('commander');
const package = require('./package.json');
program.version(package.version, '-v,--version')
       .command('init <name>')
       .action(name=>{
           console.log(name)
       })
  program.parse(process.argv);