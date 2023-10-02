
var arrayRespuestas = [];
async function cargarRespuestas() {
    console.log('Cargando las respuestas de un archivo local');
    const response = await fetch("./respuestas.json");
    let archivo = await response.json();
    arrayRespuestas = archivo.respuestas;
}

cargarRespuestas();

function corregir() {
    let cantidadRespuestasCorrectas = 0;
    
    for (let respuestaIndex in arrayRespuestas){
        let respuestaRegister = arrayRespuestas[respuestaIndex];
        let respuesta = document.getElementById(respuestaRegister['respuestaId']);
        if (respuesta.value == respuestaRegister['respuestaCorrecta']) {
            cantidadRespuestasCorrectas++;
        }
    }
    
    let nota = document.getElementById("nota");
    nota.innerText = cantidadRespuestasCorrectas;

    let resultados = {final : cantidadRespuestasCorrectas};
    let resultadosJson = JSON.stringify(resultados);
    window.localStorage.setItem("correccion", resultadosJson);

    if( cantidadRespuestasCorrectas <= 2){
        perdisteAlert();
    } else {
        ganasteAlert();
    }
}

let correccionValorJson = window.localStorage.getItem("correccion");
if (correccionValorJson) {
    let correccionValorParsed = JSON.parse(correccionValorJson);
    let correccionValor = correccionValorParsed.final;
    document.getElementById("nota").innerText = correccionValor;

}

function reiniciar() {
    for (let respuestaIndex in arrayRespuestas){
        let respuestaRegister = arrayRespuestas[respuestaIndex];
        let respuesta = document.getElementById(respuestaRegister['respuestaId']);
        respuesta.value = "";
    }
    
    document.getElementById("nota")
    nota.innerText = "0";
}


function perdisteAlert(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Intentalo nuevamente!',
           });
}

function ganasteAlert(){
    Swal.fire(
        'Buen trabajo!',
        'Continúa en el Nivel 2!',
        'success'
      )      
}