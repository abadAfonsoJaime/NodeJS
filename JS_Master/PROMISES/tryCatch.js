/* try() -->  delimita un bloque de instrucciones que 
hay que comprobar, y en el bloque catch() se prevé una
respuesta en caso de que se produzca un error en el 
bloque try(). El bloque try(), siempre presente por 
definición, puede tener muchas instrucciones. Para el
procesamiento de las excepciones, puede haber varios
catch consecutivos (o incluso ninguno). También es 
posible prever, en último lugar después de la serie 
catch(), un último bloque llamado finally() y en el que
se integrarán instrucciones sistemáticamente ejecutadas
antes de la ejecución de las siguientes instrucciones
del programa */

function comprobarDia( numeroDia ) {

    numeroDia = numeroDia -1;

    let tablaDias = new Array(
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo"
    );

    if (tablaDias[numeroDia] != null) 

        return tablaDias[numeroDia];       
        else {

            return "Error en el número del día";
        }    
}

const dayNumber = 8;
try {
    alert( comprobarDia(dayNumber) );
    alert( verificacionDia() );
}
catch(error) { 
    alert("No existe la función verificaicionDia");
}

/* Una promesa representa una operación que todavía 
no se ha completado pero que se espera en el futuro */
document.write("Arranque de los dos coches");
document.write("Porsche 911 vs Ferrari Testarrsa<br/>");

let miPromesa = new Promise( function(resolve, reject) {
    setTimeout(
        function() {
            if (Math.random() > 0.5) {
                resolve(
                    alert("El Porsche 911 es el más rápido")
                );
            }
            else {
                // uncaught exception
                reject("Ferrari Testarrosa es el más rápido");
            }
        },
        5000
    );
});
document.write("Control del radar tras 5 segundos");