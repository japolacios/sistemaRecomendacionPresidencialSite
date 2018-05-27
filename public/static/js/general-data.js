//Candidatos
var candidatosBar = c3.generate({
    bindto: '#candidatosBar',
    data: {
        columns: [
            ['Calle', document.getElementById("calle").getAttribute('data-value')],
            ['Duque', document.getElementById("duque").getAttribute('data-value')],
            ['Fajardo', document.getElementById("fajardo").getAttribute('data-value')],
            ['Petro', document.getElementById("petro").getAttribute('data-value')],
            ['Vargas', document.getElementById("vargas").getAttribute('data-value')]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.9 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});
var candidatosPie = c3.generate({
    bindto: '#candidatosPie',
    data: { // iris data from R
        columns: [
            ['Calle', document.getElementById("calle").getAttribute('data-value')],
            ['Duque', document.getElementById("duque").getAttribute('data-value')],
            ['Fajardo', document.getElementById("fajardo").getAttribute('data-value')],
            ['Petro', document.getElementById("petro").getAttribute('data-value')],
            ['Vargas', document.getElementById("vargas").getAttribute('data-value')]
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
//Estrato
var estratoBar = c3.generate({
    bindto: '#estratoBar',
    data: {
        columns: [
            ['1', document.getElementById("estrato1").getAttribute('data-value')],
            ['2', document.getElementById("estrato2").getAttribute('data-value')],
            ['3', document.getElementById("estrato3").getAttribute('data-value')],
            ['4', document.getElementById("estrato4").getAttribute('data-value')],
            ['5', document.getElementById("estrato5").getAttribute('data-value')],
            ['6', document.getElementById("estrato6").getAttribute('data-value')]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.9 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});

var estratoPie = c3.generate({
    bindto: '#estratoPie',
    data: { // iris data from R
        columns: [
            ['1', document.getElementById("estrato1").getAttribute('data-value')],
            ['2', document.getElementById("estrato2").getAttribute('data-value')],
            ['3', document.getElementById("estrato3").getAttribute('data-value')],
            ['4', document.getElementById("estrato4").getAttribute('data-value')],
            ['5', document.getElementById("estrato5").getAttribute('data-value')],
            ['6', document.getElementById("estrato6").getAttribute('data-value')]
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

//Educacion
var educacionBar = c3.generate({
    bindto: '#educacionBar',
    data: {
        columns: [
            ['Primaria', document.getElementById("primaria").getAttribute('data-value')],
            ['Bachiller', document.getElementById("bachiller").getAttribute('data-value')],
            ['Profesional', document.getElementById("profesional").getAttribute('data-value')],
            ['Postgrado', document.getElementById("postgrado").getAttribute('data-value')],
            ['Doctorado', document.getElementById("doctorado").getAttribute('data-value')]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.9 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});

var educacionPie = c3.generate({
    bindto: '#educacionPie',
    data: { // iris data from R
        columns: [
            ['Primaria', document.getElementById("primaria").getAttribute('data-value')],
            ['Bachiller', document.getElementById("bachiller").getAttribute('data-value')],
            ['Profesional', document.getElementById("profesional").getAttribute('data-value')],
            ['Postgrado', document.getElementById("postgrado").getAttribute('data-value')],
            ['Doctorado', document.getElementById("doctorado").getAttribute('data-value')]
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

//Genero
var generoPie = c3.generate({
    bindto: '#generoPie',
    data: { // iris data from R
        columns: [
            ['Hombres', document.getElementById("male").getAttribute('data-value')],
            ['Mujeres', document.getElementById("female").getAttribute('data-value')]
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