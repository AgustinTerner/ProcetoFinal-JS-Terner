/*REGISTRARSE*/

function registrarse() {
    Swal.fire({
        title: 'REGISTRARSE',
        html: `<input type="text" id="inputNombreRegistrarse" class="swal2-input" placeholder="Nombre">
        <input type="text" id="inputApellidoRegistrarse" class="swal2-input" placeholder="Apellido">
        <input type="text" id="inputUsuarioRegistrarse" class="swal2-input" placeholder="Usuario">
        <input type="password" id="inputContraseñaRegistrarse" class="swal2-input" placeholder="Contraseña">`,
        confirmButtonText: 'Registrarse',
        showConfirmButton: true,
        preConfirm: () => {
            const nombreRegistrarse = Swal.getPopup().querySelector('#inputNombreRegistrarse').value;
            const apellidoRegistrarse = Swal.getPopup().querySelector('#inputApellidoRegistrarse').value;
            const usuarioRegistrarse = Swal.getPopup().querySelector("#inputUsuarioRegistrarse").value;
            const contraseñaRegistrarse = Swal.getPopup().querySelector("#inputContraseñaRegistrarse").value;
            if (!nombreRegistrarse || !apellidoRegistrarse || !usuarioRegistrarse || !contraseñaRegistrarse) {
                Swal.showValidationMessage(`Debe completar todos los casilleros para poder registrarse`);
            }
        }
    }).then((datosR) => {
        if (datosR.isConfirmed) {
            localStorage.setItem("nombre", inputNombreRegistrarse.value);
            localStorage.setItem("apellido", inputApellidoRegistrarse.value);
            localStorage.setItem("usuario", inputUsuarioRegistrarse.value);
            localStorage.setItem("contraseña", inputContraseñaRegistrarse.value);
            Swal.fire({
                icon: 'success',
                title: 'USTED AH SIDO REGISTRADO',
                text: 'Ya puede iniciar sesion'
            })
        }
    })
}

const botonRegistrarse = document.querySelector("#registrarse")
botonRegistrarse.addEventListener("click", registrarse)

/*INICIAR SESION*/

function iniciarSesion() {
    Swal.fire({
        html: `<input type="text" id="inputUsuarioIniciarSesion" class="swal2-input" placeholder="Usuario">
        <input type="password" id="inputContraseñaIniciarSesion" class="swal2-input" placeholder="Contraseña">`,
        confirmButtonText: 'Iniciar Sesion',
        showConfirmButton: true,
        preConfirm: () => {
            const usuarioIniciarSesion = Swal.getPopup().querySelector("#inputUsuarioIniciarSesion").value
            const contraseñaIniciarSesion = Swal.getPopup().querySelector("#inputContraseñaIniciarSesion").value
            if (!usuarioIniciarSesion || !contraseñaIniciarSesion) {
                Swal.showValidationMessage(`Por favor introduzca los datos`);
            }
        }
    }).then((datosIS) => {
        if (datosIS.isConfirmed && inputUsuarioIniciarSesion.value === localStorage.getItem("usuario") && inputContraseñaIniciarSesion.value === localStorage.getItem("contraseña")) {
            window.location = "zapatillas.html";
        }
        else if (datosIS.isConfirmed && inputUsuarioIniciarSesion.value !== localStorage.getItem("usuario") && inputContraseñaIniciarSesion.value !== localStorage.getItem("contraseña")) {
            iniciarSesion();
            Swal.showValidationMessage(`Datos incorrectos`);
        }
    })
}

const botonIniciarSesion = document.querySelector("#iniciarSesion")
botonIniciarSesion.addEventListener("click", iniciarSesion)

/*Eliminar Registro*/

function eliminarRegistro() {
    Swal.fire({
        icon: 'question',
        title: '¿DESEA ELIMINAR REGISTRO?',
        text: 'Se borraran los datos con los que se registro y tendra que registrarse nuevamente',
        confirmButtonText: 'ACEPTAR',
        showConfirmButton: true,
        cancelButtonText: 'CANCELAR',
        showCancelButton: true,
    }).then((eliminar) => {
        if (eliminar.isConfirmed) {
            localStorage.clear();
            Swal.fire({
                icon: 'success',
                title: 'OPERACION EXITOSA',
                text: 'Sus datos se eliminaron',
                confirmButtonText: 'OK',
                showConfirmButton: true
            })
        }
    })
}

const botonEliminarRegistro = document.querySelector("#eliminarRegistro")
botonEliminarRegistro.addEventListener("click", eliminarRegistro)




