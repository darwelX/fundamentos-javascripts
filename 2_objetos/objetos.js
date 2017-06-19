const p1 = {
  x: 0,
  y: 4
};

const p2 = {
  x: 3,
  y: 0
};

function calcularDistancia(ejeX,ejeY){
  const x = ejeX.x - ejeY.x;
  const y = ejeY.y - ejeY.y;

  return Math.sqrt(x * x + y * y);
}

console.log(`La distancia entre dos puntos es ${calcularDistancia(p1,p2)}`)
