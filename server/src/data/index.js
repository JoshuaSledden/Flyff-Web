"use strict";

const events = require("./events");
const sql = require("mssql");

const client = async (server, config) => {
    let pool = null;

    // Attempt to close an existing connection pool.
    const closePool = async () => {
        try {
            await pool.close();
            pool = null;
        }
        catch(err) {
            pool = null;
            console.log(err);
        }
    };

    // Attempt to connect to an Sql server.
    const getConnection = async() => {
        try {
            if(pool) {
                return pool;
            }

            pool = await sql.connect(config);
            pool.on("error", async err => {
                console.log(err);
                await closePool();
            });

            return pool;
        }
        catch(err) {
            console.log(err);
            pool = null;
        }
    }

    return {
        events: await events.register({sql, getConnection})
    };
}

module.exports = client;