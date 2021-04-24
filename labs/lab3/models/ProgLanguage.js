// models/ProgLanguage.js

/**
 * @typedef ProgLanguage
 * @property {integer} id
 * @property {string} name.required - unique username
 * @property {string} founderName - language founder
 * @property {string} lastversion - last version of language
 * @property {string} countofusers - count of users
 * @property {string} lasteditData - data
 * @property {string} path - path
 */

class ProgLanguage {

    constructor(id, name, founderName, lastversion, countofusers ,lasteditData, path) {
        this.id = id;  // number
        this.name = name;  // string
        this.founderName = founderName;  // string
        this.lastversion = lastversion;
        this.countofusers = countofusers;
        this.lasteditData = lasteditData;
        this.path = path;
        // TODO: More fields
    }
 };
 
 module.exports = ProgLanguage;