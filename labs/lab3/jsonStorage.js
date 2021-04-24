// jsonStorage.js

class JsonStorage {
    // filePath - path to JSON file
    constructor(filePath) {
        this.filePath = filePath;
    }

    get nextId() {       
        var fs = require('fs');
        var buffer = fs.readFileSync(this.filePath);
        const obj = JSON.parse(buffer);
        return obj.nextId;       
    }
 
    incrementNextId() {
        
        var x = this.nextId;
        x++;
        
        const fs = require('fs'); 
        var buffer = fs.readFileSync(this.filePath);
        const objd = JSON.parse(buffer); 
        objd.nextId = x;       
        fs.writeFileSync(this.filePath, JSON.stringify(objd, null ,4)); 
        return x;      
    }
 
    readItems() {
        // TODO: return all items from JSON file
        var fs = require('fs');
        var buffer = fs.readFileSync(this.filePath);
        const obj = JSON.parse(buffer);        
        return obj.items;
    }
 
    writeItems(items) {
        const fs = require('fs'); 
        var buffer = fs.readFileSync(this.filePath);
        const obj = JSON.parse(buffer); 
        obj.items = items;       
        fs.writeFileSync(this.filePath, JSON.stringify(obj, null ,4));
    }
};
 
module.exports = JsonStorage;
