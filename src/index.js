"use strict";

// Include the module and configuration modules.
const server = require("./server");
const config = require("./config");

const startServer = async () => {
    try {
        // Await the creation of the server app with our config and start the server.
        const app = await server(config);
        await app.start();
        
        console.log(`Server running at http://${config.host}:${config.port}`);
    }
    catch(err) {
        console.log("Startup error", err);
    }
}

// Launch the server.
startServer();