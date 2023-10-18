alert("¡Bienvenido al 10 Preguntas de cultura general!");
alert("En este juego, responderás a una serie de preguntas. Al final, recibirás una puntuación basada en tus respuestas. ¡Diviértete!");

var nombre = prompt("¿Cómo te llamas?");

if (nombre) {
    alert("Hola, " + nombre + "! Gracias por jugar con nosotros.");
    alert("Ahora, si " + nombre + ", comenzamos con el juego.");
} 

var puntuacion = 0;

var preguntas = [
    {
        pregunta: nombre + ", ¿Cuál es la capital de Francia?",
        opciones: ["Londres", "París", "Madrid", "Berlín"],
        respuestaCorrecta: "París"
    },
    {
        pregunta: nombre + ", ¿Cuántos continentes hay en el mundo?",
        opciones: ["3", "6", "7", "5"],
        respuestaCorrecta: "7"
    },
    {
        pregunta: nombre + ", ¿Cuál es el planeta más grande del sistema solar?",
        opciones: ["Tierra", "Júpiter", "Marte", "Venus"],
        respuestaCorrecta: "Júpiter"
    },
    {
        pregunta: nombre + ", ¿Cuál es el río más largo del mundo?",
        opciones: ["Nilo", "Amazonas", "Misisipi", "Yangtsé"],
        respuestaCorrecta: "Amazonas"
    },
    {
        pregunta: nombre + ", ¿Cuál es el océano más grande?",
        opciones: ["Atlántico", "Pacífico", "Índico", "Ártico"],
        respuestaCorrecta: "Pacífico"
    },
    {
        pregunta: nombre + ", ¿Cuál es el país más poblado del mundo?",
        opciones: ["India", "Estados Unidos", "China", "Rusia"],
        respuestaCorrecta: "China"
    },
  
    {
        pregunta: nombre + ", ¿Cuál es el elemento químico con símbolo 'O'?",
        opciones: ["Oxígeno", "Oro", "Hierro", "Cobre"],
        respuestaCorrecta: "Oxígeno"
    },
    {
        pregunta: nombre + ", ¿En qué año se fundó la Organización de las Naciones Unidas (ONU)?",
        opciones: ["1945", "1955", "1935", "1965"],
        respuestaCorrecta: "1945"
    },
    {
        pregunta: nombre + ", ¿Quién escribió 'Don Quijote de la Mancha'?",
        opciones: ["Miguel de Cervantes", "Gabriel García Márquez", "William Shakespeare", "Leo Tolstoy"],
        respuestaCorrecta: "Miguel de Cervantes"
    },
    {
        pregunta: nombre + ", ¿Cuál es el río que pasa por El Cairo, la capital de Egipto?",
        opciones: ["Nilo", "Amazonas", "Misisipi", "Yangtsé"],
        respuestaCorrecta: "Nilo"
    }
];

for (var i = 0; i < preguntas.length; i++) {
    var respuestaUsuario = prompt(preguntas[i].pregunta + "\nOpciones: " + preguntas[i].opciones.join(", "));

    if (respuestaUsuario === preguntas[i].respuestaCorrecta) {
        puntuacion++;
        alert("¡Correcto!");
    } else {
        alert("Incorrecto. La respuesta correcta es: " + preguntas[i].respuestaCorrecta);
    }
}

alert("Preguntas correctas, " + nombre + ": " + puntuacion + " de " + preguntas.length);