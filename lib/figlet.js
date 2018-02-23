const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const { yellow, blue } = chalk;
const { textSync } = figlet;

const isobar = yellow(textSync('Isobar', { font: 'term', horizontalLayout: 'full' }));
const name = blue(textSync('bdd e2e cli', { font: 'term', horizontalLayout: 'full' }));
const version = blue(textSync('0.1', { font: 'term', horizontalLayout: 'full' }));
const author = blue(textSync('Crunchysoul', { font: 'term', horizontalLayout: 'full' }));

module.exports = {
  showBanner: () => {
    clear();
    console.log(`${isobar}\n${name}\nversion: ${version}\n`);
  },
};
