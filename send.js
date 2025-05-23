const amqp = require('amqplib');

async function send() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  const queue = 'hello';
  const msg = 'Hello RabbitMQ!';

  await channel.assertQueue(queue, { durable: false });
  channel.sendToQueue(queue, Buffer.from(msg));

  console.log(` [x] Sent: "${msg}"`);

  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
}

send();

