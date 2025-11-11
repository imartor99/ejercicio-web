
# 🚀 IA Hoy – El Auge de la Inteligencia Artificial

**IA Hoy** es una página web informativa e interactiva centrada en la **Inteligencia Artificial (IA)**.  
Su objetivo es **explicar de forma clara y visual** qué es la IA, sus aplicaciones más relevantes y su impacto en la sociedad moderna.  
Incluye además una **sección interactiva** donde el usuario puede descubrir datos curiosos sobre el avance de la IA.

---

## 🌐 Descripción General

El proyecto busca acercar la Inteligencia Artificial al público general mediante un diseño **minimalista, moderno y educativo**.  
Presenta contenidos sobre:

- Qué es la IA y cómo funciona.
- Aplicaciones clave en la vida cotidiana.
- Aspectos éticos y sociales de su desarrollo.
- Herramientas populares que utilizan IA.
- Un módulo dinámico con **datos curiosos generados aleatoriamente**.

---

## ⚙️ Funcionalidad Principal

La funcionalidad principal de la web es el componente **"Dato Interactivo del Día"**, que permite al usuario obtener un dato curioso aleatorio sobre la IA al hacer clic en un botón.

**Características técnicas principales:**
- Uso de **JavaScript** para manejar la lógica de interacción con el DOM.
- Array de datos (`datosCuriosos`) que contiene hechos sobre IA.
- Función `obtenerDatoCurioso()` que selecciona un dato aleatorio.
- Función `iniciarApp(document)` que inicializa los eventos del botón y gestiona la visibilidad del dato mostrado.
- Protección contra errores en caso de que los elementos del DOM no estén disponibles.
- Animaciones suaves de aparición y ocultación mediante clases CSS.

---

## 💡 Funciones Destacadas

| Función | Descripción |
|----------|--------------|
| `obtenerDatoCurioso()` | Devuelve un dato curioso aleatorio del array `datosCuriosos`. |
| `iniciarApp(document)` | Inicia la lógica de la app al cargar la página, conectando los botones y elementos del DOM. |
| `toggleContent(contentId, buttonElement)` | Permite alternar la visibilidad de contenido adicional en otras secciones, con transiciones visuales y cambio dinámico de estilos en el botón. |

Estas funciones fueron diseñadas para ser **modulares y reutilizables**, facilitando la expansión del proyecto con futuras secciones interactivas.

---

## 🎨 Diseño y Estilo

- **Paleta de colores:** tonos **verde-azulados** que transmiten tecnología y serenidad.  
- **Estilo visual:** limpio, moderno y minimalista.  
- **Tipografía:** moderna y de alta legibilidad.  
- **Diseño responsive:** se adapta correctamente a pantallas de escritorio y dispositivos móviles.  
- **Estructura semántica HTML5:** encabezados claros, secciones bien delimitadas y etiquetas descriptivas.

La navegación incluye cuatro apartados principales:
1. **Inicio**
2. **Impacto Social y Ética**
3. **Herramientas Populares**
4. **Dato Interactivo**

---

## 🧪 Pruebas (Testing)

El proyecto incluye un conjunto de **tests unitarios y de integración con Jest**, abarcando tanto la lógica pura como la interacción con el DOM.

### 🧠 Pruebas realizadas

1. **Lógica pura (obtenerDatoCurioso):**
   - Verifica que la función devuelva un string válido.
   - Comprueba que el dato pertenece al array original de datos.
   - Confirma el correcto funcionamiento del framework de tests.

2. **Interacción con el DOM (iniciarApp):**
   - Asegura que los elementos iniciales estén ocultos.
   - Simula un clic en el botón y verifica que se muestre un dato curioso.
   - Comprueba que el texto mostrado pertenece al array original.

3. **Comportamiento dinámico (toggleContent):**
   - Alterna correctamente entre mostrar y ocultar el contenido.
   - Cambia dinámicamente el texto del botón.
   - Modifica los estilos y clases CSS según el estado (visible/oculto).
   - Elimina clases innecesarias (`bg-red-600`, `hover:bg-red-500`) al ocultar.


## 🧭 Metodología de Desarrollo

El flujo de trabajo siguió una metodología **basada en Git y GitHub Flow**, fomentando la colaboración, revisión y control de versiones.

1. **Fork del repositorio principal (upstream)** para trabajar sobre una copia personal.
2. Creación de ramas específicas:

   * `feature-creacion`: desarrollo de la funcionalidad principal y el diseño.
   * `feature-doc`: redacción de la documentación y el README.
3. Fusión (merge) de ambas ramas en la rama de integración `develop`.
4. Verificación de que el proyecto compila y pasa todos los tests.
5. Creación de un **Pull Request (PR)** hacia el repositorio upstream con los cambios consolidados.
6. Validación final antes del merge a `main`.

---

## 📁 Estructura del Proyecto

```
IA-Hoy/
│
├── src/
│   ├── index.html
│   ├── impacto.html
│   ├── herramientas.html
│   ├── app.js
|   └── styles.css
│── test/
│   └── app.test.js
│
├── images/
│   ├── cerebro.jpg
│   ├── red.png
|   └── favicon.png
│
├── package.json
├── .gitignore
└── README.md
```

---

## 🧱 Tecnologías Utilizadas

* **HTML5** – Estructura semántica del sitio.
* **CSS3** – Estilos modernos y adaptables.
* **JavaScript** – Lógica interactiva y manejo del DOM.
* **Jest** – Framework de testing para JavaScript.

