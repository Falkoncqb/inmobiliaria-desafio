// 1. ARREGLOS DE DATOS 
const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&auto=format',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial.',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800&h=600&fit=crop&auto=format',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas.',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&auto=format',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa familiar con gran jardín',
        src: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop&auto=format',
        descripcion: 'Hermosa casa ideal para familias numerosas, cuenta con un amplio jardín.',
        ubicacion: '445 Family Blvd, Green Town, CA 99887',
        habitaciones: 5,
        baños: 3,
        costo: 6000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Cabaña rústica junto al lago',
        src: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&h=600&fit=crop&auto=format',
        descripcion: 'Perfecta para escapadas, cabaña de madera con acceso privado al lago.',
        ubicacion: '12 Lakeview Road, Forest Park, CA 11223',
        habitaciones: 2,
        baños: 2,
        costo: 2800,
        smoke: true,
        pets: true
    }
];

const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&auto=format',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&h=600&fit=crop&auto=format',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar.',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&auto=format',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Loft industrial estilo neoyorquino',
        src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop&auto=format',
        descripcion: 'Loft espacioso con paredes de ladrillo visto y techos altos.',
        ubicacion: '987 Art District, Downtown, CA 44321',
        habitaciones: 1,
        baños: 1,
        costo: 1800,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Estudio minimalista para estudiantes',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop&auto=format',
        descripcion: 'Ideal para personas solas. A pasos de la universidad y transporte público.',
        ubicacion: '321 College Way, University City, CA 65432',
        habitaciones: 1,
        baños: 1,
        costo: 900,
        smoke: false,
        pets: false
    }
];

// 2. FUNCIÓN PARA GENERAR EL HTML DE UNA TARJETA
function generarTemplate(propiedad) {
    // Lógica condicional para Fumar
    let smokeHTML = '';
    if (propiedad.smoke) {
        smokeHTML = `<p class="feature-item allowed"><i class="fas fa-check-circle"></i> Permitido fumar</p>`;
    } else {
        smokeHTML = `<p class="feature-item not-allowed"><i class="fas fa-times-circle"></i> No se permite fumar</p>`;
    }

    // Lógica condicional para Mascotas
    let petsHTML = '';
    if (propiedad.pets) {
        petsHTML = `<p class="feature-item allowed"><i class="fas fa-check-circle"></i> Mascotas permitidas</p>`;
    } else {
        petsHTML = `<p class="feature-item not-allowed"><i class="fas fa-times-circle"></i> No se permiten mascotas</p>`;
    }

    return `
        <div class="property-card">
            <div style="position: relative; overflow: hidden;">
                <img src="${propiedad.src}" alt="${propiedad.nombre}" class="card-img">
                <div class="price-tag">$${propiedad.costo.toLocaleString()}</div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${propiedad.nombre}</h3>
                <p class="card-description">${propiedad.descripcion}</p>
                
                <div class="card-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${propiedad.ubicacion}</span>
                </div>
                
                <div class="card-specs">
                    <div class="spec">
                        <i class="fas fa-bed"></i>
                        <span>${propiedad.habitaciones} Hab.</span>
                    </div>
                    <div class="spec">
                        <i class="fas fa-bath"></i>
                        <span>${propiedad.baños} Baño${propiedad.baños > 1 ? 's' : ''}</span>
                    </div>
                </div>

                <div class="card-footer">
                    ${smokeHTML}
                    ${petsHTML}
                </div>
            </div>
        </div>
    `;
}

// 3. FUNCIÓN PRINCIPAL DE RENDERIZADO
function renderizarPropiedades() {
    // Capturamos los contenedores si existen en el HTML actual
    const contenedorVentaIndex = document.getElementById('contenedor-venta-index');
    const contenedorAlquilerIndex = document.getElementById('contenedor-alquiler-index');
    const contenedorVentaTotal = document.getElementById('contenedor-venta-total');
    const contenedorAlquilerTotal = document.getElementById('contenedor-alquiler-total');

    // Renderizado Index - Ventas (Solo 3)
    if (contenedorVentaIndex) {
        let html = '';
        for (let i = 0; i < 3 && i < propiedades_venta.length; i++) {
            html += generarTemplate(propiedades_venta[i]);
        }
        contenedorVentaIndex.innerHTML = html;
    }

    // Renderizado Index - Alquiler (Solo 3)
    if (contenedorAlquilerIndex) {
        let html = '';
        for (let i = 0; i < 3 && i < propiedades_alquiler.length; i++) {
            html += generarTemplate(propiedades_alquiler[i]);
        }
        contenedorAlquilerIndex.innerHTML = html;
    }

    // Renderizado Venta Total (Todas las propiedades)
    if (contenedorVentaTotal) {
        let html = '';
        for (let propiedad of propiedades_venta) {
            html += generarTemplate(propiedad);
        }
        contenedorVentaTotal.innerHTML = html;
    }

    // Renderizado Alquiler Total (Todas las propiedades)
    if (contenedorAlquilerTotal) {
        let html = '';
        for (let propiedad of propiedades_alquiler) {
            html += generarTemplate(propiedad);
        }
        contenedorAlquilerTotal.innerHTML = html;
    }
}

// Ejecutar el renderizado al cargar la ventana
window.onload = renderizarPropiedades;