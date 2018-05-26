//Import and set up node libs & server
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const engines = require('consolidate');
const bodyParser = require('body-parser');
//Set express as app
const app = express();

//Set engine to run templates
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

//Set public directory
app.use(express.static('public'));

//Define body-parser usage
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//Enable Cors on server
app.use(cors({
    origin: true
}));
app.options('*', cors())

//Set app as a function for https
exports.app = functions.https.onRequest(app);





//-----------------------------------------------------------------------
//Import the database modules

//Information Retreiving
//----------------------------
//Retreive PollQuestions
var pollQuestions = require('./model/database').retreivePoll;
//Retreive KnowledgeQuestions
var kQuestions = require('./model/database').retreiveKq;
//Retreive Live Global Data
var liveGlobalData = require('./model/database').liveGlobalData;
const db = require('./model/database');
//Information Receiving
//----------------------------
//Receive Information sent form Client with User Data
var receiveData = require('./model/database').receiveUserData;


exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

//Http method to respond the PollQuestions
exports.getDatabase = functions.https.onRequest((request, response) => {
    pollQuestions().then(objectPollQuestions => {
        response.send(objectPollQuestions);
        return objectPollQuestions;
    }).catch(reason => {
        //If there is any error
        console.log(reason);
    });
});
//Http method to respond the knowledgeQuestions
exports.getKq = functions.https.onRequest((request, response) => {
    kQuestions().then(objectKQuestions => {
        response.send(objectKQuestions);
        return objectKQuestions;
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
        response.send("Data Succesfully Submited");
    } else {
        console.log("Got an empty Object");
        response.send("No se pudo Procesar tu informacion");
    }

});


app.get('/resumen', function (request, response) {
    liveGlobalData().then(theData => {
        response.render('summary', {
            theData
        });
    });

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