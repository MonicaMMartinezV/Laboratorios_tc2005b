document.write("<h2>Salidas de JavaScript del Laboratorio 4</h2>")
// Workframe materialize
document.write("<div class='container'>");


// ========================================
// ============== Problema 1 ==============
// -> Generar una tabla con los cuadrados y cubos de los números del 1 al número dado
// Entrada: un número pedido con un prompt. 
// Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. 
// Utiliza document.write para producir la salida.
// ========================================
function generarTablaPotencias() {
    let numero = parseInt(prompt("Hola:D, ingresa un número:"));
    document.write("<table>");
    document.write("<tr><th> Número </th><th> Cuadrado </th><th> Cubo </th></tr>");
    for (let i = 1; i <= numero; i++) {
        let cuadrado = i * i;
        let cubo = cuadrado * i;
        document.write(`<tr><td>${i}</td><td>${cuadrado}</td><td>${cubo}</td></tr>`);
    }
    document.write("</table>");
}


// ========================================
// ============== Problema 2 ==============
// -> Verificar si el usuario ingresa la suma correcta de dos números generados aleatoriamente.
// Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria. 
// Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta.
// ========================================
function verificarSuma() {
    // Generar los numeros random
    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * 100);
    // Respuesta correcta
    let res = num1 + num2;
    // Capturar el tiempo antes de solicitar la respuesta
    let tiempoInicio = Date.now();
    let respuestaUsuario = parseInt(prompt(`Ingresa la respuesta de la suma de ${num1} y ${num2}:`));
    // Capturar el tiempo después de obtener la respuesta
    let tiempoFinal = Date.now();
    let tiempoTotal = tiempoFinal - tiempoInicio;
    // Verificar respuesta correcta con la del usuario
    if (respuestaUsuario === res) {
        document.write("<strong>¡Respuesta correcta!</strong>");
    } else {
        document.write("<strong>¡Respuesta incorrecta!</strong>");
    }
    // Mostrar el tiempo de respuesta
    document.write(`<br><em>Tiempo de respuesta: ${tiempoTotal} milisegundos.</em></br>`);
}


// ========================================
// ============== Problema 3 ==============
// -> Contar números negativos, ceros y positivos en un arreglo.
// Función: Contador.
// Parámetros: Un arreglo de números. 
// Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.
// ========================================
function contador(arreglo) {
    let negativos = 0;
    let ceros = 0;
    let positivos = 0;
    arreglo.forEach(numero => {
        if (numero < 0) {
            negativos++;
        } else if (numero === 0) {
            ceros++;
        } else {
            positivos++;
        }
    });
    return {negativos,ceros,positivos};
}


// ========================================
// ============== Problema 4 ==============
// -> Calcular promedios de arreglos de números.
// Función: Promedios.
// Parámetros: Un arreglo de arreglos de números.
// Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.
// ========================================
function promedios(matriz) {
    let promediosMatriz = [];
    matriz.forEach(arreglo => {
        // Hacemos la suma con el método reduce()
        let suma = arreglo.reduce(
            // Función de reducción proporcionada para el método reduce()
            // total -> Acumulador
            // num -> Elemento actual
            // , 0 -> Valor inicial acumulador
            (total, num) => total + num, 0);
        let promedio = suma / arreglo.length;
        promediosMatriz.push(promedio);
    });
    return promediosMatriz;
}


// ========================================
// ============== Problema 5 ==============
// -> Invertir un número.
// Función: Inverso.
// Parámetros: Un número.
// Regresa: El número con sus dígitos en orden inverso.
// ========================================
function inverso(numero) {
    let numeroInvertido = parseInt(
        // Convierte el número en una cadena de texto
        numero.toString()
        // Divide la cadena en '' en un arreglo de caracteres individuales 
        .split('')
        // Invierte el orden de los elementos en el arreglo
        .reverse()
        // Une los elementos del arreglo en una cadena de texto nuevamente
        .join('')
    );
    return numeroInvertido;
}


// ========================================
// ============== Problema 6 ==============
// -> Solución personalizada.
// Crea una solución para un problema de tu elección 
// (puede ser algo relacionado con tus intereses, alguna problemática que hayas identificado en algún ámbito, un problema de programación que hayas resuelto en otro lenguaje, un problema de la ACM, entre otros).
// El problema debe estar descrito en un documento HTML, y la solución implementada en JavaScript, utilizando al menos la creación de un objeto, el objeto además de su constructor deben tener al menos 2 métodos.
// Muestra los resultados en el documento HTML.
// Problema elegido:
// Supongamos que queremos calcular el área y el perímetro de un rectángulo
// ========================================
// Definición de una función constructora llamada "Rectangulo" que toma dos parámetros: base y altura
function Rectangulo(base, altura) {
    // Asignar la base y la altura a las propiedades del objeto actual (this)
    this.base = base;
    this.altura = altura;
}
// Agregar un método al prototipo del objeto Rectangulo llamado "calcularArea"
Rectangulo.prototype.calcularArea = function () {
    // Devolver el resultado de la multiplicación de la base por la altura
    return this.base * this.altura;
};
// Agregar otro método al prototipo del objeto Rectangulo llamado "calcularPerimetro"
Rectangulo.prototype.calcularPerimetro = function () {
    // Devolver el resultado del cálculo del perímetro del rectángulo (2 veces la suma de la base y la altura)
    return 2 * (this.base + this.altura);
};
// Crear un objeto rectángulo base 5 y altura 10
let rectangulo = new Rectangulo(5, 10);


