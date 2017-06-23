

async function getLuke(){
  try{
    const response = await fetch('https://swapi.co/api/people/1/');
    let luke = {};
    luke = await response.json();
    let strUrl = JSON.stringify(luke.homeworld);
    let url = `https${strUrl.substring(5,strUrl.length -1)}`;
    const responseHomeLuke = await fetch(url);
    luke.homeworld = response;
    console.log(`${luke.name} nacio en ${luke.homeworld.name}`);
  }catch(err){
    console.log(err);
  }
}