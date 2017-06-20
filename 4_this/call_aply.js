const darwel = {
  nombre: 'Darwel',
  apellido: 'Quintero'
}

function saludar(veces, uppercase){
  let str = `Hola ${this.nombre} ${this.apellido}`;
  str = uppercase ? str.toUpperCase() : str;
  for(let i = 0; i < veces; i++){
    console.log(str);
  }
}
const params = [3,true];
// haciendo el llamado con call o apply se puede inyectar el contexto y a la ves ejecutar la funcion
saludar.call(darwel, ...params);