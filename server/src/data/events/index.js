"use strict";

const utils = require("../utils");

const register = async({sql, getConnection}) => {
    const sqlQueries = await utils.loadSqlQueries("events");
    
    const getEvents = async accountId => {
        const cnx = await getConnection();
        const request = await cnx.request();
        request.input("accountId", sql.VarChar(32), accountId);
        return request.query(sqlQueries.getEvents);
    };

    return {
        getEvents
    };
};

module.exports = {register};