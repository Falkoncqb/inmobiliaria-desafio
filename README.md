Características Principales

El proyecto se centra en la manipulación dinámica del DOM utilizando JavaScript puro (Vanilla JS), cumpliendo con los siguientes requerimientos:

Renderizado Dinámico: Las tarjetas de las propiedades se generan dinámicamente desde JavaScript y se inyectan en el HTML utilizando innerHTML y Template Literals.

Gestión de Datos: Uso de Arreglos de Objetos para almacenar la información de las propiedades (mínimo 4 objetos por cada categoría: venta y alquiler).

Lógica Condicional: Implementación de sentencias if/else para evaluar si una propiedad permite mascotas (pets) o si se permite fumar (smoke), modificando la interfaz gráfica (iconos de FontAwesome y colores de texto) según corresponda.

Límites de Visualización: Uso de ciclos for con limitadores lógicos para mostrar únicamente 3 propiedades en la página de inicio (index.html), mientras que en las páginas de detalle se muestran todas las propiedades disponibles.

Reutilización de Código: Un único archivo script.js es capaz de detectar en qué página se encuentra el usuario y renderizar los contenedores correspondientes sin generar errores en la consola.

🛠️ Tecnologías y Lenguajes Utilizados

HTML5: Estructura semántica de las 3 páginas web requeridas (index.html, propiedades_venta.html, propiedades_alquiler.html).

CSS3: Estilos personalizados mínimos para fondos de portada e imágenes.

Tailwind CSS (CDN): Utilizado como framework principal para el diseño responsivo, maquetación tipo grid y estilos de tipografía/colores.

JavaScript (ES6+): Motor lógico de la aplicación. Conceptos aplicados:

Variables y Constantes (let, const).

Arreglos (Arrays) y Objetos (Objects).

Ciclos iterativos (for, for...of).

Interpolación de strings (`...`).

Funciones y paso de parámetros.

FontAwesome (CDN): Para la iconografía del proyecto (camas, baños, ubicación, mascotas, cigarrillos).
