Proyecto Registro de Estudiantes – Grupo 2


En este proyecto se desarrolló un sistema de registro de estudiantes con HTML, Bootstrap 5 y JavaScript, implementando la lógica completa mediante ciclos IF, WHILE, FOR y DO...WHILE, 
además de una interfaz ordenada y totalmente dinámica. El objetivo fue mostrar dominio del manejo del DOM, validaciones y generación de contenido con JS.

Primero, se creó el archivo index.html, donde se construyó toda la estructura visual del proyecto. Se usaron contenedores container, filas row y columnas col-md de Bootstrap 5 para organizar el formulario, los indicadores de estadísticas (total, promedio, aprobados y reprobados) y la tabla donde se muestra el registro de estudiantes. También se añadió el botón Agregar y el botón Generar Reporte,
que activan toda la lógica desarrollada en JavaScript.

En el archivo app.js se programó la funcionalidad principal. Se capturaron los elementos del DOM y se validó el ingreso de datos mediante condicionales if, 
mostrando alertas de Bootstrap cuando los campos estaban vacíos o cuando la nota ingresada no cumplía el rango permitido. Luego se agregó al estudiante al arreglo principal y se construyó la tabla dinámicamente usando un ciclo while, mostrando para cada estudiante su estado como aprobado o reprobado. Además, se implementó un ciclo for para calcular estadísticas como el total, el promedio general, la cantidad de aprobados y la cantidad de reprobados. Para el reporte final, se utilizó un ciclo do...while que calcula el promedio total y clasifica el rendimiento global como alto, regular o bajo.

Y como paso final, se definió el archivo style.css si se requiere para personalizar, aunque el diseño se basa principalmente en Bootstrap. Se mantuvo un enfoque limpio,
ordenado y totalmente funcional, donde cada parte del proyecto refleja el uso correcto de ciclos repetitivos, manipulación del DOM y generación dinámica de contenido. 
El resultado fue una aplicación sencilla pero completa, ideal para reforzar la lógica de programación con JavaScript.

<img width="1920" height="691" alt="{7FA9C639-EDCB-47E6-8978-7AF115B59FF1}" src="https://github.com/user-attachments/assets/fe4618be-7db6-4e74-959a-33fb82913996" />
<img width="1058" height="503" alt="{5E062A6C-C331-4917-8185-6143FECDE4DB}" src="https://github.com/user-attachments/assets/8725f069-83d1-4311-bb4d-f05f02b69099" />
<img width="1019" height="511" alt="{34D2810F-8762-4E96-B538-D4B888A9607B}" src="https://github.com/user-attachments/assets/786f3bb9-4e00-4f4f-b09b-e8739e105b5d" />



