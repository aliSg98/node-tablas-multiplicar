const fs = require('fs');
const colors=require('colors');

const crearArchivo = async( base = 5 , listar=false, hasta=10)=>{
    try{
        let salida='';
        let resultado;
        


        for ( let i=1; i<=hasta; i++ ) {
            resultado = base * i;
            salida += `${base} X ${i} = ${resultado}\n`;
        }
        if(listar==true){
            console.log(colors.rainbow(salida));
        }

        // fs.writeFile('tabla-5.txt', salida, (err)=>{//lo ultimo es un callback
        //     if (err) throw err;

        //     console.log('tabla-5.txt creado');
        // })

        fs.writeFileSync (`./salida/tabla-${ base }.txt`, salida);
        return `tabla de base ${base} creada`;

    }catch(err){
        throw err;
    }


}

module.exports = {
    crearArchivo
}