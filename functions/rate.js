const fetch = require('node-fetch')

exports.handler = async function(event, context) {
  let obj = {}
  obj['base'] = event.queryStringParameters.base.toLowerCase()
  obj['quote'] = event.queryStringParameters.quote.toLowerCase()
  try {
    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${obj['base']}/${obj['quote']}.json`
    const res = await fetch(url)
    const data = await res.json()
    obj['rate'] = data[obj['quote']];

    return {
      statusCode: 200,
      body: JSON.stringify(obj)
    } 

  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message
      })
    }
  } 
}