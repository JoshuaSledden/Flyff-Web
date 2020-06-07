"use strict";

// api/index.js - The entrypoint for api routes to be registered.

const events = require("./events");

module.exports.register = async server => {
    await events.register(server);
}