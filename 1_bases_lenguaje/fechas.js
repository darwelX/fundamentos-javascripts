const dias = [
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado"
]
// al men se le resta 1 = 12 -1
const nacimiento = new Date(1983, 11, 26);
const hoy = new Date();
let edad = hoy - nacimiento / 31536000000
const proximo = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate());
console.log(`Cumple el ${dias[proximo.getDay()]}`)