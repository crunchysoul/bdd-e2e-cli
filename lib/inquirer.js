const inquirer = require('inquirer');

module.exports = {
  // for Behave Pro infomation
  askBehavepro: () => {
    const questions = [
      {
        name: 'url',
        type: 'input',
        message: 'Behave Pro host url',
        default: 'https://behave.pro',
      },
      {
        name: 'hostId',
        type: 'input',
        message: 'Behave Pro host id',
        default: 10010,
      },
      {
        name: 'userId',
        type: 'input',
        message: 'Behave Pro user id',
        default: 'dmlzdWFsamF6ei5qaXJhLmNvbQ==',
      },
      {
        name: 'apiKey',
        type: 'input',
        message: 'Behave Pro api key',
        default: '755ea1948af07527c024ec94da743ccef247118f',
      },
    ];
    return inquirer.prompt(questions);
  },

  // for Protractor infomation
  askProtractor: () => {
    const questions = [
      {
        name: 'urlLocal',
        type: 'input',
        message: 'Protractor base url local',
        default: 'https://preprod.holden.com.au',
      },
      {
        name: 'urlStaging',
        type: 'input',
        message: 'Protractor base url staging',
        default: 'https://preprod.holden.com.au',
      },
      {
        name: 'name',
        type: 'input',
        message: 'remote project name',
        default: 'Laminex',
      },
      {
        name: 'userId',
        type: 'input',
        message: 'Browser Stack user id',
        default: 'vjqa',
      },
      {
        name: 'apiKey',
        type: 'input',
        message: 'Browser Stack key',
        default: 'z5fjTxhgdi3xda1YPAm2',
      },
    ];
    return inquirer.prompt(questions);
  },

  // for Browser Stack infomation
  askBrowserstack: () => {
    const questions = [
      {
        name: 'browser',
        type: 'input',
        message: 'Browser Stack browser',
        default: 'chrome',
      },
      {
        name: 'stackLocal',
        type: 'confirm',
        message: 'Test localhost/internal servers in your network (browserstack.local)?',
        default: false,
      },
      {
        name: 'stackDebug',
        type: 'confirm',
        message: 'Generate screenshots at various steps in your test (browserstack.debug)?',
        default: false,
      },
    ];
    return inquirer.prompt(questions);
  },
};
