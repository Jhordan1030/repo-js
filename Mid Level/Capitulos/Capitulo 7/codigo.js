// 42) Introducción a wimdoe
// Hereda las propiedades de EventTarget

// open ( )-Carga un recurso en el contexto de un nuevo navegador o uno que ya existe.
// let youtubeURL = "https://youtube.com";

// let ventana = window.open(youtubeURL);


// - close() -cierra la ventana actual, o la ventana en la que se llamó.
// ventana.close();

// - closed() -indica si la ventana referenciada está cerrada o no.
// ventana.closed();

// stop() - detiene la carga de recursos en el contexto de navegación actual.


// alert() - muestra un cuadro de alerta con el contenido especificado y un botón Aceptar.
// alert("HOLA")

// print() - Abre el cuadro de diálogo Imprimir para imprimir el documento actual.
// print()

// pronpt() - Abre un cuadro de diálogo un mensaje que solicita a1 usuario un dato (String)
// prompt("dame un dato")


// - confirn() - Abre un cuadro de diálogo con un mensaje y dos botones: Aceptar y Cancelar.
// respuesta = confirm("estas seguro que quieres salir ");
// console.log(respuesta)

// - screen - devuelve una referencia a1 objeto de pantalla asociado con la ventana.
// const screen = window.screen;
// console.log(screen);
// document.write(screen.availHeight)

// - screenLeft - devuelve la distancia horizontal entre eI borde izquierdo del navegador y eI borde izquierdo de la pantalla
// const screenLeft = window.screenLeft;

// screenTop - devuelve la distancia vertical entre el borde superior del navegador y el borde superior de la pantalla
// // const screenTop = window.screenTop;
// document.write(`Left: <b>${screenLeft}</b><br>
//                 Top: <b>${screenTop}</b>`);


// scrollX - devuelve el número de pixeles que el documento se desplaza actualmente horizontalmente.
// scrollY - devuelve el número de pixeles que el documento se desplaza actualmente verticalmente.
// const scrollX = window.scrollX;
// const scrollY = window.scrollY;

// alert("X: " + scrollX + " Y:" + scrollY )

// - scroll() - desplaza la ventana a un lugar particular en el documento. (con options y con posiciones)
// window.scroll(0,100)


// -resizeBy( )-cambia el tamaño de la ventana actual en una cantidad especifica
// ventana = window.open("https://youtube.com");


// - cambia el tanaño de la ventana actual en una cantidad especifica.
// resizeTo() - rediaensiona la ventana.
// - moveBy() - Mueve la ventana en una ubicación relativa.
// moveTo() - Mueve la ventana en una ubicación absoluta.


// 44) Location

 // windoaw.location.href ----------> (devuelve el href (URL) de la página actual)
// const href = window.location.href;

// document.write(href);


// window.location.hostname ------> (devuelve el nombre de dominio del servidor web) 
// const nombre = window.location.hostname;
// document.write(nombre);

// window.location.pathname ----->(devuelve la ruta y el nombre de archivo de la página actual)
// window.location.pathname;

// window.location.protocol ------> (devuelve el protocolo web utilizado (http: o https :) ) 
// window.location.protocol

// window.location.assign( )------> (carga un nuevo documento)
// window.location.assign( "url página")