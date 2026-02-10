import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
  .options('b',{
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base number for multiplication'
  })
  .options('l',{
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Limit number for multiplication'
  })
  .options('s',{
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show the multiplication table in console'
  })
  .options('n',{
    alias: 'name',
    type: 'string',
    default: 'table',
    describe: 'Name of the output file'
  })
  .options('d',{
    alias: 'destination',
    type: 'string',
    default: './outputs',
    describe: 'Destination folder for the output file'
  })
  .check((argv, options) => {
    if (argv.b <= 1) {
      throw new Error('The base must be a number greater than 1');
    }

  })
  .parseSync();
