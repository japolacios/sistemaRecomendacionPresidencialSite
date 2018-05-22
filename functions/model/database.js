//Require de Api
const firebase = require('firebase');
//Call the firebase Key
const configKey = require('./../key');
//console.log(configKey.getKey());
firebase.initializeApp(configKey.getKey());

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

        console.log("SnapValues:", myVlaues);

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
        interests: userData.interests
    });

    console.log("New User Data Uploaded to database");
    /*
    "user":{
        "name":"name",
        "age":1,
        "socialStat":1,
        "profession":"profesion",
        "fajardo":5,
        "petro":"2",
        "lleras":1,
        "calle":1,
        "duque":1,
        "generalTest":1,
        "interests":"algunInteres"
        }
    }
    */



}

module.exports = {
    retreivePoll: retreivePoll,
    receiveUserData: receiveUserData
};