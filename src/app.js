// Constante con los datos curiosos
const datosCuriosos = [
    "En 2017, una IA de Google (DeepMind) aprendió a caminar por sí sola sin instrucciones previas.",
    "Las IAs generativas pueden crear arte, música y poesía que es casi indistinguible de la humana.",
    "El algoritmo de recomendación de Netflix (IA) ahorra a la compañía más de 1.000 millones de dólares al año.",
    "Las IAs se utilizan para analizar radiografías y pueden detectar enfermedades con mayor precisión que los radiólogos humanos."
];


/**
 * Obtiene un dato curioso al azar de la lista.
 * @returns {string} Nos devuelve Un dato curioso.
 */
function obtenerDatoCurioso() {
    const indice = Math.floor(Math.random() * datosCuriosos.length);
    return datosCuriosos[indice];
}


/**
 * Lógica principal que se conecta al DOM.
 * @param {Document} document - El objeto 'document' del navegador.
 */
function iniciarApp(document) {
    const boton = document.getElementById('btn-dato');
    const wrapperDato = document.getElementById('info-dato-wrapper');
    const parrafoDato = document.getElementById('info-dato');


    // Si los elementos no existen, no hacemos nada (protección)
    if (!boton || !wrapperDato || !parrafoDato) {
        console.error("No se encontraron los elementos necesarios para la app.");
        return;
    }


    // Estado inicial: oculto (por si el CSS no cargó)
    wrapperDato.classList.add('info-oculta');


    // Asignar el evento
    boton.addEventListener('click', () => {
        // Obtenemos un nuevo dato
        const dato = obtenerDatoCurioso();

        // Lo ponemos en el párrafo
        parrafoDato.textContent = dato;

        // Mostramos el contenedor
        wrapperDato.classList.remove('info-oculta');
    });
}


/**
 * 'typeof document' solo estará definido si estamos en un navegador.
 * Cuando Jest ejecute este archivo, 'document' será 'undefined'
 * y esta línea no se ejecutará, evitando un error.
*/
if (typeof document !== 'undefined') {
    // Esperamos a que el HTML esté listo
    document.addEventListener('DOMContentLoaded', () => {
        // Pasamos el 'document' real del navegador
        iniciarApp(document);
    });
}

/**
         * Función principal para alternar la visibilidad del contenido en las tarjetas.
         * @param {string} contentId - El ID del div de contenido a mostrar/ocultar.
         * @param {HTMLElement} buttonElement - La referencia al botón que fue pulsado.
         */
function toggleContent(contentId, buttonElement) {
    // Verificar que el documento esté disponible
    if (typeof document === 'undefined') {
        console.error('toggleContent: document no está disponible');
        return;
    }

    const contentDiv = document.getElementById(contentId);

    // Verificar que el elemento existe
    if (!contentDiv) {
        console.error(`toggleContent: No se encontró el elemento con ID "${contentId}"`);
        return;
    }

    // Verificar que el botón existe
    if (!buttonElement) {
        console.error('toggleContent: No se proporcionó un elemento de botón válido');
        return;
    }

    // 1. Alternar la clase 'hidden'
    // 'hidden' utiliza max-height: 0 y opacity: 0 para un efecto de transición suave.
    const isHidden = contentDiv.classList.toggle('hidden');

    // 2. Cambiar el texto del botón
    if (isHidden) {
        buttonElement.textContent = 'Revelar Contenido';
        buttonElement.classList.remove('toggle-btn-active');
        buttonElement.classList.add('toggle-btn-inactive');
    } else {
        buttonElement.textContent = 'Ocultar Contenido';
        buttonElement.classList.remove('toggle-btn-inactive');
        buttonElement.classList.add('toggle-btn-active');
    }
}


/*
 * Exportamos (obtenerDatoCurioso) y
 * la lógica del DOM (iniciarApp) para que Jest pueda
 * importarlas y probarlas por separado.
*/
module.exports = {
    toggleContent,
    obtenerDatoCurioso,
    iniciarApp,
    datosCuriosos // Exportamos también los datos para verificarlos
};

// Hacer toggleContent disponible globalmente para los onclick handlers en HTML
// Esto solo se ejecuta en el navegador, no en Node.js/Jest
if (typeof window !== 'undefined') {
    window.toggleContent = toggleContent;
}

