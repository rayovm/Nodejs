async function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1500);
    });
}
function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('bla bla bla ...');
           //resolve(nombre);
           resolve('Hay un error');
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise ((resolve, reject) => {
        setTimeout(function() {
            console.log('Adios ' + nombre);
            resolve();
        }, 1000);
    });
}

async function main() {
    let nombre = await hola('Raymundo');
    await hablar();
    await hablar();
    hablar();
    hablar();
    hablar();
    await adios(nombre);
}

console.log('Empezamos el proceso');
main();
console.log('Termina el proceso');