import { program } from 'commander';
import { key } from '../commands/key.js';
program
    .command('set')
    .description('set api key --Get at https://www.coinapi.io/')
    .action(key.set)

program
    .command('show')
    .description('show api key ')
    .action(key.show)

program
    .command('remove')
    .description('remove api key')
    .action(key.remove)

program.parse(process.argv);