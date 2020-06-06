"use strict";

// Server.js - A module for creating/configuring the Hapi server.

const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const app = async config => {
    // Destruct the host and port from the configuration object.
    const {host, port} = config;

    // Create the Hapi server and provide it our configuration.
    const server = Hapi.server({host, port});
    server.app.config = config;

    // Register the server routes.
    await routes.register(server);
    return server;
}

module.exports = app;