function get(URL, callback){
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function(){
    const DONE = 4;
    const OK = 200;

    if(DONE === this.readyState){
      if(OK === this.status){
        callback(null, JSON.parse(this.responseText));
      } else{
        callback(new Error(`Se produjo un error al realizar el request ${this.status}`))
      }
    }
  }

  xhr.open('GET', URL);
  xhr.send(null);
}

get('https://swapi.co/api/people/1/', function onResponse(err, luke){
  if (err){
    console.log(err);
    return;
  }else{
    let strUrl = JSON.stringify(luke.homeworld);
    let url = `https${strUrl.substring(5,strUrl.length -1)}`;
    get(url, function onReadyPlanet(err, homeLuke){
      if(err){
        console.log(err);
        return;
      }else{
        luke.homeworld = homeLuke;
        console.log(`${luke.name} nacio en ${homeLuke.name}`);
      }
    });
  }
});