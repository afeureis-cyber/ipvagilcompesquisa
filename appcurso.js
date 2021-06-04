
//const result = document.querySelector('.result');

//const fetchData = async () => {
//try {

 //const {data} = await axios.get('/.netlify/functions/1-hello');
//console.log(data);
    //result.textContent = data
    
//} catch (error) {
    //console.log(erro.response);

    
//}
    


//}

//fetchData()

const formAPI = document.querySelector('.formAPI')
const inPlaca = document.querySelector('.inPlaca')
const inRenavam = document.querySelector('.inRenavam')
const result = document.querySelector('.result');



function success(pos){

    formAPI.addEventListener('submit',(e)=>{
        event.preventDefault()
        let placa = inPlaca.value 
        let renavam = inRenavam.value 
        const options = {
          method: 'GET',
          mode: 'cors',
          cache: 'defaut'
        }

        
    

    fetch (`/netlify/functions/1-hello?placa=${placa}&renavam=${renavam}`, options)
    .then(response=>response.json())
    .then(data => show(data))

  })
  .catch(e => console.log('Deu erro'))

}

















  




   



