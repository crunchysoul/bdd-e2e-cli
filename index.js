#!/usr/bin/env node

const envs = require('./lib/envs.js');
const figlet = require('./lib/figlet.js');
const files = require('./lib/files.js');

const { getEnvs, allEnvs, setEnvs } = envs;
const { showBanner } = figlet;
const {
  getCurrentDirectory, getCurrentDirectoryBase, getProjectName, directoryExists, fileExists,
} = files;

// showBanner();
// setEnvs();
console.log(getCurrentDirectoryBase());
console.log(getCurrentDirectory());
console.log(directoryExists(`${getCurrentDirectory()}/package.json`));
console.log(fileExists(`${getCurrentDirectory()}/package.json`));
getProjectName();
