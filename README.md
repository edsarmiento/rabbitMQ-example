# RabbitMQ JavaScript Demo

A simple demonstration of RabbitMQ message queuing using Node.js and the `amqplib` library. This project shows basic publish/subscribe patterns with RabbitMQ.

## Prerequisites

- Node.js (v12 or higher)
- Docker (optional, for running RabbitMQ in a container)
- npm (Node Package Manager)

## Docker Setup

If you don't have RabbitMQ installed locally, you can run it using Docker:

```bash
docker run -d --hostname my-rabbit --name rabbitmq \
  -p 5672:5672 -p 15672:15672 \
  rabbitmq:3-management
```

Ports:
- 5672: RabbitMQ broker port
- 15672: Management UI (http://localhost:15672)

Default login credentials:
- Username: guest
- Password: guest

## Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd rabbitmq-js-demo
```

2. Install dependencies:
```bash
npm install
```

## Project Structure

- `send.js` - Message publisher that sends messages to RabbitMQ
- `receive.js` - Message consumer that receives messages from RabbitMQ
- `package.json` - Project configuration and dependencies

## Usage

1. Make sure RabbitMQ server is running locally on the default port (5672)

2. Start the consumer in one terminal:
```bash
node receive.js
```

3. Start the publisher in another terminal:
```bash
node send.js
```

The publisher will send a "Hello RabbitMQ!" message, and the consumer will receive and display it.

## Features

- Simple message publishing and consuming
- Asynchronous message handling
- Basic queue management
- Connection and channel management

## Dependencies

- amqplib (^0.10.8) - RabbitMQ client for Node.js

## License

ISC

## Contributing

Feel free to submit issues and enhancement requests! 