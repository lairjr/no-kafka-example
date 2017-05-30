const Kafka = require('no-kafka');

const brokers = "kafka:9092";

const producer = new Kafka.Producer({
  connectionString: brokers,
});

let count = 0;

return producer.init().then(function() {
  count++;
  return producer.send({
    topic: 'darksouls',
    partition: 0,
    message: {
      value: `Hello ${count}`
    }
  });
}).then(function (result) {
  console.log('>>> producer sent message');
  /*
  [ { topic: 'kafka-test-topic', partition: 0, offset: 353 } ]
  */
});
