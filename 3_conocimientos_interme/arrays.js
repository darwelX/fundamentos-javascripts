/*
 * el parametro ...numeros se le antepone 3 puntos para recibir una serie de 
 * valores sin tener que declararlos en la funcion, estos valores se 
 * almacena como un array
 */
function suma(...numeros){
  /*
   * el motodo reduce itera subre los elementos de un array y con la palabra return 
   * le pasa el valor al siguiente elemento
   */
  return numeros.reduce(function (acum, numero){
    acum += numero;
    return acum;
  },0); // el 0 es el  valor inicial de la varibles acum
}

function dobles(...numeros){
  // map es una funcion especial de arrays que itera sobre todos los elementos de los arreglos 
  // con cierta logica dentro de la funcion definida dentro de map y retorna un nuevo arreglo
  return numeros.map(numero => numero *2);
}

function pares(...numeros){
  // la funcion filter itera sobre cada elemento del arreglo y retorna aquellos elementos
  // donde la la exprecion sea verdadera
  return numeros.filter(function(numero){
    return numero % 2 == 0;
  })
}
console.log(suma(1,2));
console.log(dobles(2,3));