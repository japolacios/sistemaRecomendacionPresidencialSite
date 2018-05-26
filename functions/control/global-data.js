//var retreiveGlobalData = require('../model/database').retreiveGlobalData;
//let updateGlobalData = require('./../model/database').updateGlobalData;
const db = require('../model/database');
//Control for all the global data that is processed from the individual user data
function recalculateGlobalData(newUserData) {
    //Get the actual global data in the database
    console.log("Fetching Global Data");
    //Promise inheret from previous method

    db.retreiveGlobalData().then(actualGlobalData => {
        //Do all the pertinent changes to global data with the new user data.

        //Add one to the numer of users that have taken the poll (so the averages include the new user)
        let users = actualGlobalData.users + 1;

        //Simple logic
        let ageAvg = (newUserData.age + actualGlobalData.ageAvg) / 2;
        //Conditionals


        //Male & female
        let male, female;
        if (newUserData.gender === 'male') {
            male = actualGlobalData.male + 1;
            female = actualGlobalData.female
        } else {
            female = actualGlobalData.female + 1;
            male = actualGlobalData.male;
        }

        //Scholarship Level
        let bachiller = actualGlobalData.bachiller;
        let postgrado = actualGlobalData.postgrado;
        let primaria = actualGlobalData.primaria;
        let profesional = actualGlobalData.profesional;
        let doctorado = actualGlobalData.doctorado;
        if (newUserData.profession === 1) {
            //Primaria
            primaria++;
        }
        if (newUserData.profession === 2) {
            //Bachiller
            bachiller++;
        }
        if (newUserData.profession === 3) {
            //Profesional
            profesional++;
        }
        if (newUserData.profession === 4) {
            //PostGrado
            postgrado++;

        }
        if (newUserData.profession === 5) {
            //Doctorado
            doctorado++;
        }

        //average
        let scholarshipAvg;
        if (primaria <= bachiller) {
            scholarshipAvg = "Bachiller";
        } else {
            scholarshipAvg = "Primaria";
        }
        if (bachiller <= profesional) {
            scholarshipAvg = "Profesional";
        }
        if (profesional <= postgrado) {
            scholarshipAvg = "Postgrado";
        }
        if (postgrado <= doctorado) {
            scholarshipAvg = "Doctorado";
        }

        //Social Status Levels
        let estrato1 = actualGlobalData.estrato1;
        let estrato2 = actualGlobalData.estrato2;
        let estrato3 = actualGlobalData.estrato3;
        let estrato4 = actualGlobalData.estrato4;
        let estrato5 = actualGlobalData.estrato5;
        let estrato6 = actualGlobalData.estrato6;

        if (newUserData.socialStat === 1) {
            estrato1++;
        }
        if (newUserData.socialStat === 2) {
            estrato2++;
        }
        if (newUserData.socialStat === 3) {
            estrato3++;
        }
        if (newUserData.socialStat === 4) {
            estrato4++;
        }
        if (newUserData.socialStat === 5) {
            estrato1++;
        }
        if (newUserData.socialStat === 6) {
            estrato6++;
        }

        //Candidate Stats
        let calle = actualGlobalData.calle + newUserData.calle;
        let fajardo = actualGlobalData.fajardo + newUserData.fajardo;
        let lleras = actualGlobalData.vargas + newUserData.lleras;
        let duque = actualGlobalData.duque + newUserData.duque;
        let petro = actualGlobalData.petro + newUserData.petro;

        //General Interest Test
        //Calculates the porcentage of correct answers and adds it to the global data
        let generalQ = (newUserData.generalTest + actualGlobalData.generalQ) / 2;

        let newGlobalData = {
            "ageAvg": ageAvg,
            "bachiller": bachiller,
            "calle": calle,
            "doctorado": doctorado,
            "duque": petro,
            "estrato1": estrato1,
            "estrato2": estrato2,
            "estrato3": estrato3,
            "estrato4": estrato4,
            "estrato5": estrato5,
            "estrato6": estrato6,
            "fajardo": fajardo,
            "female": female,
            "generalQ": generalQ,
            "interest1": "Hola1",
            "interest2": "hola2",
            "interest3": "hola3",
            "male": male,
            "petro": petro,
            "postgrado": postgrado,
            "primaria": primaria,
            "profesional": profesional,
            "scholarshipAvg": scholarshipAvg,
            "users": users,
            "vargas": lleras
        }

        console.log("Calling the update Method");
        //updateGlobalData(newGlobalData);
        db.updateGlobalData(newGlobalData);
        return console.log("Success");

    }).catch(reason => {
        console.log(reason);
    })
}


//let actualGlobalData = retreiveGlobalData();



module.exports = {
    recalculateGlobalData: recalculateGlobalData
}