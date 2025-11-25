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




//Ciclo FOR



// Generar reporte con DO...WHILE

});
