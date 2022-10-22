
console.log('Solicitar musica');
const tameImpala = new Promise((resolve, rejected) => {
    return resolve('The Less I Now The Better')
}); 

console.log('Carregando');

tameImpala.then(play => console.log(play));