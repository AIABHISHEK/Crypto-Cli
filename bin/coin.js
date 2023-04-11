#!/usr/bin/env node

import { program } from 'commander';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require("../package.json");
// import { version as _version } from '../package.json';

program
    .version(data.version)
    .command('key', 'Manage API key --https://www.coinapi.io/')
    .command('check', 'Check price of cryptocurrency')
    .parse(process.argv);
    // console.log(process.argv);

console.log("hello");