const dias = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes"
]

function correr(){
  const max = 15;
  const min = 5;
  // Math.floor rendondea hacia abajo 3.9 = 3
  // Math.ceil redondea para arriba 3.1 = 4
  // Math.round redondea dependiendo 3.1 = 3, 3.5 = 4
  return Math.round(Math.random() * (max -min)) + min;
}

let totalKms = 0;
const length = dias.length;
for(let i = 0; i < length; i++){
  const kms = correr();
  totalKms += kms;
  console.log(`El dia  ${dias[i]} corrio ${kms}kms`)
}
console.log(`Corrio en promedio ${totalKms/length}kms`);