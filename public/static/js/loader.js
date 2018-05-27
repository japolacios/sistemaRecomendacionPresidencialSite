//ArrayList Donde se guardan las preguntas para recomendacion
var pollQuestionsProcesed = [];
var kQuestionsProcesed = [];
var contador = 1;

var botonSi = document.querySelector("#si");
var botonNo = document.querySelector("#no");
var botonContinuarFormulario = document.querySelector("#continuar-formulario");
var puntajePetro = 0;
var puntajeFajardo = 0;
var puntajeDuque = 0;
var puntajeVargas = 0;
var puntajeCalle = 0;



$(document).ready(function () {
    //Gets the RAW JSON
    $.getJSON('https://recomendacionpresidencial.firebaseapp.com/getDatabase', function (data) {

        var pollQuestionData = [];
        //Gets the key entries from the raw json
        pollQuestionData = Object.entries(data);

        //console.log(pollQuestionData);
        for (var i = pollQuestionData.length - 1; i >= 0; i--) {
            //Gets the iterated object from the entries array
            tempContainer = pollQuestionData[i];
            //Gets the second object from the itrated object ( the second one has the information)
            tempData = tempContainer[1];
            //Inserts the object into the array
            pollQuestionsProcesed.push({
                pregunta: tempData.pregunta,
                vargas: tempData.vargas,
                calle: tempData.calle,
                fajardo: tempData.fajardo,
                petro: tempData.petro,
                duque: tempData.duque,
            });
        }
        console.log(pollQuestionsProcesed);
        //addToDom();
    });
    $.getJSON('https://recomendacionpresidencial.firebaseapp.com/getKq', function (data) {

        var KQuestionData = [];
        //Gets the key entries from the raw json
        KQuestionData = Object.entries(data);

        //console.log(KQuestionData);
        for (var i = KQuestionData.length - 1; i >= 0; i--) {
            //Gets the iterated object from the entries array
            tempContainer = KQuestionData[i];
            //Gets the second object from the itrated object ( the second one has the information)
            tempData = tempContainer[1];
            //Inserts the object into the array
            kQuestionsProcesed.push({
                pregunta: tempData.pregunta,
                uno: tempData.vargas,
                dos: tempData.dos,
                tres: tempData.tres,
                cuatro: tempData.cuatro,
                correcta: tempData.correcta,
            });
        }
        //console.log(kQuestionsProcesed);
        //addToDom();
    });

});


//Method that add the poll question arrays to the dom (Solo es a modo de ejemplo pues ya teniendo el array de preguntas deben aplicar su propia logica)
addToDom = function () {
    console.log("Callme");
    console.log("Array length: ", pollQuestionsProcesed.length);
    for (var i = pollQuestionsProcesed.length - 1; i >= 0; i--) {

        console.log("Position: ", i);
        var pregunta = pollQuestionsProcesed[i].pregunta;
        var vargas = pollQuestionsProcesed[i].vargas;
        var calle = pollQuestionsProcesed[i].calle;
        var fajardo = pollQuestionsProcesed[i].fajardo;
        var petro = pollQuestionsProcesed[i].petro;
        var duque = pollQuestionsProcesed[i].duque;
        var tempHtml = "<ul><li>Pregunta: " + pregunta + "</li><li>vargas: " + vargas + "</li><li>calle: " + calle + "</li><li>Fajardo: " + fajardo + "</li><li>Petro: " + petro + "</li><li>Duque: " + s + "</li></ul>"

        console.log(tempHtml);
        //El innerHtml remplaza lo que tenga previamente el elemento (body para este caso), por ende solo veran la lista de los ultimos del ciclo. Para hacer buen uso de eso les recomiendo utilizar los appends y no innerHtml, pero ya es el gusto de cada quien.
        document.getElementById("domBody").innerHTML = tempHtml;
    }
}

botonSi.addEventListener('click', undisteSisas);
botonNo.addEventListener('click', undisteNonas);
botonContinuarFormulario.addEventListener('click', appendPregunta);
botonContinuarFormulario.addEventListener('click', mostrarInfo);

//Cuando se unde el boton si
function undisteSisas() {
    console.log("undiste sisas");
    contador += 1;
    appendPregunta();
    sumarPuntaje();
    document.getElementById("numero-pregunta").innerHTML = "Pregunta " + contador + " de " + pollQuestionsProcesed.length;
}

//Cuando se unde el boton no
function undisteNonas() {
    console.log("undiste nonas");
    contador += 1;
    // console.log(contador);
    appendPregunta();
    restarPuntaje();
    document.getElementById("numero-pregunta").innerHTML = "Pregunta " + contador + " de " + pollQuestionsProcesed.length;
}


//Append preguntas generales
function appendPregunta() {
    document.getElementById("numero-pregunta").innerHTML = "Pregunta " + contador + " de " + pollQuestionsProcesed.length;
    console.log("pinte la primera pregunta");

    if (contador <= pollQuestionsProcesed.length - 1) {
        console.log(pollQuestionsProcesed[contador].pregunta);
        var p = document.createElement("p");
        var h = document.createTextNode(pollQuestionsProcesed[contador].pregunta);
        document.getElementById("pregunta").innerHTML = "";
        document.getElementById("pregunta").appendChild(h);
    }
}

function sumarPuntaje() {
    var petroJson = pollQuestionsProcesed[contador].petro;
    var fajardoJson = pollQuestionsProcesed[contador].fajardo;
    var duqueJson = pollQuestionsProcesed[contador].duque;
    var vargasJson = pollQuestionsProcesed[contador].vargas;
    var calleJson = pollQuestionsProcesed[contador].calle;

    puntajePetro = puntajePetro += petroJson;
    puntajeFajardo = puntajeFajardo += fajardoJson;
    puntajeDuque = puntajeDuque += duqueJson;
    puntajeVargas = puntajeVargas += vargasJson;
    puntajeCalle = puntajeCalle += calleJson;

    console.log(" petro: " + puntajePetro + " fajardo: " + puntajeFajardo + " duque: " + puntajeDuque + " vargas: " + puntajeVargas + " calle: " + puntajeCalle);
}

function restarPuntaje() {
    var petroJson = pollQuestionsProcesed[contador].petro;
    var fajardoJson = pollQuestionsProcesed[contador].fajardo;
    var duqueJson = pollQuestionsProcesed[contador].duque;
    var vargasJson = pollQuestionsProcesed[contador].vargas;
    var calleJson = pollQuestionsProcesed[contador].calle;

    puntajePetro = puntajePetro -= petroJson;
    puntajeFajardo = puntajeFajardo -= fajardoJson;
    puntajeDuque = puntajeDuque -= duqueJson;
    puntajeVargas = puntajeVargas -= vargasJson;
    puntajeCalle = puntajeCalle -= calleJson;

    console.log(" petro: " + puntajePetro + " fajardo: " + puntajeFajardo + " duque: " + puntajeDuque + " vargas: " + puntajeVargas + " calle: " + puntajeCalle);
}


function mostrarInfo() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var estrato = document.getElementById("estrato");
    var estratoData = estrato.options[estrato.selectedIndex].text;
    var estudio = document.getElementById("estudio");
    var estudioData = estudio.options[estudio.selectedIndex].text;
    var genero = document.getElementById("genero");
    var generoData = genero.options[genero.selectedIndex].text;

    console.log("nombre: " + nombre + " edad: " + edad + " estrato: " + estratoData + " estudio: " + estudioData + " genero: " + generoData);
}



