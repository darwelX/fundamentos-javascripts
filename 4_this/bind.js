class Toggable {
  constructor(element){
    this.element = element;
    this.element.innerHTML = 'Off';
    this.activated = false;
    this.element.addEventListener('click', this.onClick.bind(this));
  }

  onClick(eve){
    this.activated = !this.activated;
    this.toggleText();
  }

  toggleText(){
    this.element.innerHTML = this.activated ? 'On':'Off';
  }
}

const boton = document.getElementById('boton');
const toggle = new Toggable(boton);
// la funcion bind aparte de inyectar el contexto tambien sirven para inyectar parametos despues del primer
// parametro de bind