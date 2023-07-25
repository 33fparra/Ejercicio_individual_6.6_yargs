import express from "express";
import hbs from "hbs";
import { hideBin } from 'yargs/helpers';
import yargs from "yargs";
const app = express();

yargs(hideBin(process.argv))
  .command('adulto', 'Es adulto o no', {  
        edad: {
          describe: 'Verificar si una persona es mayor de edad',
          demand: true,
          alias: 'ad',
          type: 'number',
        }
    }, function (argv) {
    if (argv.edad > 18) {
        console.log('Mayor de edad');
      } else {
        console.log('Menor de edad');
      }
  })
  .help()
  .argv;

app.listen(3000,()=>{console.log("Levantando Puerto 3000")});