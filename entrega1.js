let bienvenida = confirm("Bienvenid@ a Music Master, entrenamiento para músicos. Regístrate para comenzar. Si ya tienes usuario pulsa cancelar");
if (bienvenida == true) {
    let nombre = prompt("¿Cuál es tu nombre?");
    let apellido = prompt("¿Cuál es tu apellido?");
    prompt("Hola " + nombre + " " + apellido + ", ¿qué instrumento tocás? ");
    let estudio = confirm("¿Estudiás música actualmente en una institución?");
    let institucion;
    if (estudio ==true) { 
        institucion = prompt("¿en cuál?");
    }
    let anos = prompt("¿Hace cúantos años que estudiás música?");

    const  listaPreguntas1= [
        "¿Cuántos tiempos dura una redonda?", 
        "¿Cuántos tiempos dura una negra?",
        "¿Cuántos cuerdas tiene una guitarra?",
        "¿Cuántos tiempos suman 2 corcheas?",
        "¿Cuántos tiempos suman 4 negras?",
    ];
    
    const  listaPreguntas2= [
        "¿Cuántos tiempos duran 4 semicorcheas?", 
        "¿Cuantos tiempos tiene un compás con 6 corcheas?",
        "¿Cuántas notas tiene la escala de Do mayor?",
        "¿Cuantas corcheas entran en 4 tiempos?",
        "¿Cuantos tiempos tiene un compás con 8 semicorcheas?",
    ];
    let respuestas;
    if (anos <=1) {
        mostrarNivel(1);
        respuestas = mostrarPreguntas(listaPreguntas1);
    }
    else if (anos <=2) { 
        mostrarNivel(2);
        respuestas = mostrarPreguntas(listaPreguntas2);
    }
    console.log(respuestas);
   

}
function mostrarNivel(nivel) {
    confirm("Excelente. Comenzarás en el Nivel " + nivel);
}

function mostrarPreguntas(listado){
    let respuestas = [];
    for(let i=0; i<=4; i++){
        let respuesta = prompt(listado[i]);
        respuestas.push(respuesta);
    }
    return respuestas;
}


