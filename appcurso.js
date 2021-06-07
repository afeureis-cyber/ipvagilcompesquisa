/*const result = document.querySelector('.result')


function success(pos) {



    const placa = `FQO0023`
    const renavam = `01053051317`
    const url = (`/.netlify/functions/1-hello`);

    console.log(placa)
    
  
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        
  
        
        
        
        console.log('data :', data);
      });
  
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }*/

const form = document.querySelector('.formAPI')
const inPlaca = document.querySelector('.inPlaca')
const inRenavam = document.querySelector('.inRenavam')
const result = document.querySelector('.result')


form.addEventListener('submit', (event) => {
  event.preventDefault()
  const placa = inPlaca.value
  const renavam = inRenavam.value
  console.log(placa)
  console.log(renavam)
  getPlacaRenavam(placa, renavam)
})

async function getPlacaRenavam(placa, renavam) {
  
  try {
    const { data } = await axios.post(`/.netlify/functions/1-hello`, {placa, renavam})
   
    

    console.log('data :', data);
    
    
    
  } catch (error) {
    console.log(error.response)
  
  }
}

  

  



  


  






















  




   



