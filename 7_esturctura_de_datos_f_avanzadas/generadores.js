/*
 *esta es una forma de recurcion en la cual se ejecuta cada vez
 *que llamamos al metodo next y este retorna un iterator con un
 *value y none el valor de value es la variable que tenga precedido
 *la palabra yield y se reinicia el ciclo del generador al pasar
 *true al metodo next() 
 */
function* fibonacci(){
  let a = 0, b = 1;

  while(true){
    let f = a;
    a = b;
    b = f + a;
    let reset = yield f;
    if(reset) a = 0, b = 1;
  }
}

const fibo = fibonacci();
fibo.next()