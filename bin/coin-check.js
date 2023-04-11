import { program } from "commander";
import { check } from '../commands/check.js';


program
    .command('price')
    .description('show price only')
    .option('--coin <type>', 'Add specific coin', 'BTC')
    .option('--curr <currency>', 'Change the currency', 'USD')
    .action((cmd)=>{check.price(cmd)})

program.parse(process.argv)