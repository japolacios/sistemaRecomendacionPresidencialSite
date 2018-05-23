const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: true }));
app.options('*', cors())

//Import the database modules
//Retreive PollQuestions
var pollQuestions = require('./model/database').retreivePoll;
//Receive Information sent form Client with User Data
var receiveData = require('./model/database').receiveUserData;


exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

let holi = {
    pregunta: "Hola khe ase?",
    miguel: 1,
    peter: 5,
    tumama: 2
}


exports.getDatabase = functions.https.onRequest((request, response) => {
    pollQuestions().then(objectPollQuestions => {
        response.send(objectPollQuestions);
        return objectPollQuestions;
    }).catch(reason => {
        //If there is any error
        console.log(reason);
    });
});

exports.uploadUserData = functions.https.onRequest((request, response) => {
    console.log("Got Post");
    var object = request.body;

    if (object !== null) {
        receiveData(object);
        //Respond with Render
        console.log("User Data Uploaded");
    } else {
        console.log("Got an empty Object");
        response.send("No se pudo Procesar tu informacion");
    }

});

//Cors
app.get('/hola', (request, response) => 
pollQuestions().then(objectPollQuestions => {
    response.send(objectPollQuestions);
    return objectPollQuestions;
}).catch(reason => {
    //If there is any error
    console.log(reason);
})
);