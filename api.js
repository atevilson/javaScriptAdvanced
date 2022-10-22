const https = require('https')
const API = 'https://restcountries.com/v3.1/all'
https.get(API, res => {
    console.log(res.statusCode)
})

console.log('Connect API')