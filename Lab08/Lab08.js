function calcularPromedio(arr) {
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}

let numeros1 = [3, 6, 9, 12, 15];
let promedio = calcularPromedio(numeros1);
console.log("El promedio de los números es:", promedio);

const fs = require('fs');

function escribirEnArchivo(texto, nombreArchivo) {
    fs.writeFile(nombreArchivo, texto, (err) => {
        if (err) {
            console.error("Error al escribir en el archivo:", err);
            return;
        }
        console.log("Se ha escrito correctamente en el archivo:", nombreArchivo);
    });
}

let textoAEscribir = "Hola, este es un ejemplo de texto que será escrito en un archivo.";
let nombreArchivo = "archivo.txt";
escribirEnArchivo(textoAEscribir, nombreArchivo);


function encontrarMayor(arr) {
    let mayor = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i];
        }
    }
    return mayor;
}

let numeros2 = [7, 15, 3, 22, 10, 5];
let mayor = encontrarMayor(numeros2);
console.log("El número mayor en el arreglo es:", mayor);

const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.url);

    if(request.url == "/"){
        response.setHeader('Content-Type','text/html');
        response.write(`
       <!DOCTYPE html>
        <html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página personal de Mónica Monserrat</title>
</head>
<link rel="stylesheet" href="minimizadoCSSlab03.css">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
<body>

    <header>
        <!-- Encabezado de la página -->
        <h1 class="main-title">Página personal de Mónica Martínez</h1>
    </header>

    <main>
        <section>
            <!-- Sección de introducción -->
            <h2>
                Bienvenido lector, un gusto...
            </h2>
            <p>
                Soy Mónica Monserrat Martínez Vásquez, estudiante del Tecnológico de Monterrey 
                en campus Querétaro. Actualmente estoy en la carrera de Ingeniería en Tecnologías 
                Computacionales, cursando el 4to semestre. Tengo experiencia en programación 
                (C++, Python, SWI-Prolog, Perl, etc.) por semestres anteriores y conocimientos en 
                diferentes tópicos (requisitos de software, bases de datos, química, matemáticas, 
                biología, etc.). También toco el violín, hablo inglés, alemán y francés.
                Disfruto dibujar, cantar, bailar, escribir, hacer ejercicio, salir con mis amigos 
                y tocar, entre otras cosas.
            </p>
        </section>

        <section>
            <!-- Sección de la imagen -->
            <img 
            src="FotoMon.png" 
            alt="Foto Monica Monserrat Martinez Vasquez" 
            width="300" 
            height="300">

            <!-- Botón de opción -->
            <div>
                <p>¿Cómo está siendo tu día?</p>
                <label><input type="radio" name="estado_dia" value="Triste"> Triste</label><br>
                <label><input type="radio" name="estado_dia" value="Emocionante"> Emocionante</label><br>
                <label><input type="radio" name="estado_dia" value="Estresante"> Estresante</label><br>
                <label><input type="radio" name="estado_dia" value="Neutral"> Neutral</label><br>
            </div>
        </section>

        <section>
            <!-- Sección de preguntas y respuestas -->
            <h2>
                Preguntas y respuestas del Laboratorio 1
            </h2>
            <ul>
                <li>
                    <dl>
                        <dt>
                            ¿Cuál es la diferencia entre Internet y la World Wide Web?
                        </dt>
                        <dd>La diferencia radica en que Internet es una red global de computadoras 
                            interconectadas que proporciona la infraestructura física para la 
                            comunicación entre dispositivos en todo el mundo. Se trata de una vasta 
                            red de dispositivos que se comunican entre sí. En contraste, la World 
                            Wide Web es un sistema de información en línea que opera sobre Internet. 
                            Consiste en una gran cantidad de páginas web que están alojadas en 
                            esta red de computadoras (Internet). En otras palabras, para acceder 
                            a la World Wide Web se utiliza Internet. Una de las distinciones más 
                            significativas entre ambas es que la web no puede operar sin Internet, 
                            ya que este último actúa como una infraestructura sobre la cual la web 
                            funciona como un servicio. Sin Internet, no sería posible la comunicación 
                            a través de la World Wide Web debido a la imposibilidad de enviar datos 
                            <em>
                                (BBC News Mundo, 2019)
                            </em>.
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>
                            ¿Cuáles son las partes de un URL?
                        </dt>
                        <dd>Partes de una URL
                        Las partes de una URL son el protocolo, subdominio, dominio, extensión, carpeta, 
                        página y la etiqueta. 
                        <strong>
                            El protocolo
                        </strong> 
                        facilita la comunicación entre el cliente (navegador web) y el servidor para 
                        transferir datos en internet. Un ejemplo sería HTTPS que se basa en HTTP. 
                        Normalmente, los navegadores agregan automáticamente este protocolo cuando es 
                        necesario.
                        <strong>
                            El subdominio
                        </strong>
                        , generalmente "www" (World Wide Web) u otras variantes, es opcional 
                        y puede ser una extensión del dominio principal. Los subdominios permiten crear 
                        divisiones dentro de un sitio, redirigiendo a directorios específicos en el 
                        servidor. 
                        <strong>
                            El dominio
                        </strong>
                        es un nombre único que identifica un sitio web, permitiendo el acceso sin 
                        necesidad de direcciones IP. Se adquieren a través de registradores de dominios 
                        y pueden contener letras, números y guiones, sin espacios ni ciertos caracteres.
                        Los nombres de dominio suelen ser fáciles de recordar y relacionados con la 
                        organización o actividad del sitio.
                        <strong>
                            El TLDs (extensión o terminación)
                        </strong> 
                        es la extensión del dominio, como .com o .org, indica la naturaleza del dominio. 
                        Los ccTLDs (Dominios de Nivel Superior de Código de País) tienen dos letras y 
                        representan países, mientras que los gTLDs (Dominios de Nivel Superior Genérico) 
                        tienen tres o más letras y están destinados a tipos específicos de organizaciones.
                        <strong>
                            Las carpetas o subcarpetas
                        </strong>
                        organizan la estructura de una página web, indicando la ubicación de páginas o 
                        archivos.
                        <strong>
                            La página o ruta
                        </strong>
                        se refiere a un archivo dentro del sitio web donde se carga la información.
                        <strong>
                            La etiqueta
                        </strong>
                        es una referencia interna al contenido de una página 
                        <em>
                            (Collado V. , 2022)
                        </em>.
                    </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>
                            ¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?
                        </dt>
                        <dd>
                            <dl>
                                <strong>
                                    GET:
                                </strong> 
                                Se utiliza para solicitar datos de un recurso específico en el servidor. 
                                Cuando un cliente realiza una solicitud GET, el servidor envía los datos 
                                solicitados en la respuesta.
                            </dl>
                            <dl>
                                <strong>
                                    HEAD:
                                </strong>
                                Similar a GET, pero el servidor solo devuelve los encabezados de la respuesta,
                                sin el cuerpo del mensaje.
                            </dl>
                            <dl>
                                <strong>
                                    POST:
                                </strong>
                                Se utiliza para enviar datos al servidor para ser procesados.
                                El método POST se emplea para enviar una entidad a un recurso particular, lo que 
                                frecuentemente resulta en una modificación del estado o en efectos adicionales en 
                                el servidor.
                            </dl>
                            <dl>
                                <strong>
                                    PUT:
                                </strong>
                                Se utiliza para enviar datos al servidor para actualizar o reemplazar un recurso
                                existente en una ubicación específica.
                            </dl> 
                            <dl>
                                <strong>
                                    PATCH:
                                </strong>
                                Similar a PUT, pero se utiliza para realizar modificaciones parciales en un recurso 
                                existente en lugar de reemplazarlo completamente. Es útil cuando se necesita 
                                actualizar solo una parte de un recurso.
                            </dl>
                            <strong>
                                DELETE:
                            </strong>
                            Se utiliza para solicitar al servidor que elimine un recurso específico.
                             <em>
                                (Informatica Documentation, 2018) (Mozilla, 2023)
                            </em>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>
                            ¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando 
                            ingresas tu usuario y contraseña en algún sitio? ¿Por qué?
                        </dt>
                        <dd>
                            Se utiliza el método POST ya que este envía los recursos sensibles, de manera más segura 
                            al servidor. Esto debido a que el post al enviar los recursos los envía con una capa 
                            adicional de seguridad, no siendo visibles desde la URL 
                            <em>
                                (Afric A, 2023)
                            </em>.
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>
                            ¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página
                            a través de un URL?
                        </dt>
                        <dd>
                            Se utiliza el método GET ya que a diferencia del POST, cuando tu navegador necesita 
                            enviar datos al servidor lo hace por medio de URL. Además, es el más comúnmente 
                            utilizado en la navegación web para obtener recursos como páginas HTML, archivos, etc.
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>
                            Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? 
                            ¿Ocurrió algún error?
                        </dt>
                        <dd>
                            El código de estado HTTP 200 OK se utiliza para comunicar que una solicitud ha sido 
                            recibida, procesada y finalizada con éxito, sin que se haya producido ningún error. 
                            Este estado indica que la operación solicitada se ha llevado a cabo correctamente. 
                            Sin embargo, es importante tener en cuenta que el resultado puede variar dependiendo 
                            del método utilizado en la solicitud 
                            <em>
                                (Dotcom-monitor, 2021) (Silva C., 2023)
                            </em>.
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>
                            ¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta 
                            que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?
                        </dt>
                        <dd>
                            Sí, ya que este error 404 indica que el servidor no pudo encontrar el recurso 
                            solicitado, lo que puede deberse a diversas razones, como un enlace roto o una página 
                            eliminada. Como desarrollador, es esencial asegurarse de que el sitio web esté libre 
                            de errores y que todos los enlaces y recursos sean accesibles para los usuarios 
                            <em>
                                (Dotcom-monitor, 2021) (Silva C., 2023)
                            </em>
                            . Esto con el fin de darle seguridad a los usuarios y más confianza en el uso de la 
                            página web.
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>
                            ¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta 
                            que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?
                        </dt>
                        <dd>
                            Si, ya que indica que ocurrió un problema no especificado en el servidor al procesar 
                            la solicitud del usuario. Este tipo de error puede deberse a diversas razones, como 
                            errores en el código del sitio web, problemas en la configuración del servidor, fallos 
                            en la conexión a la base de datos, entre otros. Así como todos los errores que salen 
                            en una página de html es fundamental que se arreglen para evitar que afecte negativamente 
                            la reputación del sitio y la confianza de los usuarios 
                            <em>
                                (Dotcom-monitor, 2021) (Silva C., 2023).
                            </em>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? Menciona 
                            algunos elementos de HTML 4 que en HTML5 estén desaprobados.
                        </dt>
                        <dd>
                            Cuando un atributo de HTML5 está "depreciado" o "desaprobado" (deprecated), significa que 
                            se considera obsoleto o que su uso ya no se recomienda en la especificación HTML actual. 
                            Esto se debe a que puede haber mejores prácticas, estándares más modernos o alternativas 
                            más seguras disponibles. Algunos ejemplos:
                            <li>
                                <strong>
                                acronym:
                                </strong>
                            
                            En HTML5, se prefiere el uso de atributos semánticos como el atributo "title" en lugar de este 
                            elemento para proporcionar información sobre las abreviaturas. Antes se usaba para insertar 
                            acrónimos. 
                            </li>
                            <li>
                                <strong>
                                    applet:
                                
                            </strong> 
                            En la alternativa es embed y object. CSS3 y JavaScript para la creación de contenido interactivo 
                            en lugar de applets de Java.
                            </li>
                            <li>
                                <strong>
                                    basefont:
                                </strong>
                             
                            Se cambió a utilizar CSS para establecer la fuente base de un documento HTML. Anteriormente 
                            servía para definir la tipografía por defecto que se muestra en la web.
                            </li>
                            <li>
                                <strong>
                                    big:
                                </strong>
                             
                            Antes usado para indicar el tamaño de la cuenta. Ahora se prefiere el uso de CSS para el control 
                            del tamaño del texto en lugar de este elemento. 
                            </li>
                            <li>
                                <strong>
                                    center:
                                </strong>
                            
                            En lugar de este elemento, se recomienda utilizar CSS para el centrado de contenido. Antes, servía 
                            para decirle a HTML que centre el texto.
                            </li>
                            <em>
                                (Fernández E., 2024)
                            </em>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>
                            ¿Cuáles son las diferencias principales entre HTML 4 y HTML5?
                        </dt>
                        <dd>
                            Entre las diferencias más grandes entre estos dos, son las mejoras que se implementaron en su
                            nueva versión y más reciente, HTML 5. Que incluyen desde nuevos elementos semánticos, soporte 
                            multimedia integrado, canvas y SVG, APIs y funcionalidades avanzadas, mejoras en formularios y 
                            en accesibilidad y SEO; además, adopción de estándares web. Es decir, HTML5 ofrece soporte nativo 
                            para audio y video, así como para gráficos vectoriales mediante SVG y canvas. Permite la inclusión 
                            de MathML y SVG dentro del texto de manera más flexible. También, HTML5 permite a los usuarios 
                            dibujar formas directamente en la página. Introduce nuevas formas de almacenar datos temporalmente, 
                            como bases de datos web y almacenamiento local. Mejora la experiencia de programación al ejecutar 
                            JavaScript y la interfaz del navegador en hilos separados. Simplifica las declaraciones de tipo 
                            de documento y de codificación de caracteres. Aunque HTML5 es compatible con la mayoría de los 
                            navegadores, algunas de sus características pueden no ser compatibles con versiones más antiguas. 
                            A diferencia del HTML tradicional, HTML5 ha mejorado las reglas de análisis sintáctico para 
                            una mayor compatibilidad.
                            <em>
                                (Hostinger, 2023)
                            </em>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>
                            ¿Qué componentes de estructura y estilo tiene una tabla?
                        </dt>
                        <dd>
                            <u>
                                Componentes de Estructura:
                            </u>
                            <li>
                                <strong>
                                    table:
                                </strong>
                            Es el elemento principal que define la tabla en HTML.
                            </li>
                            <li>
                                <strong>
                                    thead:
                                </strong>
                                Define el encabezado de la tabla.
                            </li>
                            <li>
                                <strong>
                                    tbody:
                                </strong>
                                Define el cuerpo principal de la tabla.
                            </li>
                            <li>
                                <strong>
                                    tfoot:
                                </strong>
                                Define el pie de la tabla.
                            </li>
                            <li>
                                <strong>
                                    tr:
                                </strong>
                                Define una fila dentro de la tabla.
                            </li>
                            <li>
                                <strong>
                                    th:
                                </strong>
                                Define una celda de encabezado dentro de una fila.
                            </li>
                            <li>
                                <strong>
                                    td:
                                </strong>
                                Define una celda de datos dentro de una fila.
                            </li>
                            <u>
                                Componentes de Estilo:
                            </u>
                            <li>
                                <strong>
                                    CSS:
                                </strong>
                                Las tablas se pueden estilizar utilizando CSS para cambiar su apariencia,
                                incluyendo el tamaño de la fuente, el color del texto, el fondo de la tabla, 
                                el espaciado entre celdas, bordes, etc.
                            </li>
                            <li>
                                <strong>
                                    Atributos de estilo HTML:
                                </strong>
                                Además de CSS externo o interno, se pueden aplicar estilos directamente a los 
                                elementos de la tabla mediante atributos de estilo HTML como "style".
                            </li>
                                <em>
                                    (Marco B S Tablas, n.d.)
                                </em>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>
                            ¿Cuáles son los principales controles de una forma HTML5?
                        </dt>
                        <dd>
                            <strong>
                                1. input:
                            </strong>
                            Este elemento es extremadamente versátil y puede tener varios tipos, 
                            incluidos:
                            <dl>
                                <dd>
                                    <li>
                                        Texto (input type="text")
                                    </li>
                                    <li>
                                        Contraseña (input type="password")
                                    </li>
                                    <li>
                                        Número (input type="number")
                                    </li>
                                    <li>
                                        Email (input type="email")
                                    </li>
                                    <li>
                                        Fecha (input type="date")
                                    </li>
                                    <li>
                                        Checkbox (input type="checkbox")
                                    </li>
                                    <li>
                                        Radio (input type="radio")
                                    </li>
                                    <li>
                                        Archivo (input type="file")
                                    </li>
                                </dd>
                            </dl>
                            <dl>
                                <strong>
                                    2. textarea:
                                </strong>
                                Permite a los usuarios introducir texto multilínea.
                            </dl>
                            <dl>
                                <strong>
                                    3. select:
                                </strong>
                                Proporciona una lista desplegable de opciones, que puede incluir "option" elementos.
                            </dl>
                            <dl>
                                <strong>
                                    4. button:
                                </strong>
                                Crea un botón que puede ser utilizado para enviar formularios o ejecutar scripts.
                            </dl>
                            <dl>
                                <strong>
                                    5. label:
                                </strong>
                                Proporciona una etiqueta descriptiva para un control de formulario, mejorando la accesibilidad y la usabilidad.
                            </dl>
                            <dl>
                                <strong>
                                    6. datalist:
                                </strong>
                                Proporciona una lista de opciones para autocompletar un campo de entrada de texto.
                            </dl>
                            <em>
                                (Marco B S Formularios, n.d.)
                            </em>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>
                            ¿Qué tanto soporte HTML5 tiene el navegador que utilizas? Puedes utilizar la siguiente 
                            página para descubrirlo: http://html5test.com/ (Al responder la pregunta recuerda 
                            poner el navegador que utilizas)
                        </dt>
                        <dd>
                            Google Chrome tiene un historial de actualizaciones frecuentes y un compromiso con las 
                            últimas tecnologías web, lo que generalmente se traduce en un buen soporte para las 
                            características de HTML5. Al meterme al link estipulado me apareció un puntaje de 
                            525/555 puntos, algo bastante bueno para este navegador 
                            <em>
                                (Leenheer N, 2016).
                            </em>
                        </dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>
                            Sobre el ciclo de vida y desarrollo de los sistemas de información:
                        </dt>
                        <dd>
                            a. ¿Cuál es el ciclo de vida de los sistemas de información?
                            <dl>
                                <dd>
                                    <strong>
                                    1. Creación de datos:
                                    </strong>
                                    Los datos se generan, adquieren o capturan inicialmente, ya sea 
                                    mediante adquisición, entrada manual o dispositivos.
                                </dd>
                                <dd>
                                    <strong>
                                    2. Almacenamiento:
                                    </strong>
                                    Los datos se almacenan de forma segura y se implementa un proceso 
                                    de respaldo para garantizar su retención.
                                </dd>
                                <dd>
                                    <strong>
                                    3. Uso:
                                    </strong>
                                    Los datos se utilizan para respaldar las actividades comerciales y 
                                    pueden ser procesados, modificados y compartidos según sea necesario.
                                </dd>
                                <dd>
                                    <strong>
                                    4. Archivo:
                                    </strong>
                                    Los datos se copian a un entorno de archivo para su almacenamiento a 
                                    largo plazo, sin mantenimiento o uso general.
                                </dd>
                                <dd>
                                    <strong>
                                    5. Destrucción:
                                    </strong>
                                    Los datos obsoletos se eliminan de manera segura después de haber 
                                    superado los períodos de retención requeridos.
                                </dd>
                                <dd>
                                    <em>
                                        (De DocuSign C, 2022)
                                    </em>
                                </dd> 
                            </dl>       
                        </dd>
                    </dl>
                </li>
                    <dl>
                        <dd>
                            b. ¿Cuál es el ciclo de desarrollo de sistemas de información?
                            <dl>
                                <dd>
                                    <strong>
                                        1. Planificación:
                                    </strong>
                                    Se establecen objetivos, se identifican recursos y se 
                                    elabora un plan detallado.
                                </dd>
                                <dd>
                                    <strong>
                                        2. Análisis:
                                    </strong>
                                    Se recopilan y evalúan los requisitos del sistema en 
                                    colaboración con usuarios finales y partes interesadas.
                                </dd>
                                <dd>
                                    <strong>
                                        3. Diseño: 
                                    </strong>
                                    Se crea la arquitectura del sistema y se toman decisiones 
                                    sobre la infraestructura tecnológica.
                                </dd>
                                <dd>
                                    <strong>
                                        4. Desarrollo: 
                                    </strong>
                                    Los programadores escriben el código del sistema según 
                                    las especificaciones del diseño, integrando módulos individuales.
                                </dd>
                                <dd>
                                    <strong>
                                        5. Pruebas: 
                                    </strong>
                                    Se realizan pruebas exhaustivas para identificar y corregir errores, 
                                    garantizando la estabilidad del sistema.
                                </dd>
                                <dd>
                                    <strong>
                                        6. Implementación: 
                                    </strong>
                                    Se pone en funcionamiento el sistema, instalando y formando al 
                                    personal para su uso efectivo.
                                </dd>
                                <dd>
                                    <strong>
                                        7. Mantenimiento: 
                                    </strong>
                                    Se corrigen errores, se realizan mejoras y se adaptan cambios 
                                    en los requisitos del usuario para garantizar la funcionalidad 
                                    continua del sistema.
                                </dd>
                                <dd>
                                    <em>
                                        (KeepCoding R, 2023)
                                    </em>
                                </dd>
                            </dl>
                        </dd>
                    </dl>
                </ul>
                <h2>
                    Preguntas y respuestas del Laboratorio 3
                </h2>
                <ul>
                    <li>
                        <dl>
                            <dt>
                                Como ingeniero de software 
                                ¿cuál es tu recomendación sobre el uso de !important en un CSS?
                            </dt>
                            <dd>
                                El uso de en CSS debe evitarse en la medida de lo posible, ya que
                                puede complicar el mantenimiento del código y dificultar la depuración de estilos. 
                                Su uso excesivo puede causar especificidad excesiva y hacer que sea difícil de 
                                sobrescribir estilos en cascada. Es preferible utilizar buenas prácticas de diseño 
                                CSS, como la especificidad adecuada de selectores y la organización estructurada 
                                de estilos, para evitar la necesidad de. 
                            </dd>
                            <li>
                                <dl>
                                    Si se pone una imagen de fondo en una página HTML, 
                                    ¿por qué debe escogerse con cuidado?
                                </dl>
                            </li>
                                <dd>
                                La elección cuidadosa de una imagen de fondo es importante por varias razones. 
                                Primero, la imagen debe ser relevante para el contenido y el diseño de la página. 
                                Además, debe tener un tamaño adecuado para no aumentar el tiempo de carga de la 
                                página. Las imágenes de alta resolución pueden ralentizar la carga de la página, 
                                especialmente en dispositivos móviles. También es crucial considerar la accesibilidad, 
                                asegurándose de que el texto superpuesto sea legible en contraste con la imagen de fondo. 
                                </dd>
                            <li>
                                <dl>
                                    Como ingeniero de software, 
                                    ¿cuál es tu recomendación al elegir las unidades de un propiedad de estilo entre %, px y pt?
                                </dl>
                            </li>
                                <dd>
                                <strong>
                                    %:
                                </strong>
                                Son útiles para hacer que un elemento se ajuste proporcionalmente al tamaño de su 
                                contenedor padre. Son especialmente útiles para diseño responsive.
                                </dd>
                                <dd>
                                <strong>
                                    px:
                                </strong>
                                Son unidades absolutas y proporcionan un control preciso sobre el tamaño y posición de 
                                los elementos. Sin embargo, pueden no escalar bien en diferentes dispositivos y tamaños 
                                de pantalla.
                                </dd>
                                <dd>
                                <strong>
                                    pt:
                                </strong>
                                Son unidades absolutas y se utilizan comúnmente para dimensiones de texto impreso.
                                No son recomendadas para diseño web debido a su falta de escalabilidad en 
                                diferentes dispositivos.
                                </dd>
                            <li>
                                <dl>
                                    ¿Por qué el uso de una versión minimizada del CSS mejora el rendimiento del sitio?
                                </dl>
                            </li>
                            <dd>
                                La versión minimizada del CSS reduce el tamaño del archivo CSS al eliminar 
                                espacios en blanco, comentarios y otras redundancias, lo que resulta en un tiempo 
                                de carga más rápido de la página. Al reducir el tamaño de los archivos CSS, se 
                                reduce el tiempo de transferencia de datos desde el servidor al navegador del usuario, 
                                lo que mejora la velocidad de carga de la página y la experiencia del usuario. 
                                Además, una versión minimizada del CSS también puede beneficiar el rendimiento en 
                                términos de almacenamiento en caché del navegador y consumo de ancho de banda.
                            </dd>
                        </dl>
                    </li>
                </ul>
                <h2>
                    Preguntas y respuestas del Laboratorio 4
                </h2>
                <ul>
                    <li>
                        <dl>
                            <dt>
                                ¿Qué diferencias y semejanzas hay entre Java y JavaScript?
                            </dt>
                                <dd>
                                <strong>
                                    Diferencias:
                                </strong>
                                Java es un lenguaje de programación de propósito general que se utiliza ampliamente para 
                                el desarrollo de aplicaciones de escritorio, web y móviles, mientras que JavaScript es 
                                un lenguaje de secuencias de comandos principalmente utilizado para el desarrollo web, 
                                especialmente para agregar interactividad a las páginas web. Java es un lenguaje compilado 
                                que se ejecuta en la máquina virtual Java (JVM), mientras que JavaScript es interpretado 
                                y se ejecuta en un navegador web. Java es fuertemente tipado, lo que significa que debes 
                                declarar el tipo de dato de cada variable, mientras que JavaScript es débilmente tipado, 
                                lo que significa que las variables pueden contener diferentes tipos de datos sin necesidad 
                                de declaración explícita de tipo. Además, Java es un lenguaje orientado a objetos puro, donde 
                                todo es un objeto, mientras que JavaScript también es orientado a objetos pero también 
                                admite programación funcional. También, Java tiene tipado estático, lo que significa que
                                los tipos de datos se comprueban en tiempo de compilación, mientras que JavaScript tiene 
                                tipado dinámico, lo que significa que los tipos de datos se comprueban en tiempo de ejecución.
                                </dd>
                                <dd>
                                <strong>
                                    Semejanzas:
                                </strong>
                                Ambos lenguajes comparten una sintaxis similar a C, lo que facilita la transición entre ellos. 
                                Tienen estructuras de control de flujo similares, como bucles for, while, y condicionales if.
                                Tanto Java como JavaScript tienen el concepto de objetos y métodos. Tienen soporte para manejo 
                                de errores a través de excepciones. Se pueden utilizar para el desarrollo tanto en el lado 
                                del cliente como en el servidor.
                                </dd>
                                <dd>
                                <em>
                                    (Universidad Europea, 2022)
                                </em>
                                </dd>
                                
                            <li>
                                <dl>
                                    ¿Qué métodos tiene el objeto Date? (Menciona al menos 5)
                                </dl>
                            </li>
                                <dd>
                                <strong>
                                    1. getDate():
                                </strong>
                                Devuelve el día del mes (1-31).
                                </dd>
                                <dd>
                                <strong>
                                    2. getMonth():
                                </strong>
                                Devuelve el mes (0-11).
                                </dd>
                                <dd>
                                <strong>
                                    3. getFullYear():
                                </strong>
                                Devuelve el año (cuatro dígitos).
                                </dd>
                                <dd>
                                <strong>
                                    4. getHours():
                                </strong>
                                Devuelve la hora (0-23).
                                </dd>
                                <dd>
                                <strong>
                                    5. getMinutes()
                                </strong>
                                Devuelve los minutos (0-59).
                                </dd>
                                <dd>
                                <em>
                                    (AulaScript, 2021)
                                </em>
                                </dd>
                            <li>
                                <dl>
                                    ¿Qué métodos tienen los arreglos? (Menciona al menos 5)
                                </dl>
                            </li>
                                <dd>
                                <strong>
                                    1. push():
                                </strong>
                                Añade uno o más elementos al final del arreglo y 
                                devuelve la nueva longitud del arreglo.
                                </dd>
                                <dd>
                                <strong>
                                    2. pop():
                                </strong>
                                Elimina el último elemento del arreglo y lo devuelve.
                                </dd>
                                <dd>
                                <strong>
                                    3. splice():
                                </strong>
                                Cambia el contenido de un arreglo eliminando elementos 
                                existentes y/o agregando nuevos elementos.
                                </dd>
                                <dd>
                                <strong>
                                   4. forEach():
                                </strong>
                                Ejecuta una función dada una vez por cada elemento del 
                                arreglo.
                                </dd>
                                <dd>
                                <strong>
                                    5. filter()
                                </strong>
                                Crea un nuevo arreglo con todos los elementos que 
                                pasan la prueba implementada por la función proporcionada.
                                </dd>
                                <dd>
                                <em>
                                    (Zubikarai, 2022)
                                </em>
                                </dd>
                            <li>
                                <dl>
                                    ¿Cómo se declara una variable con alcance local dentro de una función?
                                </dl>
                            </li>
                            <dd>
                                Se puede declarar una variable con alcance local dentro de una 
                                función utilizando la palabra clave let o const. Por ejemplo:
                                <dd>
                                    <em>
                                    function miFuncion() {
                                        <dd>
                                        let variableLocal = "Esta es una variable local";
                                        </dd>
                                        <dd>
                                        const otraVariableLocal = "Esta es otra variable local";
                                        </dd>
                                        <dd>
                                        // Resto del código...
                                        </dd>
                                        <dd>
                                        }
                                        </dd>
                                    </em>                      
                                </dd>       
                            </dd>
                            <li>
                                <dl>
                                    ¿Qué implicaciones tiene utilizar variables globales dentro de funciones?
                                </dl>
                            </li>
                            <dd>
                                Las variables globales pueden ser accedidas y modificadas desde cualquier lugar en el código,
                                lo que puede hacer más difícil rastrear los cambios en el programa y comprender su 
                                comportamiento. Puede haber conflictos de nombres si se utilizan variables globales con
                                nombres similares en diferentes partes del código, lo que puede conducir a errores difíciles 
                                de depurar. Utilizar variables globales en exceso puede llevar a una mala organización del 
                                código y hacer que sea más difícil de mantener y ampliar. Si una función modifica una variable
                                global, puede tener efectos secundarios inesperados en otras partes del programa, lo que dificulta 
                                la depuración y el mantenimiento del código.
                            </dd>
                            <dd>
                            <em>
                                (www2, n.d.)(Morales, n.d.)
                            </em>
                            </dd>
                        </dl>
                    </li>
                </ul>
        </section>
        <script src="Lab04.js"></script>
    </main>
    <footer>
        <div>
            <p>
                <h2>
                    Pagina creada por
                    <strong>
                        Mónica Monserrat Martínez Vásquez
                    </strong>
                </h2>
                <p>Creado con el editor de codigo: 
                    <a href="https://code.visualstudio.com/">
                        <strong>
                            Visual Studio Code
                        </strong>
                    </a> 
                </p>
                <p>
                    <strong>Correo:</strong> correo.escuela.uni@gmail.com
                </p>
                <p>
                    <strong>Matrícula:</strong> A01710965
                </p>
            </p>
        </div>
        <!-- Pie de página -->
        <dl>
            <h3>
                Referencias:
            </h3>
            <dd>
                <li>
                    BBC News Mundo. (2019, March 12). ¿Cuál es la diferencia entre 
                    internet y la web? (y por qué muchos las confunden). Site: 
                    <a href="https://www.bbc.com/mundo/noticias-47538812">
                        https://www.bbc.com/mundo/noticias-47538812
                    </a>
                </li>
            </dd>
            <dd>
                <li>
                    Collado, V. (2022, February 23). ¿Qué es una dirección web o url? 
                    Cloud Computing | Adaptix Networks | Cómputo en la Nube. Site: 
                    <a href="https://www.adaptixnetworks.com/que-es-una-direccion-web-o-url/">
                        https://www.bbc.com/mundo/noticias-47538812
                    </a>
                </li>
            </dd>
            <dd>
                <li>
                    Mozilla (2023, July 24). Métodos de petición HTTP - HTTP | MDN. 
                    MDN Web Docs.  Site: 
                    <a href="https://developer.mozilla.org/es/docs/Web/HTTP/Methods">
                        https://developer.mozilla.org/es/docs/Web/HTTP/Methods
                    </a>
                </li>
            </dd>
            <dd>
                <li>
                    Informatica Documentation (2018). Métodos HTTP. Informatica. Site: 
                    <a href="https://docs.informatica.com/es_es/data-engineering/data-engineering-integration/10-2-1/web-services-guide/transformacion-de-consumidor-de-servicio-web-rest/metodos-http.html">
                        https://docs.informatica.com/es_es/data-engineering/data-engineering-integration/10-2-1/web-services-guide/transformacion-de-consumidor-de-servicio-web-rest/metodos-http.html
                    </a>
                </li>
            </dd>
            <dd>
                <li>
                    Afric, A. (2023, February 16). Formulario HTML Ejemplos de tipo de entrada y 
                    botón de envío. freeCodeCamp.org. Site: 
                    <a href="https://www.freecodecamp.org/espanol/news/formulario-html-ejemplos-de-tipo-de-entrada-y-boton-de-envio/">
                        https://www.freecodecamp.org/espanol/news/formulario-html-ejemplos-de-tipo-de-entrada-y-boton-de-envio/
                    </a>
                </li>
            </dd>
            <dd>
                <li>
                    Dotcom-monitor (2021, January 20). Lista de códigos de estado HTTP? Códigos
                    de error HTTP explicados. Site: 
                    <a href="https://www.dotcom-monitor.com/wiki/es/knowledge-base/http-status-codes/">
                        https://www.dotcom-monitor.com/wiki/es/knowledge-base/http-status-codes/
                    </a>
                </li>
            </dd>
            <dd>
                <li>
                    Silva, C. (2023, June 7). Códigos HTTP: Lista completa + explicaciones. 
                    Semrush Blog. Site: 
                    <a href="https://es.semrush.com/blog/codigos-de-estado-http/">
                        https://es.semrush.com/blog/codigos-de-estado-http/
                    </a>
                </li>
            </dd>
            <dd>
                <li>
                    Fernández, E. (2024, February 26). ¿Cuáles son las etiquetas obsoletas
                    en HTML5? ¡Actualízate! Tokio School. Site:  
                    <a href="https://www.tokioschool.com/noticias/etiquetas-obsoletas-html5/"">
                        https://www.tokioschool.com/noticias/etiquetas-obsoletas-html5/
                    </a>
                </li>
            </dd>
            <dd>
                <li>
                    Hostinger (2023, April 20). La diferencia entre HTML y HTML5. V, B., &
                    V, B. Tutoriales Hostinger.  Site: 
                    <a href="https://www.hostinger.mx/tutoriales/diferencia-entre-html-y-html5">
                        https://www.hostinger.mx/tutoriales/diferencia-entre-html-y-html5
                    </a>
                </li>
            </dd>
            <dd>
                <li>
                    Marco, B. S. Tablas (n.d.). Tablas. HTML. Páginas web HTML y hojas de
                    estilo CSS. Bartolomé Sintes Marco. www.mclibre.org. Site: 
                    <a href="https://www.mclibre.org/consultar/htmlcss/html/html-tablas.html">
                        https://www.mclibre.org/consultar/htmlcss/html/html-tablas.html
                    </a>
                </li>
            </dd>
            <dd>
                <li>
                    Mozilla (2023, August 2). Controles de formulario originales - 
                    Aprende desarrollo web | MDN. MDN Web Docs. Site: 
                    <a href="https://developer.mozilla.org/es/docs/Learn/Forms/Basic_native_form_controls">
                        https://developer.mozilla.org/es/docs/Learn/Forms/Basic_native_form_controls
                    </a>
                </li>
            </dd>
            <dd>
                <li>
                    Marco, B. S. Formularios (n.d.). Formularios (1). HTML. Páginas
                    web HTML y hojas de estilo CSS. Bartolomé Sintes Marco. www.mclibre.org. 
                    Site: <a href="https://www.mclibre.org/consultar/htmlcss/html/html-formularios.html">
                        https://www.mclibre.org/consultar/htmlcss/html/html-formularios.html
                    </a>
                </li>
            </dd>
            <dd>
                <li>
                    Leenheer, N. (2016, June). The HTML5 test - How well does your browser 
                    support HTML5? HTML5test. Site: <a href="https://html5test.com/">
                        https://html5test.com/
                    </a>
                </li>
            </dd>
            <dd>
                <li>
                    De DocuSign, C. (2022, January 11). Fases del ciclo de vida de los datos:
                    ¿por qué es tan importante conocerlas? DocuSign. Site: 
                    <a href="https://www.docusign.com/es-mx/blog/ciclo-de-vida-de-datos">
                        https://www.docusign.com/es-mx/blog/ciclo-de-vida-de-datos
                    </a>
                </li>
            </dd>
            <dd>
                <li>
                    KeepCoding, R. (2023, December 15). ¿Qué es el ciclo de vida del 
                    desarrollo del sistema? KeepCoding Bootcamps. Site: 
                    <a href="https://keepcoding.io/blog/ciclo-de-vida-del-desarrollo-del-sistema/">
                        https://keepcoding.io/blog/ciclo-de-vida-del-desarrollo-del-sistema/
                    </a>
                </li>
            </dd>
            <dd>
                <li>
                    Universidad Europea (2022, August 8). Diferencias entre Java y JavaScript. Site: 
                    <a href="https://universidadeuropea.com/blog/diferencias-entre-java-y-javascript/">
                        https://universidadeuropea.com/blog/diferencias-entre-java-y-javascript/
                    </a>
                </li>
            </dd>
            <dd>
                <li>
                    AulaScript (2021). Referencia objeto Date. AulaScript, JavaScript desde cero. Site: 
                    <a href="https://www.aulascript.com/lenguaje/objetos/date/index.htm">
                        https://www.aulascript.com/lenguaje/objetos/date/index.htm
                    </a>
                </li>
            </dd>
            <dd>
                <li>
                    Zubikarai, S. (2022, January 12). Manual de arreglos en JavaScript: Métodos de 
                    arreglos de JS explicados con ejemplos. freeCodeCamp.org. Site:
                    <a href="https://www.freecodecamp.org/espanol/news/el-manual-de-arreglos-en-javascript/">
                        https://www.freecodecamp.org/espanol/news/el-manual-de-arreglos-en-javascript/
                    </a>
                </li>
            </dd>
            <dd>
                <li>
                    www2 (n.d.). Ámbito de las variables — Fundamentos de Programación en C++. Site:
                    <a href="https://www2.eii.uva.es/fund_inf/cpp/temas/2_tipos_variables/ambito_variables.html">
                        https://www2.eii.uva.es/fund_inf/cpp/temas/2_tipos_variables/ambito_variables.html
                    </a>
                </li>
            </dd>
            <dd>
                <li>
                    Morales, J. I. S. (n.d.). Variables locales y globales. Site:
                    <a href="https://ccia.ugr.es/~jfv/ed1/c/cdrom/cap6/cap62.htm">
                        https://ccia.ugr.es/~jfv/ed1/c/cdrom/cap6/cap62.htm
                    </a>
                </li>
            </dd>
        </dl>
        <p id="derechos">
            Derechos Reservados &copy; Mónica Monserrat Martínez Vásquez
        </p>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>
</html>
`);
       response.end();
   }
});
// localhost: 0 - 12000
server.listen(3000);