//var retreiveGlobalData = require('../model/database').retreiveGlobalData;
//let updateGlobalData = require('./../model/database').updateGlobalData;
const db = require('../model/database');
//Control for all the global data that is processed from the individual user data
function recalculateGlobalData(usersData) {
    //Get the actual global data in the database
    console.log("Fetching Global Data");
    //Promise inheret from previous method

    db.getUsersData.then(usersData => {
        //Do all the pertinent changes to global data with the new user data.

        //Add one to the numer of users that have taken the poll (so the averages include the new user)
        var globalProcessed = [];
        var usersDataArray = [];
        usersDataArray = Object.entries(usersData);
        for (let index = 0; index < usersDataArray.length; index++) {
            //Gets the iterated object from the entries array
            tempContainer = usersDataArray[i];
            //Gets the second object from the itrated object ( the second one has the information)
            tempData = tempContainer[1];
            //Inserts the object into the array
            globalProcessed.push({
                ageAvg: tempData.ageAvg,
                bachiller: tempData.bachiller,
                calle: tempData.calle,
                doctorado: tempData.doctorado,
                duque: tempData.petro,
                estrato1: tempData.estrato1,
                estrato2: tempData.estrato2,
                estrato3: tempData.estrato3,
                estrato4: tempData.estrato4,
                estrato5: tempData.estrato5,
                estrato6: tempData.estrato6,
                fajardo: tempData.fajardo,
                female: tempData.female,
                generalQ: tempData.generalQ,
                male: tempData.male,
                petro: tempData.petro,
                postgrado: tempData.postgrado,
                primaria: tempData.primaria,
                profesional: tempData.profesional,
                scholarshipAvg: tempData.scholarshipAvg,
                users: tempData.users,
                vargas: tempData.lleras

            });
        }

        let users = usersData.users + 1;
        //Simple logic
        let ageAvg = (newUserData.age + usersData.ageAvg) / 2;
        //Conditionals


        //Male & female
        let male, female;
        if (newUserData.gender === 'male') {
            male = usersData.male + 1;
            female = usersData.female
        } else {
            female = usersData.female + 1;
            male = usersData.male;
        }

        //Scholarship Level
        let bachiller = usersData.bachiller;
        let postgrado = usersData.postgrado;
        let primaria = usersData.primaria;
        let profesional = usersData.profesional;
        let doctorado = usersData.doctorado;
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
        let estrato1 = usersData.estrato1;
        let estrato2 = usersData.estrato2;
        let estrato3 = usersData.estrato3;
        let estrato4 = usersData.estrato4;
        let estrato5 = usersData.estrato5;
        let estrato6 = usersData.estrato6;

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
        let calle = usersData.calle + newUserData.calle;
        let fajardo = usersData.fajardo + newUserData.fajardo;
        let lleras = usersData.vargas + newUserData.lleras;
        let duque = usersData.duque + newUserData.duque;
        let petro = usersData.petro + newUserData.petro;

        //General Interest Test
        //Calculates the porcentage of correct answers and adds it to the global data
        let generalQ = (newUserData.generalTest + usersData.generalQ) / 2;

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

function processGlobalData(usersData) {
    console.log("Fetching Global Data");
    //Promise inheret from previous method

    var global = {};

    var ageAvg = 0;
    var bachiller = 0;
    var calle = 0;
    var doctorado = 0;
    var duque = 0;
    var estrato1 = 0;
    var estrato2 = 0;
    var estrato3 = 0;
    var estrato4 = 0;
    var estrato5 = 0;
    var estrato6 = 0;
    var fajardo = 0;
    var female = 0;
    var generalQ = 0;
    var interest1 = 0;
    var interest2 = 0;
    var interest3 = 0;
    var male = 0;
    var petro = 0;
    var postgrado = 0;
    var primaria = 0;
    var profesional = 0;
    var scholarshipAvg = 0;
    var users = 0;
    var vargas = 0;




    users = usersData.length;

    for (let i = 0; i < usersData.length; i++) {
        const element = usersData[i];

        //Basic add
        ageAvg = ageAvg + parseInt(element.age);
        //console.log("Age: ", element.ageAvg);
        generalQ = generalQ + parseInt(element.generalTest);

        //Candidates
        calle = calle + parseInt(element.calle);
        duque = duque + parseInt(element.duque);
        fajardo = fajardo + parseInt(element.fajardo);
        vargas = vargas + parseInt(element.lleras);
        petro = petro + parseInt(element.petro);

        //--------------------------
        //Professions
        if (element.profession === 1 || element.profession === 'Primaria') {
            //Primaria
            primaria++;
        }
        if (element.profession === 2 || element.profession === 'Bachiller') {
            //Bachiller
            bachiller++;
        }
        if (element.profession === 3 || element.profession === 'Profesional') {
            //Profesional
            profesional++;
        }
        if (element.profession === 4 || element.profession === 'Postgrado') {
            //PostGrado
            postgrado++;

        }
        if (element.profession === 5 || element.profession === 'Doctorado') {
            //Doctorado
            doctorado++;
        }

        //------------------------
        //Gender

        if (element.gender === 'male' || element.gender === 'Hombre') {
            male++;
        } else {
            female++;
        }

        //--------------------------
        //SocialStat

        if (element.socialStat === 1 || element.socialStat === '1') {
            estrato1++;
        }
        if (element.socialStat === 2 || element.socialStat === '2') {
            estrato2++;
        }
        if (element.socialStat === 3 || element.socialStat === '3') {
            estrato3++;
        }
        if (element.socialStat === 4 || element.socialStat === '4') {
            estrato4++;
        }
        if (element.socialStat === 5 || element.profession === '5') {
            estrato1++;
        }
        if (element.socialStat === 6 || element.profession === '6') {
            estrato6++;
        }

    }
    //Basic add
    ageAvg = (ageAvg / users)
    generalQ = (generalQ / users);

    //Candidates
    calle = (calle / users);
    duque = (duque / users);
    fajardo = (fajardo / users);
    vargas = (vargas / users);
    petro = (petro / users);

    global = {
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
        "vargas": vargas
    }

    //console.log(global);
    return global;
}

//let actualGlobalData = retreiveGlobalData();



module.exports = {
    recalculateGlobalData: recalculateGlobalData,
    processGlobalData: processGlobalData,
}