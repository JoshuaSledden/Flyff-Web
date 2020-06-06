"use strict";

// Require the entire data folder which initialize and read in all the Sql files.
const dataClient = require("../data");

// In order to be a plugin in the Hapi framework you have to export a specific object.
module.exports = {
    name: "sql",
    version: "1.0.0",

    register: async server => {
        const config = server.app.config.sql;
        const client = await dataClient(server, config);

        // Expose the database client to the rest of the application via Hapi's expose function.
        server.expose("client", client);
    }
}