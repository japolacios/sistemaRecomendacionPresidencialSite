/*var pollQuestionsProcesed = [];
let contador = 0;
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
});

function undistesisas() {
    console.log("undiste sisas");
    contador += 1;
    appendPregunta();
}

function undistenonas() {
    console.log("undiste nonas");
    contador += 1;
    appendPregunta();
}

function appendPregunta() {
    if (contador <= pollQuestionsProcesed.length - 1) {
        document.querySelector(".pregunta").appendChild("<p>" + pollQuestionsProcesed[contador].pregunta + "</p>");
    }
}*/