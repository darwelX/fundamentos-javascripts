let vidaGoku = 100;
let vidaSuperman = 100;
const min_power = 5;
const max_power = 12;

const ambosSiguenVivos = () => vidaGoku > 0 && vidaSuperman > 0;
const gokuSigueVivo = () => vidaGoku > 0;
const calcularGolpe = () => Math.round(Math.random() * (max_power - min_power) + min_power);
let raound = 1;
while(ambosSiguenVivos()){
  console.log(`Raound ${raound}`);
  const golpeGoku = calcularGolpe();
  const golpeSuperman = calcularGolpe();

  if(golpeGoku > golpeSuperman){
    console.log(`Goku ataca a Superman con un golpe de ${golpeGoku}`);
    vidaSuperman -= golpeGoku;
    console.log(`Superman queda en ${vidaSuperman} de vida`);
  }else{
    console.log(`Superman ataca a Goku con un golpe de ${golpeSuperman}`);
    vidaGoku -= golpeSuperman;
    console.log(`Goku queda en ${vidaGoku} de vida`);
  }
  raound++;
}

if(gokuSigueVivo()){
  console.log(`Goku gano la pelea. Tiene vida de ${vidaGoku}`);
}else{
  console.log(`Superman gano la pelea. Tiene vida de ${vidaSuperman}`);
}