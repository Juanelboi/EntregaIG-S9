# Shader de Ondas Animadas

Un fragment shader GLSL que genera una visualización de ondas animadas con colores dinámicos basados en funciones trigonométricas.

## Cómo fue implementado

El shader fue desarrollado siguiendo estos pasos:

1. **Normalización de coordenadas**: Transformé las coordenadas del fragmento (`gl_FragCoord`) al rango [-1, 1] dividiendo por la resolución y centrando en el origen.

2. **Conversión a coordenadas polares**: Utilicé `atan()` para obtener el ángulo y `length()` para calcular el radio desde el centro, permitiendo trabajar con patrones circulares.

3. **Generación de ondas**: Creé una función de onda combinando:
   - El ángulo multiplicado por 12.0 (genera 12 patrones circulares)
   - El radio multiplicado por 5.0 (genera ondas que se expanden desde el centro)
   - El tiempo (`u_time`) para crear animación (multiplico por 2.0 para mayor velocidad)

4. **Coloración dinámica**: Generé tres canales RGB usando `cos()` con fases diferentes:
   - Base de 0.5 con amplitud 0.5
   - Desfases de 0.0, 2.0 y 4.0 radianes para cada canal
   - El valor de la onda afecta el color final

5. **Precisión**: Configuré `precision mediump float` para optimizar en dispositivos móviles compatibles con WebGL ES.

## Descripción

## Descripción

Este shader crea un efecto visual fascinante combinando:
- Coordenadas polares: Convierte las coordenadas cartesianas a ángulo y radio
- Ondas sinusoidales: Utiliza funciones seno para generar patrones ondulantes
- Colores animados: Los colores cambian dinámicamente con el tiempo

## Características

- Animación suave basada en el tiempo (`u_time`)
- Colores RGB dinámicos generados con funciones coseno
- Patrón de ondas en coordenadas polares
- Efecto de propagación radial combinado con rotación angular

## Uniforms (Entradas)

| Uniform | Tipo | Descripción |
|---------|------|-------------|
| `u_resolution` | `vec2` | Resolución de la pantalla (ancho, alto) |
| `u_time` | `float` | Tiempo transcurrido en segundos |

## Parámetros Ajustables

Puedes modificar los siguientes valores en el shader para cambiar el efecto:

```glsl
sin(angle*12.0 + radius*5.0 - u_time*2.0)
```

- `12.0`: Número de ondas angulares (aumentar = más patrones circulares)
- `5.0`: Frecuencia radial (aumentar = más ondas hacia afuera)
- `2.0`: Velocidad de animación (aumentar = más rápido)

## Funcionamiento

1. Normaliza las coordenadas del fragmento a un espacio [-1, 1]
2. Convierte a coordenadas polares (ángulo y radio)
3. Genera una onda basada en ángulo, radio y tiempo
4. Crea tres canales de color (R, G, B) con fases diferentes
5. Dibuja el resultado final

## Uso

Para utilizar este shader en tu proyecto:

```glsl
// Cargar el archivo .frag en tu aplicación WebGL/OpenGL
// Asegurar de pasar los uniforms correctamente:
// - u_resolution: vec2 con el tamaño de la viewport
// - u_time: float con el tiempo en segundos
```

## Requisitos

- Navegador compatible con WebGL o aplicación OpenGL/WebGL
- GLSL compatible (ES 100 o superior)

## Versión

- Versión 1.0
- Fecha: 2025
