//function que se encarge de validar por ex´resion regular 


function validarn(e){
    var teclado=(document.all)?e.KeyCode : e.which;
    //**Vamos aplicar una preuba logica a todo el teclado a partir de un patron este patron debe ser numerico y solo acepta deñ cero al 9, todo lo demas lo deja escapar */
    if(teclado==8)return true;
    var patron= /[0-9\d .]/;

    var probar = String.fromCharCode(teclado);

    return patron.test(probar);

}
 function Intereso(){

    var valor= document.formulario1.cantidadI.value;
    
    //tipo de dato 

    var resul= parseInt(valor);

    var interes= resul*0.025;

    var total =resul + interes;

    //vamos a imprimir el resultado 

    document.formulario1.sueldoi.value="$"+ total; 
 }

 function borrard(){

    document.formulario1.sueldoi.value="";
    document.formulario1.cantidadI.value="";
 }