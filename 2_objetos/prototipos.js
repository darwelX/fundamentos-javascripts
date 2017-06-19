function Punto(x, y){
  this.x = x;
  this.y = y;
}

// si se quiere modificar un metodo en ejecucion se puede hacer de dos formas
// objeto.__proto__.metodo = (logica) esto altera el metodo para todas las instancias del objeto
// objeto.metodo = (logica) esto altera el metodo para solo la instancia
Punto.prototype.moverEnX= function moverEnX(x){
  this.x +=x;
}

Punto.prototype.moverEnY= function moverEnY(y){
  this.y += y;
}

Punto.prototype.distancia = function distancia(p){
  const x = this.x - p.x;
  const y = this.y - p.y;
  return Math.sqrt(x * x + y * y).toFixed(2);
}
const p1 = new Punto(0,4);
const p2 = new Punto(3, 0);

console.log(`La distancia entre p1 y p2 es: ${p1.distancia(p2)}`);
console.log(`La distancia entre p2 y p1 es: ${p2.distancia(p1)}`);
p1.moverEnX(10);
console.log(`La distancia entre p1 y p2 es: ${p1.distancia(p2)}`);
