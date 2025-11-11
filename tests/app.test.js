/**
 * @jest-environment jsdom
 */

/* * La línea de arriba es OBLIGATORIA. Le dice a Jest:
 * "Antes de correr este test, carga un entorno de navegador falso (JSDOM)".
 * Esto nos da acceso a 'document', 'window', etc., dentro del test.
 */

// Importamos las funciones de nuestra app
const { iniciarApp, obtenerDatoCurioso, datosCuriosos } = require('../src/app.js');

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
});

