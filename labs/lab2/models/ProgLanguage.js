// models/ProgLanguage.js

/**
 * @typedef ProgLanguage
 * @property {integer} id
 * @property {string} name.required - unique username
 * @property {string} founderName - language founder
 * @property {string} lastversion - last version of language
 * @property {string} countofusers - count of users
 * @property {string} lasteditData - data
 */

class ProgLanguage {

    constructor(id, name, founderName, lastversion, countofusers ,lasteditData) {
        this.id = id;  // number
        this.name = name;  // string
        this.founderName = founderName;  // string
        this.lastversion = lastversion;
        this.countofusers = countofusers;
        this.lasteditData = lasteditData;
        // TODO: More fields
    }
 };
 
 module.exports = ProgLanguage;