const cargarMenu = () => {
    fetch('./comidas.json')
        .then(respuesta => respuesta.json())
        .then(comidas => {
            const contenedorMenu = document.getElementById('productos');

            comidas.Comidas.forEach(comida => {
                const tarjetaComida = document.createElement('div');
                tarjetaComida.className = 'card';
                tarjetaComida.setAttribute('style', 'width: 18rem;');
                tarjetaComida.innerHTML = `<div class="image overflow-hidden">
                        <img src="imagenes/Salchipapa típica de América Latina_ Salchichas con papas fritas, salsa de tomate, mostaza y mayonesa, en blanco _ Foto Premium.jpeg" class="card-img-top efecto-zoom" alt="...">
                    </div>
                    <div class="card-body">
                    <h5 class="card-title fw-bold">${comida.comida}</h5>
                    <p class="card-text">${comida.descripcion}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="fw-bold fs-5 mb-0">$${comida.precio}</p>
                        <button class="btn btn-warning text-white boton-hover2">+</button>
                    </div>
                    </div>`;

                contenedorMenu.append(tarjetaComida);
            });
        });
}

cargarMenu();