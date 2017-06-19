var nombre = "Darwel";

function saludar(nombre){
  nombre = 'Alfonso' // se debe anteponer la palabra var para que no altere variables con el mismo nombre 
                    // declaradas fuera de la funcion
  console.log(`Hola ${nombre}`);
}
saludar();
console.log(`El valor de la varible nombre es ${nombre}`);

function saludar2(nombre){
  for(let i = 0; i < 10; i ++){ // al anteponer la palabra let nos aseguramos de que el ambito donde exista 
                                // la variable se el ciclo for, por lo caul se ahorra problemas de memoria y 
                                // posibles confuciones de uso de varibles multiples veces ya que si no colocamos 
                                //la palabra let y la dejamos vacia o con la palabra var i existe fuera del ciclo for
    console.log(`Hola ${nombre}`);
  }
  console.log(`i vale ${i}`);
}
saludar2('Darwel');