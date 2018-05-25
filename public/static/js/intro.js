document.onload = introduccion();

function introduccion() {
    document.querySelector("#zona-pregunta").style.display = "none";
    document.querySelector("#si").style.display = "none";
    document.querySelector("#no").style.display = "none";
    document.querySelector("#formulario-demografico").style.display = "none";
    document.querySelector("#continuar-formulario").style.display = "none";
}

document.querySelector('#continuar').addEventListener('click', iniciar);



function iniciar(e) {
    console.log('empezaste el quiz papulardo');
    e.preventDefault();
    // empezarPreguntas();
    empezarDemografico();
}

function empezarDemografico() {
    document.querySelector("#zona-texto-intro").style.display = "none";
    document.querySelector('#continuar').style.display = "none";
    document.querySelector("#formulario-demografico").style.display = "block";
    document.querySelector("#continuar-formulario").style.display = "block";
}

document.querySelector('#continuar-formulario').addEventListener('click', empezarPreguntas);

function empezarPreguntas() {
    document.querySelector("#formulario-demografico").style.display = "none";
    document.querySelector("#continuar-formulario").style.display = "none";
    document.querySelector("#zona-texto-intro").style.display = "none";
    document.querySelector("#zona-pregunta").style.display = "block";
    document.querySelector("#si").style.display = "inline-block";
    document.querySelector("#no").style.display = "inline-block";
    document.querySelector("#continuar").style.display = "none";
}


