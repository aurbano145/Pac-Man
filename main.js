var main = main || {};
main = {
    init: function() {
        let square = document.getElementById("square");

        var randomize = Math.round(Math.random());

        // Crear array unidimensional
        var place = new Array(2);

        // Crear array bidimensional a partir del array unidimensional
        place[0] = new Array(10);
        place[1] = new Array(10);

        var n = 0;

        // Hacer loop para asignar un número (0 o 1) a cada espacio
        for(var i = 0; i < 11; i++) {
            for(var j = 0; j < 11; j++) {
                place[i][j] = n++;
            }
        }

        // Loop para recorrer el array bidimensional y dibujarlo en el HTML
        for(var i = 0; i < 11; i++) {
            for(var j = 0; j < 11; j++) {
                document.write(place[i][j]);
            }
            document.write("<br>");
        }
    }    
}

main.init();