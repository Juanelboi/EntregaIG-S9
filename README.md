# Shader de Ondas Animadas

Un fragment shader GLSL que genera una visualización de ondas animadas con colores dinámicos basados en funciones trigonométricas.

## Cómo fue hecho
Para realiazr el shader tome de base el shader de molinillo del github de mi profesor Modesto Fernando Castrillón Santana ([Enlace al github](https://github.com/otsedom/otsedom.github.io/blob/main/IG/S9/README.md)). Quise hacer el tipico molinillo con curvas popular para "hipnotizar" y le añadi cambios de colo por que pense que pegarian con el tema. Los cambios de color los saque de Iñigo Quilez y sus ejemplos que tiene en su web y youtube. [Video de youtube que explica la formula en la que me baso](https://www.youtube.com/shorts/TH3OTy5fTog).


El shader fue desarrollado siguiendo estos pasos:

1. **Normalización de coordenadas**: Transformé las coordenadas del fragmento (`gl_FragCoord`) al rango [-1, 1] dividiendo por la resolución y centrando en el origen.

2. **Conversión a coordenadas polares**: Utilicé `atan()` para obtener el ángulo y `length()` para calcular el radio desde el centro, permitiendo trabajar con patrones circulares.

3. **Generación de ondas**: Creé una función de onda combinando:
   - El ángulo multiplicado por 12.0 (genera 12 patrones circulares)
   - El radio multiplicado por 32.0 (genera ondas que se expanden desde el centro)
   - El tiempo (`u_time`) para crear animación (multiplico por 15.0 para mayor velocidad)

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
sin(angle*12.0 + radius*32.0 - u_time*15.0)
```

- `12.0`: Número de ondas angulares (aumentar = más patrones circulares)
- `32.0`: Frecuencia radial (aumentar = más ondas hacia afuera)
- `15.0`: Velocidad de animación (aumentar = más rápido)

## Funcionamiento

1. Normaliza las coordenadas del fragmento a un espacio [-1, 1]
2. Convierte a coordenadas polares (ángulo y radio)
3. Genera una onda basada en ángulo, radio y tiempo
4. Crea tres canales de color (R, G, B) con fases diferentes
5. Dibuja el resultado final


## Requisitos

- Navegador compatible con WebGL o aplicación OpenGL/WebGL o The Book of Shaders
- GLSL compatible (ES 100 o superior)

## Versión

- Versión 1.0
- Fecha: 2025
