contador = 1;
/*
 * la tecnica de memoria sirve para llamados recursivos
 * de gran tamaño ya que para un llamado de nuemero menor
 * no se nota la diferencia con el llamado recursivo 
 * tradicional
 */
function fibonacci(num, memoria = {}){
  contador++;
  console.log(memoria);
  if(memoria[num]) return memoria[num];
  if(num == 1) return 0;
  if(num == 2) return 1;

  return memoria[num]= fibonacci(num - 1, memoria) + fibonacci(num -2, memoria);
}
