function saludarFamilia(apellido){
  return function saludarMienbro(nombre){
    console.log(`Hola ${nombre} ${apellido}`);
  }
}

const saludarQuintero = saludarFamilia('Quintero');
const saludarDuran = saludarFamilia('Duran');

saludarQuintero('Darwel');
saludarQuintero('Flor');
saludarDuran('Astrid');
saludarDuran('Humberto');

const prefijo = (prefijo) => {
  return function palabra(palabra){
    console.log(`${prefijo}${palabra}`);
  }
}

const prefijoRe = prefijo('re');
const prefijoMalo = prefijo('mal');

prefijoRe('bueno');
prefijoMalo('parrido');