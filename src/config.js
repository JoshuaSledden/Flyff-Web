"use strict";

// Config.js - Obtains environment variables and exports them into a more readable fashion.

const dotenv = require("dotenv");
const assert = require("assert");

dotenv.config();

const {
    PORT,
    HOST,
    HOST_URL,
    COOKIE_ENCRYPT_PWD,
    SQL_SERVER,
    SQL_DATABASE,
    SQL_USER,
    SQL_PASSWORD,
    FLYFF_ORG_URL,
    FLYFF_CLIENT_ID,
    FLYFF_CLIENT_SECRET
} = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT == "true";

// Check the required variables are available.
assert(PORT, "PORT is required");
assert(HOST, "HOST is required");
assert(HOST_URL, "HOST_URL is required");
assert(COOKIE_ENCRYPT_PWD, "COOKIE_ENCRYPT_PWD is required");
assert(SQL_SERVER, "SQL_SERVER is required");
assert(SQL_DATABASE, "SQL_DATABASE is required");
assert(SQL_USER, "SQL_USER is required");
assert(SQL_PASSWORD, "SQL_PASSWORD is required");
assert(FLYFF_ORG_URL, "FLYFF_ORG_URL is required");
assert(FLYFF_CLIENT_ID, "FLYFF_CLIENT_ID is required");
assert(FLYFF_CLIENT_SECRET, "FLYFF_CLIENT_SECRET is required");

// Export all config variables as a single accessible object.
module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    cookiePwd: COOKIE_ENCRYPT_PWD,

    sql: {
        server: SQL_SERVER,
        database: SQL_DATABASE,
        user: SQL_USER,
        password: SQL_PASSWORD,
        options: {
            encrypt: sqlEncrypt,
            enableArithAbort: true
        }
    },
    
    flyff: {
        url: FLYFF_ORG_URL,
        clientId: FLYFF_CLIENT_ID,
        clientSecret: FLYFF_CLIENT_SECRET
    }
}