document.getElementById('loadData').addEventListener('click', function() {
    obtenerAlbumes();
});

async function obtenerAlbumes() {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    try {
        const response = await fetch(url);
        const data = await response.json();
        mostrarTitulos(data);
    } catch (error) {
        console.error('Error al obtener los álbumes:', error);
    }
}

function mostrarTitulos(data) {
    const albumContainer = document.getElementById('albumList');
    albumContainer.innerHTML = ''; // Limpiar contenido anterior
    data.slice(0, 20).forEach((album, index) => {
        const listItem = document.createElement('div');
        listItem.textContent = `${index + 1}: ${album.title}`;
        albumContainer.appendChild(listItem);
    });
    mostrarMensajeDespuesDeTiempo();
}

function esperarMensaje() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Información Enviada");
        }, 3000);
    });
}

async function mostrarMensajeDespuesDeTiempo() {
    const mensaje = await esperarMensaje();
    const messageBox = document.getElementById('messageBox');
    messageBox.textContent = mensaje; // Mostrar mensaje en el HTML
}

