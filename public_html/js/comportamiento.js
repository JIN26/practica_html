/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var peso = parseFloat(prompt("¿Cual es tu peso?"));;
//Array es una cadena de variables en este caso string 
var planeta = new Array("Marte","Jupiter","este planeta no existente");
var lugar=parseInt(prompt("Elige tu planeta\n\n1 es "+planeta[0]+" , 2 es "+planeta[1]));
//esto seria un Array de float 
var gravedad = new Array(9.8,3.7,24.8);
var pesoFinal;
//otra forma de hacer una estructura condicional
switch(lugar){
    case 1:
        pesoFinal = parseFloat(peso * gravedad[1] / gravedad[0]);
    break;
    case 2:
        pesoFinal = parseFloat(peso * gravedad[2] / gravedad[0]); 
    break;
    default:
        lugar=3;
        pesoFinal = "No calculable";
    break;
}
//el (--lugar) == (lugar-1)
var ruta = window.location;
console.log(ruta);
document.write("Tu peso en "+planeta[--lugar]+" es  <strong> "+ pesoFinal + " kilos</strong>"); 

