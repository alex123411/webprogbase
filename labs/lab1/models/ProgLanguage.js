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