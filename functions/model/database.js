//Require de Api
const firebase = require('firebase');
//Call the firebase Key
const configKey = require('./../key');
//console.log(configKey.getKey());
firebase.initializeApp(configKey.getKey());

//Import external functions
var recalculateGlobalData = require('../control/global-data').recalculateGlobalData;
var processGlobalData = require('../control/global-data').processGlobalData;


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

//Function to retreive the General Questions Stored in the database
function retreiveKq() {
    console.log('Getting Raw General Questions From DataBase');

    //Define the Database Reference to the candidate Questions
    var kqRef = firebase.database().ref('/kq');
    //Define the snap brought from the database reference
    var mySnap = kqRef.once('value');

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

//Function that receives the user data sent from the client
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
    //recalculateGlobalData(userData);
    liveGlobalData();
}

function liveGlobalData() {
    var globalDataRef = firebase.database().ref('/userData');

    var mySnap = globalDataRef.once('value');

    //Return the data gotten from the db reference snap
    return mySnap.then(snap => {

        const myVlaues = snap.val();
        var allUsers = [];
        allUsers = Object.entries(myVlaues);
        var userArray = [];

        for (let index = 0; index < allUsers.length; index++) {
            const element = allUsers[index];
            tempUser = element[1];
            //console.log("Age: ", tempUser.age);
            userArray.push({
                age: tempUser.age,
                socialStat: tempUser.socialStat,
                profession: tempUser.profession,
                fajardo: tempUser.fajardo,
                petro: tempUser.petro,
                lleras: tempUser.lleras,
                calle: tempUser.calle,
                duque: tempUser.duque,
                generalTest: tempUser.generalTest,
                gender: tempUser.gender
            })
        }

        updateGlobalData(processGlobalData(userArray));

        //console.log("SnapValues:", userArray);
        return myVlaues;

    }).catch(reason => {
        //If there is any error
        console.log(reason);
    });

}


function retreiveGlobalData() {
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

function updateGlobalData(newGlobalData) {
    //function updateGlobalData(newGlobalData) {

    //console.log("Sending Update to server", newGlobalData);

    var dbRef = firebase.database().ref();
    dbRef.child('global/').update(newGlobalData);

    console.log("Global Data Updated");
}

//Pollyfill method para compatibilidad con sistemas antiguos
Object.entries = function (obj) {
    var ownProps = Object.keys(obj),
        i = ownProps.length,
        resArray = new Array(i); // preallocate the Array
    while (i--)
        resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
};

module.exports = {
    retreivePoll: retreivePoll,
    receiveUserData: receiveUserData,
    retreiveKq: retreiveKq,
    liveGlobalData: liveGlobalData,
    retreiveGlobalData: retreiveGlobalData,
};