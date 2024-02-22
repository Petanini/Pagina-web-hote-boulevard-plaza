//Acciones 
document.getElementById("btn_registrarse").addEventListener("click", registrarse)
document.getElementById("btn_iniciar_sesion").addEventListener("click", iniciar)
document.getElementById("form_log").addEventListener("submit", credenciales)
window.addEventListener("resize", ancho_pagina)

//Variables de cada clase
var formulario_login = document.querySelector(".formulario_login")
var formulario_registrarse = document.querySelector(".formulario_registrarse")
var contenedor_login_registrarse = document.querySelector(".contenedor_login-registrarse")
var caja_login = document.querySelector(".caja-login")
var caja_registrarse = document.querySelector(".caja-registrarse")

function ancho_pagina(){
    if (window.innerWidth > 850){
        caja_login.style.display = "block";
        caja_registrarse.style.display = "block";
    }
    else 
    {
        caja_registrarse.style.display = "block";
        caja_registrarse.style.opacity = "1";
        caja_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_registrarse.style.display = "none";
        contenedor_login_registrarse.style.left = "0";
    }
}

ancho_pagina();

function registrarse(){
    if (window.innerWidth > 850){ //si el ancho de la pantalla es mayor a 850px
        formulario_registrarse.style.display = "block"; //pone el formulario en bloque
        contenedor_login_registrarse.style.left = "410px"; //mueve el contenedor
        formulario_login.style.display = "none"; // esconde el formulario
        caja_registrarse.style.opacity = "0";  // esconde la caja de texto
        caja_login.style.opacity = "1"; // hace aparecer el texto
    }
    else
    {
        formulario_registrarse.style.display = "block"; //pone el formulario en bloque
        contenedor_login_registrarse.style.left = "0px"; //no mueve el contenedor
        formulario_login.style.display = "none"; // elimina el formulario
        caja_registrarse.style.display = "none";  // elimina la caja de texto
        caja_login.style.display = "block"; // pone en bloque la caja login
        caja_login.style.opacity = "1"; // hace aparecer el texto
    }
}

function iniciar(){
    if (window.innerWidth > 850){
        formulario_registrarse.style.display = "none"; //elimina el formulario
        contenedor_login_registrarse.style.left = "10px"; // mueve el contenedor
        formulario_login.style.display = "block"; // pone el formulario en bloque 
        caja_registrarse.style.opacity = "1"; //hace aparecer el texto
        caja_login.style.opacity = "0"; // hace desaparecer el texto
    }
    else 
    {
        formulario_registrarse.style.display = "none"; //elimina el formulario
        contenedor_login_registrarse.style.left = "0px"; //no mueve el contenedor
        formulario_login.style.display = "block"; // pone el formulario en bloque 
        caja_registrarse.style.display = "block"; //pone la caja en bloque
        caja_login.style.display = "none"; // elimina la caja de texto
    }

}

// function credenciales(evento){
//     evento.preventDefault(); //evita que la pagina se recargue al enviar el formulario
    
//     //variables de credenciales
//     var correo = document.getElementById("correo").value;
//     var contra = document.getElementById("contra").value;

//     if(correo === "piter" && contra === "123"){ //credenciales
//         window.location.href = "page_admins.html"; //redireccón a otra pagina
//     } 
//     else
//     {
//     alert("Correo o contraseña incorrectos")//mensaje de credenciales incorrectas
//     }
// }


//Esta funcion es para generar un reclamo
function generarReclamo(){
    var nombre = document.getElementById("nombres").value;
    var apellido = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var mensaje = document.getElementById("mensaje").value;

    if(nombre === "" || apellido === "" || correo === "" || telefono === "" || mensaje === ""){
        Swal.fire({
            icon: "error",
            title: "Alerta!",
            text: "Todos los campos son obligatorios!",
            confirmButtonColor: "#48a04b"
          });
    }
    else
    {
        Swal.fire({
            title: "Tu reclamo se ha generado correctamente!",
            text: "su numero es #1234556!",
            icon: "success",
            confirmButtonColor: "#48a04b"
          });
    }
}

