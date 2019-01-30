var mqtt = require('mqtt')
var mqttClient = mqtt.connect('mqtt://localhost')
var ds18b20 = require('ds18b20');

mqttClient.on('connect', ()=> {

  setInterval(function() {
    ds18b20.temperature('28-031700658aff', (err, value) => {
      mqttClient.publish('home/bedroom/m', '' + value)
    });  
  }, 1000);
});

