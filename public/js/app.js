//DOM
// Creamos las constantes de los botones y a los contenedores
const btn_agregar = document.getElementById('btn_agregar');
const btn_reporte = document.getElementById('btn_reporte');
const txt_tabla = document.getElementById('txt_tabla');
const txt_alerta = document.getElementById('txt_alerta');
const txt_reporte = document.getElementById('txt_reporte');

let estudiantes = [];
//el evento click para el boton agregar 
btn_agregar.addEventListener('click', function(event){
    
//Capturamos los datos
    let nombre = document.getElementById('txt_nombre').value;
    let edad = document.getElementById('txt_edad').value;
    let nota = parseFloat(document.getElementById('txt_nota').value);
    
//limpiamos los mesajes anteriores
    txt_alerta.innerHTML = '';
    txt_reporte.innerHTML = '';

//Validaciones
if(nombre === '' || edad === '' || nota === ''){
        txt_alerta.innerHTML = '<div class="alert alert-danger">Todos los campos son obligatorios</div>';
        return;
    }

    if(nota < 0 || nota > 20){
        txt_alerta.innerHTML = '<div class="alert alert-warning">La nota debe estar entre 0 y 20</div>';
        return;
    }

    // Agregar al array
    estudiantes.push({
        nombre: nombre,
        edad: edad,
        nota: nota
    });

    // Limpiar campos
    document.getElementById('txt_nombre').value = '';
    document.getElementById('txt_edad').value = '';
    document.getElementById('txt_nota').value = '';

    txt_alerta.innerHTML = '<div class="alert alert-success">Estudiante agregado correctamente</div>';

    actualizarTabla();
    calcularEstadisticas();
});



//Ciclo WHILE
function actualizarTabla(){
    txt_tabla.innerHTML = '';

    let i = 0;
    while(i < estudiantes.length){
        let est = estudiantes[i];
        let estado = '';

        if(est.nota >= 14){
            estado = '<span class="badge bg-success">Aprobado</span>';
        } else {
            estado = '<span class="badge bg-danger">Reprobado</span>';
        }

        txt_tabla.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${est.nombre}</td>
                <td>${est.edad}</td>
                <td>${est.nota}</td>
                <td>${estado}</td>
            </tr>
        `;

        i++;
    }
}

//Ciclo FOR
function calcularEstadisticas(){
    let suma = 0;
    let aprobados = 0;
    let reprobados = 0;

    for(let i = 0; i < estudiantes.length; i++){
        suma += estudiantes[i].nota;

        if(estudiantes[i].nota >= 14){
            aprobados++;
        } else {
            reprobados++;
        }
    }

    let promedio = estudiantes.length > 0 ? (suma / estudiantes.length).toFixed(2) : 0;

    document.getElementById('txt_total').innerHTML = estudiantes.length;
    document.getElementById('txt_promedio').innerHTML = promedio;
    document.getElementById('txt_aprobados').innerHTML = aprobados;
    document.getElementById('txt_reprobados').innerHTML = reprobados;
}




// Generar reporte con DO...WHILE

});
