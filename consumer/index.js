const Kafka = require('no-kafka');
const brokers = "kafka:9092";

const consumer = new Kafka.GroupConsumer({
  connectionString: brokers,
});

const dataHandler = function (messageSet, topic, partition) {
  return Promise.all(messageSet.map((m) => {
    console.log('>>>> ', topic, partition, m.offset, m.message.value.toString('utf8'));
    // commit offset
    return consumer.commitOffset({topic: topic, partition: partition, offset: m.offset, metadata: 'optional'});
  }));
};

const strategies = [{
  subscriptions: ['darksouls'],
  handler: dataHandler
}];

consumer.init(strategies);