// ========================================
// =============== JS y HTML ==============
// Llamadas, salidas y resultados de las funciones de .js en el documento HTML
// ========================================

// ============== Problema 1 ==============
document.write("<h3>Problema 1</h3>");
document.write("<dt><li>Generar una tabla con los cuadrados y cubos de los números del 1 al número dado</li></dt>");
document.write("<dd><strong>Entrada:</strong> Un número pedido con un prompt.</dd>");
document.write("<dd><strong>Salida:</strong> Una tabla con los números del 1 al número dado con sus cuadrados y cubos.</dd>");
document.write("<dd>*Utiliza document.write para producir la salida.</dd>");
document.write("<dt>=======================</dt>");
generarTablaPotencias();
document.write("<dt>=======================</dt>");

// ============== Problema 2 ==============
document.write("<h3>Problema 2</h3>");
document.write("<dt><li>Verificar si el usuario ingresa la suma correcta de dos números generados aleatoriamente.</li></dt>");
document.write("<dd><strong>Entrada:</strong> Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria.</dd>");
document.write("<dd><strong>Salida:</strong> La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta.</dd>");
document.write("<dt>=======================</dt>");
verificarSuma();
document.write("<dt>=======================</dt>");

// ============== Problema 3 ==============
document.write("<h3>Problema 3</h3>");
document.write("<dt><li>Contar números negativos, ceros y positivos en un arreglo.</li></dt>");
document.write("<dd><strong>Función:</strong> Contador.</dd>");
document.write("<dd><strong>Parámetros:</strong> Un arreglo de números.</dd>");
document.write("<dd><strong>Regresa:</strong> La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.</dd>");
document.write("<dt>=======================</dt>");
let arregloContador = [-10, 0, 9, -5, 6, -9, -3, 0, 8, 2, 3];
let resultadoContador = contador(arregloContador);
document.write(`<dt>El arreglo ${arregloContador} contiene: </dt>`);
document.write(`<dd><strong>Negativos:</strong> ${resultadoContador.negativos}</dd>`);
document.write(`<dd><strong>Ceros:</strong> ${resultadoContador.ceros}</dd>`);
document.write(`<dd><strong>Positivos:</strong> ${resultadoContador.positivos}</dd>`);
document.write("<dt>=======================</dt>");

// ============== Problema 4 ==============
document.write("<h2>Problema 4</h2>");
document.write("<dt><li>Calcular promedios de arreglos de números.</li></dt>");
document.write("<dd><strong>Función:</strong> Promedios.</dd>");
document.write("<dd><strong>Parámetros:</strong> Un arreglo de arreglos de números.</dd>");
document.write("<dd><strong>Regresa:</strong> Un arreglo con los promedios de cada uno de los renglones de la matriz.</dd>");
document.write("<dt>=======================</dt>");
let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
document.write(`<dt>Los promedios de la matriz: ${matriz}</dt>`);
let resultadoPromedios = promedios(matriz);
document.write(`<dd><strong>Promedios:</strong> ${resultadoPromedios}`);
document.write("<dt>=======================</dt>");

// ============== Problema 5 ==============
document.write("<h2>Problema 5</h2>");
document.write("<dt><li>Invertir un número.</li></dt>");
document.write("<dd><strong>Función:</strong> Inverso.</dd>");
document.write("<dd><strong>Parámetros:</strong>  Un número.</dd>");
document.write("<dd><strong>Regresa:</strong> El número con sus dígitos en orden inverso.</dd>");
document.write("<dt>=======================</dt>");
let numeroAInvertir = 157658
document.write(`<dt>Número normal: ${numeroAInvertir}</dt>`);
let numeroInvertido = inverso(numeroAInvertir);
document.write(`<dt>Número invertido: ${numeroInvertido}</dt>`);
document.write("<dt>=======================</dt>");

// ============== Problema 6 ==============
document.write("<h2>Problema 6</h2>");
document.write("<dt><li>Solución personalizada.</li></dt>");
document.write("<dd>Crea una solución para un problema de tu elección (puede ser algo relacionado con tus intereses, alguna problemática que hayas identificado en algún ámbito, un problema de programación que hayas resuelto en otro lenguaje, un problema de la ACM, entre otros). El problema debe estar descrito en un documento HTML, y la solución implementada en JavaScript, utilizando al menos la creación de un objeto, el objeto además de su constructor deben tener al menos 2 métodos. Muestra los resultados en el documento HTML.</dd>");
document.write("<dd><strong>Problema elegido:</strong>  Supongamos que queremos calcular el área y el perímetro de un rectángulo.</dd>");
document.write("<dt>=======================</dt>");
document.write(`<dt>Base del rectángulo: ${rectangulo.base}</dt>`);
document.write(`<dt>Altura del rectángulo: ${rectangulo.altura}</dt>`);
document.write(`<dd><strong>Área del rectángulo:</strong> ${rectangulo.calcularArea()}</dd>`);
document.write(`<dd><strong>Perímetro del rectángulo:</strong> ${rectangulo.calcularPerimetro()}</dd>`);
document.write("<dt>=======================</dt>");