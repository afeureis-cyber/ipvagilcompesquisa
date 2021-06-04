require('dotenv').config()

const axios = require("axios");

exports.handler = async function(event, context, callback) {

  const placa = "FQO0023"
  const renavam = "01053051317"
  const url = `https://api.infosimples.com/api/v1/detran/sp/debitos.json?token=${process.env.API_KEY}&timeout=600&placa=${placa}&renavam=${renavam}`;
 
  const response = await axios.get(url);
 
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(response.data)
  });

}


