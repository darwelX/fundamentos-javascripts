function fibonacci(){
  let a = 0, b = 1;

  return {
    next: function(){
      f = a;
      a = b;
      b =  f + a;
      return {value: f, done: false};
    }
  }
}

const fibo = fibonacci();