#!/usr/bin/env node

const envs = require('./lib/envs.js');
const figlet = require('./lib/figlet.js');

const { showBanner } = figlet;
const { getEnvs, allEnvs, setEnvs } = envs;

showBanner();
setEnvs();
