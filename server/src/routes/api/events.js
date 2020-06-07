"use strict";

module.exports.register = async server => {
    server.route({
        method: "GET",
        path: "/api/events",
        handler: async (request, h) => {
            try {
                // Access the sql client through the request.
                const dataClient = request.server.plugins.sql.client;
                const accountId = "test"; // Hard code for testing - to be changed.   

                // Call getEvents and return the response.
                const response = await dataClient.events.getEvents(accountId);
                
                // Return only the recordset as JSON.
                return response.recordset;
            } 
            catch(err) {
                console.log(err);
            }
        }
    })
}