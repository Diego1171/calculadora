'use trict';
let suma = 0;
let multiplicacion = 1;
let division = 1;
let resta = 0;
let selecccion;
let number1;
let number2;
do{
selecccion = parseInt (prompt("¿Que operacion desea hacer?: \n 1. suma \n 2. resta \n 3.multiplicacion \n 4.division"));
number1= parseFloat(prompt("ingresar el primer numero"));
number2= parseFloat(prompt("ingresar el segundo numero"));
if (selecccion ===1){
    suma = number1 + number2;
    alert ("la suma es:"+suma);
}else if(selecccion ===2){
    resta = number1 - number2;
    alert ("la resta es:"+resta);
}else if(selecccion ===3){
    multiplicacion = number1 * number2;
    alert ("la multiplicacion es:"+multiplicacion);
}else if(selecccion ===4){
    division = number1 / number2
   alert ("la division es:"+division);
}


}while(true);

