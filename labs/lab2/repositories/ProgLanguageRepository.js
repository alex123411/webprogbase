// repositories/ProgLanguageRepository.js

const ProgLanguage = require('../models/ProgLanguage.js');

const JsonStorage = require('../jsonStorage');
 
class ProgLanguageRepository {
 
    constructor(filePath) {
        this.storage = new JsonStorage(filePath);
    }

 
    getProgLanguages() { 
        const items = this.storage.readItems();
        return items; 
    }
 
    getProgLanguagesById(id) {
        console.log(id);
        const items = this.storage.readItems();
        for (const item of items) 
        {
            if (item.id === id) 
            {
                return new ProgLanguage(item.id, item.name, item.founderName, item.lastversion, item.countofusers, item.lasteditData);
            }
        }
        return null;
    }

    addProgLanguage(proglanguageModel = new ProgLanguage()) {
        var items = this.storage.readItems(); 
        console.log('Count of languages: ',items.length);
        proglanguageModel.id = this.storage.nextId;
        items[items.length] = proglanguageModel;
        this.storage.writeItems(items);
        this.storage.incrementNextId();
    }
 
    updateProgLanguages(proglanguageModel = new ProgLanguage()) {
        const items = this.storage.readItems();
        var x = 0;
        for (const item of items) {
            x++;
            if (item.id === proglanguageModel.id) {
                items[x-1] = proglanguageModel;
                this.storage.writeItems(items);
                return 1;
            }
        }
        return null;
    }
 
    deleteProgLanguages(id) {
        console.log(id);
        const items = this.storage.readItems();
        var x = 0;
        for (const item of items) {
            x++;
            if (item.id === id) {
                items.splice(x-1,1);
                this.storage.writeItems(items);
                return 1;              
            }
        }
        return null;
    }
};
 
module.exports = ProgLanguageRepository;