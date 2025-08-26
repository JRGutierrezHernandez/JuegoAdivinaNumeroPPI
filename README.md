# Juego "Adivina el Número"

### Descripción del Juego
"Adivina el Número" es un juego clásico donde el jugador debe intentar adivinar un número aleatorio entre 1 y 100 en un máximo de 10 intentos. Después de cada intento, el juego proporciona retroalimentación indicando si el número ingresado es demasiado alto, demasiado bajo o correcto.

### Archivos del proyecto

- index.html - Contiene la estructura HTML y los estilos CSS básicos
- game.js - Contiene toda la lógica del juego en JavaScript

### Estructura del Código

#### index.html
##### El archivo HTML contiene:

- Estructura básica:
- Área de título e instrucciones
- Campo de entrada para adivinanzas
- Botones para adivinar y reiniciar
- Área de retroalimentación
- Sección para mostrar números ya probados

##### Estilos CSS integrados:

- Diseño minimalista y funcional
- Colores para diferentes tipos de mensajes (éxito, error, información)
- Estilos responsivos básicos

#### game.js
El archivo JavaScript contiene la lógica completa del juego:

##### Variables principales

```
let randomNumber;     // Almacena el número aleatorio a adivinar
let attemptsLeft;     // Lleva la cuenta de los intentos restantes
let attempts;         // Array para almacenar los números probados
let gameOver;         // Bandera para controlar si el juego terminó
```

##### Funciones principales
###### initGame():

- Inicializa todas las variables del juego
- Genera un nuevo número aleatorio
- Restablece la interfaz de usuario

###### checkGuess():

- Valida la entrada del usuario
- Comprueba si el número ya fue probado
- Compara el número con el objetivo
- Proporciona retroalimentación
- Controla el fin del juego

######displayAttempts():

- Muestra visualmente los números que el jugador ya ha probado

###### endGame():

- Maneja la finalización del juego (victoria o derrota)
- Actualiza la interfaz para el estado final

##### Event Listeners
```
guessBtn.addEventListener(): Maneja los clics en el botón "Adivinar"
restartBtn.addEventListener(): Permite reiniciar el juego
guessInput.addEventListener(): Permite usar la tecla Enter para enviar adivinanzas
```
### Flujo del Juego
1. Al cargar la página, se inicializa el juego automáticamente

1. El jugador ingresa un número entre 1 y 100

1. El juego verifica el número y proporciona retroalimentación

1. Si el número es incorrecto, se reduce el contador de intentos

1. El juego continúa hasta que:

 - El jugador adivina correctamente el número
 - El jugador se queda sin intentos (10 intentos máximo)

1. Al finalizar, se muestra el resultado y la opción para jugar nuevamente

### Características
- Validación de entrada (solo números entre 1 y 100)

- Prevención de intentos duplicados

- Seguimiento de números ya probados

- Contador de intentos restantes

- Mensajes de retroalimentación claros

- Interfaz sencilla y fácil de usar

- Compatibilidad con teclado (tecla Enter)

### Cómo Ejecutar
1. Guardar ambos archivos (index.html y game.js) en la misma carpeta

1. Abrir el archivo index.html en cualquier navegador web moderno

1. ¡Comienza a jugar!

### Personalización
##### El juego puede personalizarse fácilmente modificando:

- El rango de números (actualmente 1-100)

- El número máximo de intentos (actualmente 10)

- Los estilos CSS en el archivo HTML

- Los mensajes de retroalimentación en el archivo JavaScript

##### Compatibilidad
El juego funciona en todos los navegadores modernos que soportan JavaScript ES6+.

¡Disfruta del juego!

