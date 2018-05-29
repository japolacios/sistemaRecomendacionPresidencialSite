//ArrayList Donde se guardan las preguntas para recomendacion
var pollQuestionsProcesed = [];
var kQuestionsProcesed = [];
var contador = 0;
let contador2 = 1;

//Vars & Query Selectors
var botonSi = document.querySelector("#si");
var botonNo = document.querySelector("#no");
var botonContinuarFormulario = document.querySelector("#continuar-formulario");
let startkQ = document.getElementById('startkQ');


//User Info
var puntajePetro = 0;
var puntajeFajardo = 0;
var puntajeDuque = 0;
var puntajeVargas = 0;
var puntajeCalle = 0;
var nombre;
var edad;
var estrato;
var estratoData;
var estudio;
var estudioData;
var genero;
var generoData;
//Logic functions
let stage = 1;
let kQintro = true;
let correctas = 0;
let userRawData;
let candidatoGanador;
//Add Event Listeners
botonSi.addEventListener('click', yesClick);
botonNo.addEventListener('click', noClick);
botonContinuarFormulario.addEventListener('click', appendPregunta);
botonContinuarFormulario.addEventListener('click', mostrarInfo);
startkQ.addEventListener('click', startKqForm);

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
                uno: tempData.uno,
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



//Cuando se unde el boton si
function yesClick() {
    sumarPuntaje();
    contador += 1;
    appendPregunta();
    document.getElementById("numero-pregunta").innerHTML = "Pregunta " + contador + " de " + pollQuestionsProcesed.length;
}

//Cuando se unde el boton no
function noClick() {
    restarPuntaje();
    contador += 1;
    // console.log(contador);
    appendPregunta();
    document.getElementById("numero-pregunta").innerHTML = "Pregunta " + contador + " de " + pollQuestionsProcesed.length;
}


//Append preguntas generales
function appendPregunta() {
    if (stage == 1) {
        document.getElementById("numero-pregunta").innerHTML = "Pregunta " + contador + 1 + " de " + pollQuestionsProcesed.length;
        console.log("Question " + contador + "/" + pollQuestionsProcesed.length);
        //Stage 1 for initial data, and poll questions
        document.getElementById('zona-pregunta-cultura-general').style.display = "none";
        if (contador < pollQuestionsProcesed.length) {
            //console.log(pollQuestionsProcesed[contador].pregunta);
            // var p = document.createElement("p");
            var h = document.createTextNode(pollQuestionsProcesed[contador].pregunta);
            document.getElementById("pregunta").innerHTML = "";
            document.getElementById("pregunta").appendChild(h);
        } else {
            //Set second stage, start kQ module, hide poll module
            stage = 2;
            document.getElementById('zona-pregunta').style.display = "none";
            document.getElementById('respuestas').style.display = "none";
        }
    }
    //Stage 2 Knowledge questions
    if (stage == 2) {
        //Intro
        document.getElementById('zona-pregunta-cultura-general').style.display = "block";
        if (kQintro == false) {
            //Render intro to Common Knowledge questions
            if (contador2 < kQuestionsProcesed.length) {
                //console.log(kQuestionsProcesed[contador].pregunta);
                // var p = document.createElement("p");
                var h = document.createTextNode(kQuestionsProcesed[contador2].pregunta);
                document.getElementById("pregunta-cultura-general").innerHTML = "";
                document.getElementById("pregunta-cultura-general").appendChild(h);
                //Answers
                //1

                //console.log(kQuestionsProcesed);
                var ta1 = document.createTextNode(kQuestionsProcesed[contador2].uno);
                document.getElementById("a1").innerHTML = "";
                document.getElementById("a1").appendChild(ta1);
                //2
                var ta2 = document.createTextNode(kQuestionsProcesed[contador2].dos);
                document.getElementById("a2").innerHTML = "";
                document.getElementById("a2").appendChild(ta2);
                //3
                var ta3 = document.createTextNode(kQuestionsProcesed[contador2].tres);
                document.getElementById("a3").innerHTML = "";
                document.getElementById("a3").appendChild(ta3);
                //4
                var ta4 = document.createTextNode(kQuestionsProcesed[contador2].cuatro);
                document.getElementById("a4").innerHTML = "";
                document.getElementById("a4").appendChild(ta4);

            }
        }
    }
}

function validate(origin) {
    //Check that there are questions remaining
    if (contador2 < kQuestionsProcesed.length) {
        if (origin == 1) {
            if (kQuestionsProcesed[contador2].uno == kQuestionsProcesed[contador2].correcta) {
                correctas++;
            }
        }
        if (origin == 2) {
            if (kQuestionsProcesed[contador2].dos == kQuestionsProcesed[contador2].correcta) {
                correctas++;

            }
        }
        if (origin == 3) {
            if (kQuestionsProcesed[contador2].tres == kQuestionsProcesed[contador2].correcta) {
                correctas++;

            }
        }
        if (origin == 4) {
            if (kQuestionsProcesed[contador2].cuatro == kQuestionsProcesed[contador2].correcta) {
                correctas++;
            }
        }
        contador2++;

        //console.log("Correctas", correctas);
        appendPregunta();
    }
    //When the question list finishes
    else {
        //Process and change to results
        fetchRawData();
        $.post("/uploadUserData", userRawData);
        //  console.log("Data sent to the Server", userRawData);
        paintResults();
    }
}


