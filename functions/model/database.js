//Require de Api
const firebase = require('firebase');
//Call the firebase Key
const configKey = require('./../key');
//console.log(configKey.getKey());
firebase.initializeApp(configKey.getKey());


var recalculateGlobalData = require('../control/global-data').recalculateGlobalData;
//Function to retreive the Candidate Questions Stored in the database
function retreivePoll() {
    console.log('Getting Raw Poll Questions From DataBase');

    //Define the Database Reference to the candidate Questions
    var pollRef = firebase.database().ref('/poll');
    //Define the snap brought from the database reference
    var mySnap = pollRef.once('value');

    //Return the data gotten from the db reference snap
    return mySnap.then(snap => {

        const myVlaues = snap.val();

        //console.log("SnapValues:", myVlaues);

        //TODO: Must Preprocess the data to return an easy to handle json object
        return myVlaues;

    }).catch(reason => {
        //If there is any error
        console.log(reason);
    });
}

function receiveUserData(userData) {

    console.log(userData.name);

    var userDataRef = firebase.database().ref('/userData');

    var newUserDataRef = userDataRef.push();
    newUserDataRef.set({
        name: userData.name,
        age: userData.age,
        socialStat: userData.socialStat,
        profession: userData.profession,
        fajardo: userData.fajardo,
        petro: userData.petro,
        lleras: userData.lleras,
        calle: userData.calle,
        duque: userData.duque,
        generalTest: userData.generalTest,
        interests: userData.interests,
        gender: userData.gender,
    });

    console.log("New User Data Uploaded to database");
    console.log("Calling method recalculateGlobalData()");
    recalculateGlobalData(userData);
}
exports.retreiveGlobalData = function () {
    console.log('Getting Global Data From DataBase');

    //Define the Database Reference to the candidate Questions
    var globalDataRef = firebase.database().ref('/global');
    //Define the snap brought from the database reference
    var mySnap = globalDataRef.once('value');

    //Return the data gotten from the db reference snap
    return mySnap.then(snap => {

        const myVlaues = snap.val();

        //console.log("SnapValues:", myVlaues);
        return myVlaues;

    }).catch(reason => {
        //If there is any error
        console.log(reason);
    });
}

exports.updateGlobalData = function (newGlobalData) {
    //function updateGlobalData(newGlobalData) {

    console.log("Sending Update to server", newGlobalData);

    var dbRef = firebase.database().ref();
    dbRef.child('global/').update(newGlobalData);

    console.log("Global Data Updated");
}

module.exports = {
    retreivePoll: retreivePoll,
    receiveUserData: receiveUserData,
    //updateGlobalData: updateGlobalData
};