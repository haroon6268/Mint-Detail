const { Client, Enviroment, Environment } = require("square");

const client = new Client({
  bearerAuthCredentials: {
    accessToken: process.env.SQUARE_ACCESS,
  },
  environment: Environment.Sandbox,
});

module.exports = client;
