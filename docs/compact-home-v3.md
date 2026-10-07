# Home corporativa compacta v3

## Arquitectura y alcance

Se conserva HTML/CSS/JS nativo y modular: `assets/css/main.css` y
`assets/js/core/app.js`. No se reintroducen `style.css` ni `script.js`.

Se fusionan empresas/problemas/identidad en Sobre nosotros y se retiran de la
Home Productos, Proyectos, Tecnologías, Cómo trabajamos y FAQ. Se eliminan sus
estilos porque no hay otras páginas ni módulos que los utilicen. Se conservan
las imágenes originales como recursos; su eliminación no es necesaria.
La antigua galería tenía un controlador inline inexistente; su modal se retira
junto con la galería. Los modales corporativos conservan su controlador y añaden
bloqueo del fondo con `inert`, Escape, foco visible y restauración del foco.

El chatbot conserva el endpoint, servicio de red, conversationId, historial,
ES/EN y acciones rápidas. El producto es Yassir AI; el asistente es Andy.

## Comentarios: integración pendiente

No existen comentarios aprobados ni backend de comentarios en este repositorio.
Por eso se muestra un estado vacío real. El formulario admite nombre, empresa
opcional, comentario y valoración de 1 a 5. El envío está deshabilitado y el
controlador previene cualquier envío implícito. No se guarda nada en localStorage
ni se muestran confirmaciones falsas. Email es una alternativa explícita.

Contrato para la integración futura:

- POST debe validar los campos en servidor, limitar abuso y guardar con estado
  inicial `pending`, asignado por servidor; el visitante nunca elige el estado.
- GET público devuelve exclusivamente `approved`; la Home muestra como máximo
  tres registros. «Ver más» podrá paginar registros aprobados en el modal.
- Moderación autenticada y autorización en servidor para aprobar/rechazar.
- Renderizar nombres, empresas y comentarios como texto, nunca HTML del usuario.
- Solo confirmar recepción tras una respuesta exitosa del backend real.
- Definir política de consentimiento, conservación y eliminación antes de activar.

No se inventa un endpoint, una base de datos ni un proveedor de persistencia.

## Redes

Email, WhatsApp, LinkedIn y TikTok utilizan los datos oficiales solicitados.
El README original menciona `@YassirTechnologic` en Instagram pero no contiene una
URL oficial confirmada. Se muestra Instagram sin enlace; falta confirmar su URL.
El footer omite Instagram hasta disponer de esa URL, conforme al requisito.

## Idiomas y SEO

Se conserva el controlador de idiomas y su persistencia, con un diccionario ES/EN
completo para el contenido actual. Título, descripción, Open Graph y `html.lang`
se actualizan con el idioma. El HTML inicial está en español. No se crean URLs
alternativas de idioma ni hreflang ficticios para una Home con selector cliente.

## Validación

Las medidas y el resumen definitivo se registran en la entrega de revisión.
Las pruebas de chatbot interceptan la API únicamente en el navegador de prueba:
verifican endpoint, assistantId, reutilización de conversationId e historial
completo. No equivalen a una prueba de disponibilidad del backend de Render.
No hay commit, push ni publicación.

### Resultados medidos (Chromium, 7 de octubre de 2026)

| Ancho | Altura original ES | Altura final ES | Reducción |
| --- | ---: | ---: | ---: |
| 1440 px | 17873 px | 3127 px | 82,5 % |
| 1280 px | 17838 px | 3098 px | 82,6 % |
| 768 px | 26179 px | 3715 px | 85,8 % |
| 390 px | 30135 px | 5414 px | 82,0 % |

La reducción supera el objetivo orientativo del 45–50 %. Se priorizan la
estructura y el contenido solicitados sin añadir espacios artificiales para
alcanzar ese intervalo. Esta diferencia debe revisarse antes de publicar.

- ES/EN: 320, 390, 768, 1024, 1280, 1440 y 1920 px; sin overflow horizontal.
- Cinco secciones principales y diez servicios, sin enlaces internos rotos.
- Modales y menú móvil: apertura, cierre, Escape y restauración del foco.
- Chatbot: apertura/cierre y contrato de dos mensajes con historial y
  conversationId estable; respuesta interceptada solo en pruebas.
- Sin errores JS ni errores de consola en las pruebas satisfactorias.
- `node --check`: todos los módulos; PostCSS: todos los CSS; parse5: HTML sin
  errores; `git diff --check`: correcto. Imports, IDs y claves ES/EN verificados.
- Axe: 12 estados (ES/EN × desktop/móvil × Home/modal/chatbot), sin infracciones
  detectadas de WCAG A/AA después de corregir el foco del modal desplazable.
- Axe no determina el contraste de algunos degradados. Cálculo conservador en
  sus fondos más claros: Hero 4,75:1–16,40:1; footer ≥5,99:1; trigger 5,17:1.
  La auditoría automática no constituye una certificación completa de WCAG.
- HTML/CSS/JS en el repositorio: 466243 → 184690 bytes, reducción del 60,4 %.
  Se eliminan nueve imports CSS de secciones obsoletas, sin dependencias de
  producción nuevas. Esta medida no sustituye una comparación Lighthouse ni
  mediciones de Core Web Vitals en producción.
- Enlaces externos comprobados contra los destinos oficiales proporcionados;
  no se afirma que los perfiles o el backend estén disponibles en tiempo real.
- Sin commit, push ni publicación; rama `feature/compact-commercial-home-v3`.
