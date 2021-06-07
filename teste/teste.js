
console.log('to aqui')


function success(pos) {


  
  
    fetch(`https://newsapi.org/v2/everything?q=tesla&from=2021-05-05&sortBy=publishedAt&apiKey=6dd58d9fd97f4dc58fba97b6c07937bc`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
  
        
        console.log('data :', data);
      });
  
  }
  
  
