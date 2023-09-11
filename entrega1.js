
function corregir() {
    let cantidadRespuestasCorrectas = 0;
        let respuesta1 = document.getElementById("respuesta1")
    if (respuesta1.value == "4") {
        cantidadRespuestasCorrectas++;
    }
    let respuesta2 = document.getElementById("respuesta2")
    if (respuesta2.value == "1") {
        cantidadRespuestasCorrectas++;
    }
    let respuesta3 = document.getElementById("respuesta3")
    if (respuesta3.value == "1") {
        cantidadRespuestasCorrectas++;
    }
    let respuesta4 = document.getElementById("respuesta4")
    if (respuesta4.value == "8") {
        cantidadRespuestasCorrectas++;
    }
    let respuesta5 = document.getElementById("respuesta5")
    if (respuesta5.value == "3") {
        cantidadRespuestasCorrectas++;
    }
    
    let nota = document.getElementById("nota");
    nota.innerText = cantidadRespuestasCorrectas;

    let resultados = {final : cantidadRespuestasCorrectas};
    let resultadosJson = JSON.stringify(resultados);
     window.localStorage.setItem("correccion", resultadosJson);
   

}

let correccionValorJson = window.localStorage.getItem("correccion");
if (correccionValorJson) {
    let correccionValorParsed = JSON.parse(correccionValorJson);
    let correccionValor = correccionValorParsed.final;
    document.getElementById("nota").innerText = correccionValor;

}

function reiniciar() {
    document.getElementById("respuesta1").value = "";
    document.getElementById("respuesta2").value = "";
    document.getElementById("respuesta3").value = "";
    document.getElementById("respuesta4").value = "";
    document.getElementById("respuesta5").value = "";
    document.getElementById("nota")
    nota.innerText = "0";


}


