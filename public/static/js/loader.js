//ArrayList Donde se guardan las preguntas para recomendacion
var pollQuestionsProcesed = [];
var contador = 0;

var botonSi = document.querySelector("#si");
var botonNo = document.querySelector("#no");
var botonContinuarFormulario = document.querySelector("#continuar-formulario");

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
        // console.log(pollQuestionsProcesed);
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


function undisteSisas() {
    console.log("undiste sisas");
}

function undisteNonas() {
    console.log("undiste nonas");
}

function appendPregunta() {
    console.log("pinte la primera pregunta");

    if (contador <= pollQuestionsProcesed.length - 1) {
        console.log(pollQuestionsProcesed[contador].pregunta);

        var p = document.createElement("p");
        var h = document.createTextNode(pollQuestionsProcesed[contador].pregunta);
        document.getElementById("pregunta").appendChild(h);
        // p.appendChild("<p>" + h + "</p>");
    }
}