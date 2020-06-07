"use strict";

const api = require("./api");

module.exports.register = async server => {
    // Await the api register route.
    await api.register(server);

    // Setup a route to listen for the root document request.
    server.route( {
        method: "GET",
        path: "/",
        handler: async (request, h) => {
            return "My first Hapi server!";
        }
    });
};