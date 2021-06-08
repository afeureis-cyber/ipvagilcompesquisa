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

    const { ipva } = data.data;

    const { multas_total } = data.data;

    const { status_licenciamento } = data.data;

    const { ultimo_licenciamento } = data.data;


    result.innerHTML = `<hr> <h6>IPVA: ${ ipva }</h6>
    <hr> <h6>Multas: ${ multas_total }</h6>
    <hr> <h6>Status do Licenciamento: ${ status_licenciamento }</h6>
    <hr> <h6>Último Licenciamento: ${ ultimo_licenciamento }</h6>`
    
    
    


    console.log('data :', data);

    

    
   
    
    
    
    
    
  } catch (error) {
   
  
  }
}






  

  



  


  






















  




   



