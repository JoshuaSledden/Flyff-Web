"use strict";

module.exports.register = async server => {
    // Setup a route to listen for the root document request.
    server.route( {
        method: "GET",
        path: "/",
        handler: async (request, h) => {
            return "My first Hapi server!";
        }
    });
};