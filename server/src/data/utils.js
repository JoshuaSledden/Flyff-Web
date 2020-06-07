"use strict";

const fs = require("fs-extra");
const {join} = require("path");

/*  Load all Sql query files within a provided folder name
    and insert their contents to the "queries" object array labelled under their filename.
*/
const loadSqlQueries = async folderName => {
    const filePath = join(process.cwd(), "src", "data", folderName);
    const files = await fs.readdir(filePath);

    // Filter our files list to only contain files with the suffix of ".sql"
    const sqlFiles = files.filter(f => f.endsWith(".sql"));

    // Loop through all located files and add them to the queries object array.
    const queries = {};
    for(const sqlFile of sqlFiles) {
        const query = fs.readFileSync(join(filePath, sqlFile), {encoding: "UTF-8"});
        queries[sqlFile.replace(".sql", "")] = query; // Remove the filename suffix.
    }
    return queries;
}

module.exports = {
    loadSqlQueries
};