console.log('hola');
setTimeout(function(n){
  console.log(`hola ${n}`);
}, 0);
// cuando se utiliza llamados asincronos hay que evitar cuellos de botella
// que hacen demorar la ejecuion, se aconceja reducir al minimo las sentencias
// que produzcan tales retardos
for(let i = 0; i < 999999999999; i++) ;
console.log('chao');