var btnno = document.getElementById('btnno');
var btnyes = document.getElementById('btnyes');

// Movimiento aleatorio del botón "No"
btnno.addEventListener('mouseenter', () => {
    var pos = coordenadas();
    btnno.style.position = 'absolute';
    btnno.style.top = `${pos.posy}px`;
    btnno.style.left = `${pos.posx}px`;
});

var coordenadas = () => {
    var ancho = window.innerWidth - 100; // Ajusta al tamaño de la ventana
    var alto = window.innerHeight - 100;
    var posx = Math.random() * ancho;
    var posy = Math.random() * alto;
    return { posx, posy };
};

// Crear y mostrar una alerta animada al hacer clic en "Sí"
btnyes.addEventListener('click', () => {
    // Crear el contenedor del modal
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';

    // Crear el contenido del modal
    const modalContent = document.createElement('div');
    modalContent.style.backgroundColor = '#ffe4e1';
    modalContent.style.padding = '20px';
    modalContent.style.borderRadius = '10px';
    modalContent.style.textAlign = 'center';
    modalContent.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    modalContent.style.animation = 'fadeIn 0.5s ease-out';

    // Añadir el mensaje al modal
    const message = document.createElement('p');
    message.textContent = 'Nos vemos en la Castellana para la función de las 5:40 pm, cielito ❤️';
    message.style.margin = '0';
    message.style.fontFamily = 'Arial, sans-serif';
    message.style.color = '#333';

    // Crear el botón de cierre
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Cerrar';
    closeBtn.style.marginTop = '20px';
    closeBtn.style.padding = '10px 20px';
    closeBtn.style.backgroundColor = '#7f0000';
    closeBtn.style.color = '#fff';
    closeBtn.style.border = 'none';
    closeBtn.style.borderRadius = '5px';
    closeBtn.style.cursor = 'pointer';

    // Cerrar el modal al hacer clic en el botón
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    // Añadir contenido al modal
    modalContent.appendChild(message);
    modalContent.appendChild(closeBtn);
    modal.appendChild(modalContent);

    // Añadir el modal al body
    document.body.appendChild(modal);
});

// Añadir animación con CSS (en línea para este caso)
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);
