/*
 *al clonar el objeto se evita alterar el objeto original
 */
let darwel = {nombre: 'Darwel', apellido: 'Quintero', edad: 33};

function cumple(persona){
  //.assign() copia el parametro 2 al paramtro 1
  let clone = Object.assign({},persona);
  clone.edad++;
  return clone;
}
