const tiltElements = document.querySelectorAll('[data-tilt]');

// Itera sobre los elementos y aplica los efectos de inclinación
tiltElements.forEach((element) => {
  VanillaTilt.init(element, {
    reverse: true, // Establece esta opción en `true` para invertir la inclinación
  });
});

