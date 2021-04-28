/*
 * @Author: xiaoping.xu
 * @Date: 2021-04-28 16:45:10
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-04-28 16:51:29
 * @Desc: 
 */
// https://www.npmjs.com/package/ora
const ora = require('ora');

const chalk = require('chalk');

const spinner = ora(`Loading ${chalk.red('unicorns')}`).start();

setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = 'Loading rainbows';
}, 3000);

setTimeout(() => {
    spinner.stop()
}, 6000);