var empate = 0;
var casa = 0;
var gambler = 0;
var jugador = 0;
var computadora = 0;
var jcom = "";
var jgam = "";

var veces= prompt("¿cuantas manos quiere jugar al cachipun?");
for (i=1; i<=veces; i++) {
            jugador= prompt ("Elige tu jugada escribiendo un numero: piedra=0; papel=1; tijera=2")
    computadora= Math.floor(Math.random()*3);

            if (computadora==0){
                jcom="piedra"
            }
            else if (computadora==1){
                jcom="papel"
            }
            if (computadora == 2){
                jcom="tijera"
            }

            if (jugador==0){
                jgam="piedra"
            }
            if (jugador==1){
                jgam="papel"
            }
            if (jugador==2){
                jgam="tijera"
            }
        alert("computador=" + jcom +" vs " + jgam + "=tu")
            
    
    //comparaciones para saber resultados//
            if( computadora == jugador) {
            empate++;
            }
            else if( computadora==0 && jugador==1) {
            gambler++;
            }
            else if( computadora==0 && jugador==2) {
            casa++;
            }
            else if( computadora==1 && jugador==0) {
                casa++;
            }
            else if( computadora==1 && jugador==2) {
                gambler++;
            }
            else if( computadora==2 && jugador==0) {
                gambler++;
            }
            else if( computadora==2 && jugador==1) {
                casa++;
            }
            
 
}

if (casa==gambler){
    alert("Esto es un empate");
}

else if (casa>gambler){
    alert("casa gana");
}
else {
    alert ("jugador gana");
  }
