

/*Dibujamos triángulo izquierdo*/
var c = document.getElementById("triangulo");
var ctx = c.getContext("2d");
ctx.fillStyle = "blue";
ctx.moveTo(5,5);
ctx.lineTo(70,37);
ctx.lineTo(5,70);
ctx.closePath();
ctx.fill();

/*Dibujamos texto animado*/

var canvas = document.getElementById("textoCanvas");
var ctxTexto = canvas.getContext("2d");
var nombre="Valentín Fernández Guijarro";
var x=200;
var y=50;
// Establecer la fuente y tamaño de la letra
ctxTexto.font = "70px Moderna";

// Establecer el estilo de relleno y contorno
ctxTexto.fillStyle = "yellow";
ctxTexto.strokeStyle = "black";
ctxTexto.lineWidth = 3;


function dibujaTexto() {
  if (nombre.length > 0) {//Vamos imprimiendo cada letra del texto y elimiándolas a medida que se imprime
    ctxTexto.fillText(nombre[0], x, y);//Imprime el relleno del primer caracter de la cadena
    ctxTexto.strokeText(nombre[0], x, y);//Imprime el contorno del primer caracter
    x += ctxTexto.measureText(nombre[0]).width;//Aumenta x el ancho del caracter para posicionar el siguiente
    nombre = nombre.slice(1);//Eliminamos el primer caracter ya impreso y lo guardamos en la cadena de texto
  } else {//Si ya hemos extraido todos los caracteres detiene el intervalo
    clearInterval(intervalo);
  }
}

// Llama a la función dibujaTexto cada segundo
var intervalo = setInterval(dibujaTexto, 1000);




/*Dibujamos triángulo derecho*/
var c = document.getElementById("triangulo2");
var ctx_t2 = c.getContext("2d");
ctx_t2.fillStyle = "red";
ctx_t2.moveTo(70,5);
ctx_t2.lineTo(70,70);
ctx_t2.lineTo(5,37);
ctx_t2.closePath();
ctx_t2.fill();


