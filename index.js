var mqtt = require('mqtt')
var mqttClient = mqtt.connect('mqtt://192.168.0.2')
var ds18b20 = require('ds18b20');

mqttClient.on('connect', ()=> {

  setInterval(function() {
    ds18b20.temperature('', (err, value) => {
      mqttClient.publish('temp', '' + value)
      console.log('Current temp is ', value);
    });  
  }, 1000);
});