//Function to paint the results
function paintResults() {
    //Hide actual display
    document.getElementById('zona-pregunta-cultura-general').style.display = "none";
    document.getElementById('results').style.display = "block";
    document.getElementById('candidatosSugerido').innerHTML = "<h2>" + candidatoGanador + "</h2>";

    var candidatosPie = c3.generate({
        bindto: '#candidatosPie',
        data: {
            columns: [
                ['Calle', puntajeCalle],
                ['Duque', puntajeDuque],
                ['Fajardo', puntajeFajardo],
                ['Petro', puntajePetro],
                ['Vargas', puntajeVargas]
            ],
            type: 'pie',
            onclick: function (d, i) {
                console.log("onclick", d, i);
            },
            onmouseover: function (d, i) {
                console.log("onmouseover", d, i);
            },
            onmouseout: function (d, i) {
                console.log("onmouseout", d, i);
            }
        }
    });

    var resultadosPie = c3.generate({
        bindto: '#resultadosPie',
        data: {
            columns: [
                ['Correctas', correctas],
                ['Incorrectas', (100 - correctas)]
            ],
            type: 'pie',
            onclick: function (d, i) {
                console.log("onclick", d, i);
            },
            onmouseover: function (d, i) {
                console.log("onmouseover", d, i);
            },
            onmouseout: function (d, i) {
                console.log("onmouseout", d, i);
            }
        }
    });


}

function fetchRawData() {

    let kqResults = (correctas / kQuestionsProcesed.length) * 100;

    if (puntajeFajardo < 0) {
        puntajeFajardo = 0;
    }
    if (puntajeCalle < 0) {
        puntajeCalle = 0;
    }
    if (puntajeDuque < 0) {
        puntajeDuque = 0;
    }
    if (puntajePetro < 0) {
        puntajePetro = 0;
    }
    if (puntajeVargas < 0) {
        puntajeVargas = 0;
    }
    //---------------------------------------------------
    candidatoGanador = "Fajardo";
    let highscore;
    highscore = puntajeFajardo;
    if (puntajeFajardo < puntajeCalle) {
        highscore = puntajeCalle;
    }
    if (highscore < puntajeDuque) {
        highscore = puntajeDuque;
    }
    if (highscore < puntajePetro) {
        highscore = puntajePetro
    }
    if (highscore < puntajeVargas) {
        highscore = puntajeVargas;
    }
    //------
    if (highscore == puntajeCalle) {
        candidatoGanador = "De la Calle";
    }

    if (highscore == puntajeDuque) {
        candidatoGanador = "Duque";
    }

    if (highscore == puntajePetro) {
        candidatoGanador = "Petro";
    }
    if (highscore == puntajeVargas) {
        candidatoGanador = "Vargas";
    }
    if (highscore == puntajeFajardo) {
        candidatoGanador = "Fajardo";
    }


    userRawData = {
        "name": nombre,
        "age": edad,
        "socialStat": estratoData,
        "profession": estudioData,
        "fajardo": puntajeFajardo,
        "petro": puntajePetro,
        "lleras": puntajeVargas,
        "calle": puntajeCalle,
        "duque": puntajeDuque,
        "generalTest": kqResults,
        "interests": "",
        "gender": generoData
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

    // console.log(" petro: " + puntajePetro + " fajardo: " + puntajeFajardo + " duque: " + puntajeDuque + " vargas: " + puntajeVargas + " calle: " + puntajeCalle);
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

    //console.log(" petro: " + puntajePetro + " fajardo: " + puntajeFajardo + " duque: " + puntajeDuque + " vargas: " + puntajeVargas + " calle: " + puntajeCalle);
}


function mostrarInfo() {
    nombre = document.getElementById("nombre").value;
    edad = document.getElementById("edad").value;
    estrato = document.getElementById("estrato");
    estratoData = estrato.options[estrato.selectedIndex].text;
    estudio = document.getElementById("estudio");
    estudioData = estudio.options[estudio.selectedIndex].text;
    genero = document.getElementById("genero");
    generoData = genero.options[genero.selectedIndex].text;

    // console.log("nombre: " + nombre + " edad: " + edad + " estrato: " + estratoData + " estudio: " + estudioData + " genero: " + generoData);
}

function startKqForm() {
    startkQ.style.display = "none";
    document.getElementById('button-list').style.display = "flex";
    kQintro = false;
    console.log("kqIntro = false");
    appendPregunta();
}