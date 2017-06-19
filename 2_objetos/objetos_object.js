const Punto = {
  init: function (x, y){
    let obj = Object.create(this);
    this.x = x;
    this.y = y;
  },
  moverEnX: function(x){
    this.x += x;
  },
  moverEnY: function(y){
    this.y += y;
  },
  distancia: function(p){
    let x = this.x - p.x;
    let y = this.y - p.y;
    return Math.sqrt((x * x) + (y * y)).toFixed(2);
  }
}

// si se quiere modificar un metodo en ejecucion se puede hacer de dos formas
// objeto.__proto__.metodo = (logica) esto altera el metodo para todas las instancias del objeto
// objeto.metodo = (logica) esto altera el metodo para solo la instancia
const p1 = Object.create(Punto);
p1.init(0,4);
const p2 = Object.create(Punto);
p2.init(3, 0);
console.log(`La distancia entre p1 y p2 es: ${p1.distancia(p2)}`);
console.log(`La distancia entre p2 y p1 es: ${p2.distancia(p1)}`);
p1.moverEnX(10);
console.log(`La distancia entre p1 y p2 es: ${p1.distancia(p2)}`);
