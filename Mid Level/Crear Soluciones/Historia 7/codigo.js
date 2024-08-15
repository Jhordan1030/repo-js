// let alto = window.screen.height;
// let ancho = window.screen.width;
// comprar = confirm(`El alto es: ${alto},  el ancho es: ${ancho}`);

// if(comprar){
//     alert("compra realizada exitosamente")
// }else{
//     alert("compra cancelada")
// }

let href = window.location.href;
let pathaname = window.location.pathaname;
let hostname = window.location.hostname;
let protocol= window.location.protocol;

let html = `Protocolo: <b>${protocol}</b></b><br>`;
html += `hostname: <b>${hostname}</b></b><br>`;
html += `Pathname: <b>${pathaname}</b></b><br>`;
html += `URL Completa: <b>${href}</b></b><br>`;

document.write(html)