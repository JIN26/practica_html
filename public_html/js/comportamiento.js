/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var lugar=parseFloat(document.getElementById("lugar").value);
var peso = parseFloat(document.getElementById("peso").value);;
var planeta = new Array("Marte","Jupiter","este planeta no existente");
var gravedad = new Array(9.8,3.7,24.8);
var pesoFinal;
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
var ruta = window.location;
console.log(ruta);

var lienzo = (document.getElementById("Imagen")).getContext("2d");
yFinal = (document.getElementById("Imagen")).width;

var fechaNacimiento = document.getElementById("linea");
var button = document.getElementById("button");

button.addEventListener("click", edadActual);

function edadActual(){
    edad = (parseInt(fechaNacimiento.value) - 2019)*-1;

    for(i=0;i<yFinal;i+=yFinal/edad){
        dibujarLinea("gray",0+i,0,yFinal-1,yFinal/edad+i);
    }

    for(i=0;i<yFinal;i+=yFinal/edad){
        dibujarLinea("gray",0,0+i,yFinal/edad+i,yFinal-1);
    }
    marco("black");
}

function marco(color){
    dibujarLinea(color, 1,1,1,yFinal-1);
    dibujarLinea(color, 1,yFinal-1,yFinal-1,yFinal-1);
    dibujarLinea(color,1,1,yFinal-1,1);
    dibujarLinea(color,yFinal-1,0,yFinal-1,yFinal-1);
}

function dibujarLinea(color, xI, yI, xF, yF){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xI, yI);
    lienzo.lineTo(xF, yF);
    lienzo.stroke();
    lienzo.closePath();
}

document.write("Tu peso en "+planeta[--lugar]+" es  <strong> "+ pesoFinal + " kilos</strong>"); 

