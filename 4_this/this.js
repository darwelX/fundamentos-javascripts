class Persona {
  constructor(nombre, amigos = []){
    this.nombre = nombre;
    this.amigos = amigos;
  }

  saludar(){
    // si se hace referencia al contexto this dento de un ciclo se pierde la referencia al mismo
    // para ello se puede hacer una compia del contexto const _this = this; o hacer un bind(this)
    // para usar el contexto, una solucion mas limpia es usar las arrow function ya que ellas
    // inyectan el contexto de forma automatica
    this.amigos.forEach((amigo) => {
      console.log(`Hola soy ${this.nombre} y soy amigo de ${amigo}`);
    });
  }
}

const darwel = new Persona("Darwel", ['Joel', 'Danis', 'Pinto']);
darwel.saludar();