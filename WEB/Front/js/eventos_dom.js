// Posción del mouse
document.addEventListener("DOMContentLoaded", () => {
    // Obtener el elemento del DOM para mostrar la posición del mouse
    const mousePositionElement = document.getElementById("mousePosition");
    
    // Agregar un listener al evento "mousemove"
    document.addEventListener("mousemove", (event) => {
      // Obtener las coordenadas X e Y del mouse
      const mouseX = event.pageX;
      const mouseY = event.pageY;
      
      // Actualizar el contenido del elemento con las coordenadas del mouse
      mousePositionElement.textContent = `Posición del mouse: ${mouseX}, ${mouseY}`;
    });
  });

// Nombre completo
document.addEventListener("DOMContentLoaded", () => {
    // Obtener el formulario y el botón de envío
    const form = document.getElementById("form1");
    const submitButton = document.getElementById("form1-submit");
    
    // Agregar un listener al evento "submit" del formulario
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Evitar el envío del formulario
      
      // Obtener los valores de los campos de texto
      const firstName = document.getElementById("form-fname").value;
      const lastName = document.getElementById("form-lname").value;
      
      // Crear un elemento para mostrar el nombre completo
      const fullNameElement = document.createElement("p");
      fullNameElement.textContent = `Nombre completo: ${firstName} ${lastName}`;
      
      // Insertar el elemento después del botón de envío
      submitButton.insertAdjacentElement("afterend", fullNameElement);
    });
});

// Agregar filas y columanas a una tabla
document.addEventListener("DOMContentLoaded", () => {
    // Obtener la tabla y los botones de inserción
    const table = document.getElementById("sampleTable");
    const insertRowButton = document.getElementById("btn-insert-r");
    const insertColumnButton = document.getElementById("btn-insert-c");
    
    // Agregar un listener al evento "click" del botón de inserción de fila
    insertRowButton.addEventListener("click", () => {
      // Crear una nueva fila
      const newRow = table.insertRow();
      
      // Agregar celdas a la nueva fila
      for (let i = 0; i < table.rows[0].cells.length; i++) {
        const newCell = newRow.insertCell();
        newCell.textContent = `Row ${table.rows.length} column ${i + 1}`;
      }
    });
    
    // Agregar un listener al evento "click" del botón de inserción de columna
    insertColumnButton.addEventListener("click", () => {
      // Recorrer cada fila existente en la tabla
      for (let i = 0; i < table.rows.length; i++) {
        // Insertar una nueva celda en cada fila
        const newCell = table.rows[i].insertCell();
        newCell.textContent = `Row ${i + 1} column ${table.rows[i].cells.length}`;
      }
    });
  });

// Cambia el contenido de la row y col
document.addEventListener("DOMContentLoaded", () => {
    // Obtener la tabla y los elementos de entrada de usuario
    const table = document.getElementById("myTable");
    const rowIndexInput = document.getElementById("rowIndex");
    const colIndexInput = document.getElementById("colIndex");
    const newValueInput = document.getElementById("newValue");
    const changeButton = document.getElementById("btn-change");
    
    // Agregar un listener al evento "click" del botón de cambio de contenido
    changeButton.addEventListener("click", () => {
      // Obtener los valores de fila, columna y nuevo valor ingresados por el usuario
      const rowIndex = parseInt(rowIndexInput.value) - 1; // Restar 1 porque los índices comienzan en 0
      const colIndex = parseInt(colIndexInput.value) - 1; // Restar 1 porque los índices comienzan en 0
      const newValue = newValueInput.value;
      
      // Verificar que los índices ingresados sean válidos
      if (rowIndex >= 0 && rowIndex < table.rows.length && colIndex >= 0 && colIndex < table.rows[rowIndex].cells.length) {
        // Actualizar el contenido de la celda en la posición especificada
        table.rows[rowIndex].cells[colIndex].textContent = newValue;
      }
    });
  });

// Agrega o quita colores aleatorios.
document.addEventListener("DOMContentLoaded", () => {
    // Obtener el select y los botones de agregar y quitar
    const colorSelect = document.getElementById("colorSelect");
    const addColorButton = document.getElementById("btn-add-color");
    const removeColorButton = document.getElementById("btn-rmv-color");
    
    // Agregar un listener al evento "click" del botón de agregar color
    addColorButton.addEventListener("click", () => {
      // Crear una nueva opción con un color aleatorio
      const newOption = document.createElement("option");
      newOption.textContent = getRandomColor();
      
      // Agregar la nueva opción al select
      colorSelect.appendChild(newOption);
    });
    
    // Agregar un listener al evento "click" del botón de quitar color
    removeColorButton.addEventListener("click", () => {
      // Verificar que haya opciones disponibles para quitar
      if (colorSelect.options.length > 0) {
        // Eliminar la opción seleccionada del select
        colorSelect.remove(colorSelect.selectedIndex);
      }
    });
    
    // Función para obtener un color aleatorio
    function getRandomColor() {
      const colors = ["Red", "Green", "White", "Black"];
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    }
  });

// Esperar a que se cargue el contenido del DOM
document.addEventListener("DOMContentLoaded", () => {
    // Obtener la imagen
    const imagenGato = document.getElementById("imagenGato");
    
    // Agregar el listener para el evento "mouseenter"
    imagenGato.addEventListener("mouseenter", generarImagenAleatoria);
    
    // Función para generar la imagen aleatoria
    function generarImagenAleatoria() {
      // Generar números aleatorios para el width y height
      const width = getRandomNumber(300, 600);
      const height = getRandomNumber(300, 600);
      
      // Crear una nueva imagen con el tamaño aleatorio
      const nuevaImagen = new Image();
      nuevaImagen.src = `http://placekitten.com/${width}/${height}`;
      nuevaImagen.classList.add("random-image");
      
      // Reemplazar la imagen actual por la nueva imagen
      imagenGato.src = nuevaImagen.src;
    }
    
    // Función para generar un número aleatorio en un rango dado
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  });