class Punto  {
  constructor (x, y){
    this.x = x;
    this.y = y;
  }

  moverEnX(x){
    this.x += x;
  }

  moverEnY(y){
    this.y += y;
  }

  distancia(p){
    let x = this.x - p.x;
    let y = this.y - p.y;
    return Math.sqrt((x * x) + (y * y)).toFixed(2);
  }
}

// si se quiere modificar un metodo en ejecucion se puede hacer de dos formas
// objeto.__proto__.metodo = (logica) esto altera el metodo para todas las instancias del objeto
// objeto.metodo = (logica) esto altera el metodo para solo la instancia
const p1 = new Punto(0,4);
const p2 = new Punto(3, 0);
console.log(`La distancia entre p1 y p2 es: ${p1.distancia(p2)}`);
console.log(`La distancia entre p2 y p1 es: ${p2.distancia(p1)}`);
p1.moverEnX(10);
console.log(`La distancia entre p1 y p2 es: ${p1.distancia(p2)}`);
