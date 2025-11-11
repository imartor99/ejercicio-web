/**
 * @jest-environment jsdom
 */

/* * La línea de arriba es OBLIGATORIA. Le dice a Jest:
 * "Antes de correr este test, carga un entorno de navegador falso (JSDOM)".
 * Esto nos da acceso a 'document', 'window', etc., dentro del test.
 */

// Importamos las funciones de nuestra app
const { iniciarApp, obtenerDatoCurioso, datosCuriosos, toggleContent } = require('../src/app.js');

// --- Inicia la suite de pruebas ---

describe("Pruebas de la Aplicación de IA", () => {

    // --- Pruebas de Lógica Pura (no necesitan el DOM) ---
    describe("Lógica Pura (obtenerDatoCurioso)", () => {

        test("Debe confirmar que el framework de tests funciona", () => {
            expect(true).toBe(true);
        });

        test("Debe devolver un string", () => {
            const dato = obtenerDatoCurioso();
            expect(typeof dato).toBe("string");
        });

        test("El dato devuelto debe estar en la lista original de datos", () => {
            const dato = obtenerDatoCurioso();
            // Comprueba que el 'dato' exista en el array 'datosCuriosos'
            expect(datosCuriosos).toContain(dato);
        });
    });


    // --- Pruebas de Interacción con el DOM ---
    describe("Interacción con el DOM (iniciarApp)", () => {

        // Se ejecuta antes de CADA test en este 'describe'
        beforeEach(() => {
            // 1. Creamos la estructura HTML que 'app.js' espera
            document.body.innerHTML = `
                <section id="dinamico-interactivo">
                    <button id="btn-dato">¡Sorpréndeme!</button>
                    <div id="info-dato-wrapper" class="info-oculta">
                        <p id="info-dato"></p>
                    </div>
                </section>
            `;
            
            // 2. Ejecutamos la función de nuestra app, pasándole el 'document' falso
            iniciarApp(document);
        });
        
        test("El contenedor de datos debe estar oculto al inicio", () => {
            const wrapper = document.getElementById('info-dato-wrapper');
            expect(wrapper.classList.contains('info-oculta')).toBe(true);
        });

        test("Debe mostrar un dato curioso al hacer clic en el botón", () => {
            const boton = document.getElementById('btn-dato');
            const wrapper = document.getElementById('info-dato-wrapper');
            const parrafo = document.getElementById('info-dato');

            // 3. Simulamos el evento
            boton.click();

            // 4. Verificamos los resultados (Asserts)
            
            // a) El wrapper ya no debe estar oculto
            expect(wrapper.classList.contains('info-oculta')).toBe(false);
            
            // b) El párrafo debe tener texto
            expect(parrafo.textContent).not.toBe("");
            
            // c) El texto del párrafo debe ser uno de los datos curiosos
            expect(datosCuriosos).toContain(parrafo.textContent);
        });
    });


    // --- Pruebas de toggleContent ---
    describe("Función toggleContent", () => {

        let contentDiv;
        let button;

        beforeEach(() => {
            // Creamos la estructura HTML que 'toggleContent' espera
            document.body.innerHTML = `
                <div id="content-test" class="dynamic-content hidden">
                    <p>Contenido de prueba</p>
                </div>
                <button id="btn-test" class="toggle-btn">Revelar Contenido</button>
            `;
            
            contentDiv = document.getElementById('content-test');
            button = document.getElementById('btn-test');
        });

        test("Debe mostrar el contenido cuando está oculto inicialmente", () => {
            // Verificar estado inicial
            expect(contentDiv.classList.contains('hidden')).toBe(true);
            expect(button.textContent).toBe('Revelar Contenido');

            // Llamar a la función
            toggleContent('content-test', button);

            // Verificar que el contenido ya no está oculto
            expect(contentDiv.classList.contains('hidden')).toBe(false);
            expect(button.textContent).toBe('Ocultar Contenido');
            expect(button.style.backgroundColor).toBe('var(--color-primary)');
        });

        test("Debe ocultar el contenido cuando está visible", () => {
            // Primero mostrar el contenido
            contentDiv.classList.remove('hidden');
            button.textContent = 'Ocultar Contenido';

            // Llamar a la función para ocultarlo
            toggleContent('content-test', button);

            // Verificar que el contenido está oculto
            expect(contentDiv.classList.contains('hidden')).toBe(true);
            expect(button.textContent).toBe('Revelar Contenido');
            expect(button.style.backgroundColor).toBe('var(--color-secondary)');
        });

        test("Debe alternar correctamente entre mostrar y ocultar", () => {
            // Estado inicial: oculto
            expect(contentDiv.classList.contains('hidden')).toBe(true);

            // Primera llamada: mostrar
            toggleContent('content-test', button);
            expect(contentDiv.classList.contains('hidden')).toBe(false);
            expect(button.textContent).toBe('Ocultar Contenido');

            // Segunda llamada: ocultar
            toggleContent('content-test', button);
            expect(contentDiv.classList.contains('hidden')).toBe(true);
            expect(button.textContent).toBe('Revelar Contenido');

            // Tercera llamada: mostrar de nuevo
            toggleContent('content-test', button);
            expect(contentDiv.classList.contains('hidden')).toBe(false);
            expect(button.textContent).toBe('Ocultar Contenido');
        });

        test("Debe remover las clases bg-red-600 y hover:bg-red-500 al ocultar", () => {
            // Agregar las clases inicialmente
            button.classList.add('bg-red-600', 'hover:bg-red-500');
            expect(button.classList.contains('bg-red-600')).toBe(true);
            expect(button.classList.contains('hover:bg-red-500')).toBe(true);

            // Mostrar el contenido primero
            contentDiv.classList.remove('hidden');
            toggleContent('content-test', button);

            // Verificar que las clases fueron removidas
            expect(button.classList.contains('bg-red-600')).toBe(false);
            expect(button.classList.contains('hover:bg-red-500')).toBe(false);
        });

        test("Debe cambiar el backgroundColor correctamente al mostrar", () => {
            // Estado inicial: oculto
            toggleContent('content-test', button);
            
            // Verificar que el backgroundColor se estableció
            expect(button.style.backgroundColor).toBe('var(--color-primary)');
        });

        test("Debe cambiar el backgroundColor correctamente al ocultar", () => {
            // Mostrar primero
            contentDiv.classList.remove('hidden');
            
            // Ocultar
            toggleContent('content-test', button);
            
            // Verificar que el backgroundColor se estableció
            expect(button.style.backgroundColor).toBe('var(--color-secondary)');
        });
    });
});

