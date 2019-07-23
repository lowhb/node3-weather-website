
const request = require('request');

const forecast = (latitude, longtitude, callback) => {
    const url = 'https://api.darksky.net/forecast/e30817cdba18b1082bfa73212af9885b/' + latitude + ',' + longtitude + '?units=si&lang=en';
        request ({ url, json: true }, (error, { body }) => {
            if (error){
                callback("Unable to connect to server", undefined);
            } else if (body.error){
                callback("Unable to get the location", undefined);
            } else {
                callback(undefined, body.daily.data[0].summary + 'It is currently ' + body.currently.temperature + ' degree. The high today is ' + body.daily.data[0].temperatureHigh + ' The low today is ' + body.daily.data[0].temperatureLow + ' There is a ' + body.currently.precipProbability + ' % chance ot rain.');
            }
        })
                     
}

module.exports = forecast;
