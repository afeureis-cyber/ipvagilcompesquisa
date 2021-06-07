/*require('dotenv').config()

const axios = require("axios");

exports.handler = async function(event, context, callback) {

  
 
  const url = `https://api.infosimples.com/api/v1/detran/sp/debitos.json?token=${process.env.API_KEY}&timeout=600&placa=FQO0023&renavam=01053051317`;
 
  

  const response = await axios.get(url);
 
  callback(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify(response.data)
  });

}*/

require('dotenv').config()
const axios = require('axios')



exports.handler = async (event, context, cb) => {
  const method = event.httpMethod

  if (method !== 'POST') {
    return {
      statusCode: 405,
      body: 'Only POST Requests Allowed',
    }
  }

  const { placa } = JSON.parse(event.body)
  const { renavam } = JSON.parse(event.body)
  try {
    const resp = await axios.get(`https://api.infosimples.com/api/v1/detran/sp/debitos.json?token=${process.env.API_KEY}&timeout=600&placa=${placa}&renavam=${renavam}`)
    return {
      headers:{
      'Access-Control-Allow-Origin': '*',
    },
      statusCode: 200,
      body: JSON.stringify(resp.data),
    }
  } catch (error) {
    return {
      statusCode: 404,
      body: JSON.stringify(error),
    }
  }
}







