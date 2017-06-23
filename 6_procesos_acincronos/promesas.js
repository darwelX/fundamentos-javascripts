function get(URL){
  return new Promise( (resolve, reject) =>{
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      const DONE = 4;
      const OK = 200;

      if(DONE === this.readyState){
        if(OK === this.status){
          resolve(JSON.parse(this.responseText));
        } else{
          reject(new Error(`Se produjo un error al realizar el request ${this.status}`))
        }
      }
    }

    xhr.open('GET', URL);
    xhr.send(null);    
  });
}

let luke = {};
get('https://swapi.co/api/people/1/')
.then(function(response){
  luke = response;
  let strUrl = JSON.stringify(luke.homeworld);
  let url = `https${strUrl.substring(5,strUrl.length -1)}`;
  return get(url)
})
.then(function(response){
  luke.homeworld = response;
  console.log(`${luke.name} nacio en ${luke.homeworld.name}`);
})
.catch(function(err){
  console.log(err);
});
