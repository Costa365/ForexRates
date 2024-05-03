const fetch = require('node-fetch')

exports.handler = async function(event, context) {
  let obj = {}
  obj['base'] = event.queryStringParameters.base.toLowerCase()
  obj['quote'] = event.queryStringParameters.quote.toLowerCase()
  try {
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${obj['base']}.json`
    const res = await fetch(url)
    const data = await res.json()
    obj['rate'] = data[obj['base']][obj['quote']];

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
