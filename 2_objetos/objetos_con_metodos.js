const p1 = {
  x: 0,
  y: 4,
  moverEnX(x){
    this.x +=x 
  },
  moverEnY(y){
    this.y +=y
  }
};

const p2 = {
  x: 3,
  y: 0,
  moverEnX(x){
    this.x +=x 
  },
  moverEnY(y){
    this.y +=y
  }
};

function calcularDistancia(ejeX,ejeY){
  const x = ejeX.x - ejeY.x;
  const y = ejeX.y - ejeY.y;

  return Math.sqrt(x * x + y * y);
}
p1.moverEnX(5);
console.log(`La distancia entre dos puntos es ${calcularDistancia(p1, p2)}`);
