const Configstore = require('configstore');
const inquirer = require('./inquirer');
const pkg = require('../package.json');

const conf = new Configstore(pkg.name);

module.exports = {
  getEnvs: () => conf.get(),

  setEnvs: async () => {
    const behaveproEnvs = await inquirer.askBehavepro();
    const protractorEnvs = await inquirer.askProtractor();
    const browserstackEnvs = await inquirer.askBrowserstack();

    const envsAll = {
      behaveproEnvs,
      protractorEnvs,
      browserstackEnvs,
    };
    // console.log(envsAll);
    conf.set(envsAll);
  },
};
