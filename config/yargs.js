const {option}=require('yargs');
const argv=require('yargs')
    .option('b',{
        alias:'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar'
    })
    .option('l',{
        alias:'listar',
        type: 'boolean',
        default: false

    })
    .options('h',{
        alias:'hasta',
        type:'number',
        default:10,
        describe:'hasta que numero quiere que llegue la tabla'
    })
    .argv;


module.exports=argv;