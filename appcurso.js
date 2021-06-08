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

    const { bloqueio_furto } = data.data;

    const { restricao_administrativa } = data.data;

    const { restricao_financeira } = data.data;

    const { restricao_judiciaria } = data.data;

    const { restricao_tributaria } = data.data;

    const { registro_guincho } = data.data;

    const { inspecao_gnv } = data.data;



    result.innerHTML = `
    <hr><h6> <strong> Dados do Veículo </strong> </h6>
    <h6>Placa: <strong> ${placa} </strong> Renavam: <strong> ${renavam} </strong> </h6>
    
    <hr> <h6><strong>IPVA</strong></h6>
    <h6>${ipva}</h6>

    <hr> <h6><strong>Multas</strong></h6>
    <h6>${ multas_total }</h6>

    <hr> <h6><strong>Licenciamento</strong></h6>
    <h6><strong>Status do Licenciamento:</strong> ${ status_licenciamento }</h6>
    <h6><strong>Último Licenciamento:</strong> ${ ultimo_licenciamento }</h6>

    <hr> <h6><strong>Restrições</strong></h6>
    <h6><strong>Bloqueio de Furto/Roubo</strong> ${ bloqueio_furto }</h6>
    <h6><strong>Administrativas</strong> ${ restricao_administrativa }</h6>
    <h6><strong>Financeira</strong> ${ restricao_financeira }</h6>
    <h6><strong>Judiciária</strong> ${ restricao_judiciaria }</h6>
    <h6><strong>Tributária</strong> ${ restricao_tributaria }</h6>
    <h6><strong>Guincho</strong> ${ registro_guincho }</h6>

    <hr> <h6><strong>Inspeção Veicular</strong></h6>
    <h6><strong>Inspeção GNV</strong> ${ inspecao_gnv }</h6>

    `
    
    
    


    console.log('data :', data);

   

    

    
   
    
    
    
    
    
  } catch (error) {
   
  
  }
}






  

  



  


  






















  




   



