const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f5ca50268ffd0b8c07cd4099a2f2f9c1&query=' + latitude + ',' + longitude + '&units=f'

    request({url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. The temprature is ' + body.current.temperature + ' but it feels like ' + body.current.feelslike + ' degrees outside and the humidity is ' + body.current.humidity + '% and the cloud cover ' + body.current.cloudcover + '% of the sky #) Have fun out there!')
        }
    })
}
module.exports = forecast