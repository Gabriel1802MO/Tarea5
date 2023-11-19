function suma(){
    let numero1 = parseInt(document.getElementById("inputsuma1").value);
    let numero2 = parseInt(document.getElementById("inputsuma2").value);

    try {
        if(isNaN(numero1) ||isNaN(numero2)){
            alert("Existe un error, porfavor verfiqe que esta ingresando digitos y no letras ");
        }else{
            var resultado = numero1 + numero2;
            document.getElementById("salidasuma").innerHTML = resultado;
        }

    } catch (error) {
        alert("Existe un error "+error);
    }
    
    
}

function resta(){
    let numero1 = parseInt(document.getElementById("inputsresta1").value);
    let numero2 = parseInt(document.getElementById("inputresta2").value);

    try {
        if(isNaN(numero1) ||isNaN(numero2)){
            alert("Existe un error, porfavor verfiqe que esta ingresando digitos y no letras ");
        }else{
            var resultado = numero1 - numero2;
            document.getElementById("salidaresta").innerHTML = resultado;
        }

    } catch (error) {
        alert("Existe un error "+error);
    }
    
    
}

function array(){
    let numero1 = parseInt(document.getElementById("inputarray").value);
    var numeros = [1, 2, 3, 4, 5];
    try {
        if(isNaN(numero1) || numero1 >= numeros.length){
            alert("Existe un error, porfavor verfique que esta ingresando digitos y no letras o que la posicion deseada este entre el 0 y el 4");
        }else{
            var resultado = ("El valor en la posición " + numero1 + " es: " + numeros[numero1]);
            document.getElementById("salidararray").innerHTML = resultado;
        }

    } catch (error) {
        alert("Existe un error "+error);
    }
    
    
}


function pares(){
    let numero = parseInt(document.getElementById("inputPares").value);
    let salida = "";
    if(!isNaN(numero) && numero >= 0){
        if(numero % 2 === 0 ){
            salida = "Es par";
        }else{
            salida = "Es impar";
        }
    }

    document.getElementById("salidaPares").innerHTML = salida;
}

function cuenta(){
    let numero = parseInt(document.getElementById("inputCuenta").value);
    let arreglo = new Array();
    let texto = "";
     
    try {

        while(numero >= 0){
            if(!isNaN(numero)){
                arreglo.push(numero);
                numero--;
            }
        }
    
        arreglo.forEach(function(elemento){
            texto += elemento + " , ";
        })
        document.getElementById("salidaCuenta").innerHTML = texto;

    } catch (error) {
        document.getElementById("salidaCuenta").innerHTML = error;
    }

   
}

function date(){
    let fecha = new Date().toDateString();
    document.getElementById("fecha").innerHTML = fecha;
}

function cuadrado(){
    let numero = parseInt(document.getElementById("inputCuadrado").value);
    let resultado = "";
    try {
        if(!isNaN(numero)){
            resultado = Math.pow(2, numero);
        }
        document.getElementById("salidaCuadrado").innerHTML = resultado;

    } catch (error) {
        document.getElementById("salidaCuadrado").innerHTML = error;
    }
}