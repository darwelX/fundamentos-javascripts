const startWars7 = "El despertar de la fuerza";
const pgStartWars7 = 13;
let p1 = "Darwel";
let e1 = 32;
let p2 = "Enmanuel";
let e2 = 4;

const verPeliculaStartWars = (edad, nombre, isAdulto = false) => {
  if(edad >= pgStartWars7 ){
    alert(`Ud puede pasar a mirar ${startWars7} porque tiene la edad apropiada`);
  }else if(isAdulto){
    alert(`Ud. puede pasar a ver la pelicula ${startWars7} porque es adulto`);
  }else{
    alert(`Ud no puede ver la pelicula ${startWars7}, porque tiene ${edad} años y la edad minima es ${pgStartWars7}`)
  }
}

verPeliculaStartWars(e1,p1);
verPeliculaStartWars(e2,p2, true);