let base = 5; // la palabra reservada let es del estandar ES6 y se utiliza para declarar varibles esta palabra permite modificar el valor de la variable que es todo lo contrario de la palabra const
let altura = 7;
let width = 5;
let length = 8;

function calcular(base, altura){
  return base * altura / 2;
}

/*
 * Esta es una funcion arrow function con la palabra reservada const
 * la cual no permite cmabiar su definicion, no es necesario hacer un
 * return ya que se hace de manera explicita. si queremos colocar mas
 * de una linea de codigo usamos las llaves despues del operador =>
 */
const calcularFlecha = (base, altura) => base + altura / 2;

const areaRectangulo = (width, length) => width * length;

console.log(`El área de un triangulo con base ${base} y altura ${altura} es: ${calcularFlecha(base, altura)}`)
console.log(`El área de un rectangulo con un ancho de ${width} y largo de ${length} es: ${areaRectangulo(width, length)}`);