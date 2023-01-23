var arrZapatillas;

fetch('zapatillas.json')
    .then((response) => response.json())
    .then((data) => {
        arrZapatillas = data;

        const contenedorPrincipal = document.querySelector("#contenedorPrincipal")

        for (let i = 0; i < arrZapatillas.length; i++) {
            const contenedorProducto = document.createElement('div')
            contenedorProducto.className = 'contenedorProducto'
            contenedorProducto.innerHTML = `
                <h2 class="nombreProducto">${arrZapatillas[i].name}</h2>
                <img class="imgProducto"src="${arrZapatillas[i].img}">
                <h3 class="precioProducto">Precio: $${arrZapatillas[i].price}</h3>
                <h4 class="ofertaProducto">NO HAY OFERTA DISPONIBLE</h4>
                <button id="botonComprar">COMPRAR</button>
                `

            if (arrZapatillas[i].ofert === true) {
                if (arrZapatillas[i].ofertPercent === 22) {
                    contenedorProducto.innerHTML = `
                            <h2 class="nombreProducto">${arrZapatillas[i].name}</h2>
                            <img class="imgProducto"src="${arrZapatillas[i].img}">
                            <h3 class="precioProducto">Precio: $${arrZapatillas[i].price}</h3>
                            <h4 class="ofertaProducto">Oferta %15 Descuento: $${arrZapatillas[i].price - arrZapatillas[i].price * 0.15}</h4>
                            <button id="botonComprar">COMPRAR</button>
                            `
                }
                else if (arrZapatillas[i].ofertPercent === 15) {
                    contenedorProducto.innerHTML = `
                            <h2 class="nombreProducto">${arrZapatillas[i].name}</h2>
                            <img class="imgProducto"src="${arrZapatillas[i].img}">
                            <h3 class="precioProducto">Precio: $${arrZapatillas[i].price}</h3>
                            <h4 class="ofertaProducto">Oferta %15 Descuento: $${arrZapatillas[i].price - arrZapatillas[i].price * 0.15}</h4>
                            <button id="botonComprar">COMPRAR</button>
                            `
                }
                else if (arrZapatillas[i].ofertPercent === 30) {
                    contenedorProducto.innerHTML = `
                            <h2 class="nombreProducto">${arrZapatillas[i].name}</h2>
                            <img class="imgProducto"src="${arrZapatillas[i].img}">
                            <h3 class="precioProducto">Precio: $${arrZapatillas[i].price}</h3>
                            <h4 class="ofertaProducto">Oferta %30 Descuento: $${arrZapatillas[i].price - arrZapatillas[i].price * 0.30}</h4>
                            <button id="botonComprar">COMPRAR</button>
                            `
                }
            }
            contenedorPrincipal.appendChild(contenedorProducto);
        }
    })

/*cerrar sesion*/

function cerrarSesion() {
    Swal.fire({
        icon: 'question',
        title: 'Desea cerrar sesion?',
        confirmButtonText: 'SI',
        showConfirmButton: true,
        denyButtonText: 'NO',
        showDenyButton: true,
    }).then((cerrar) => {
        if (cerrar.isConfirmed) {
            window.location = "index.html"
        }
    })
}

const botonCerrarSesion = document.querySelector("#cerrarSesion")
botonCerrarSesion.addEventListener("click", cerrarSesion)
