const JsonStorage = require('../jsonStorage');
const Media = require('../models/media');
 
class MediaRepository
{
   constructor(filepath) {
       this.storage = new JsonStorage(filepath);
   }
 
   addMedia(entityModel) {
        var items = this.storage.readItems();
        entityModel.id = this.storage.nextId;
        items[items.length] = entityModel;
        this.storage.writeItems(items);
        this.storage.incrementNextId();
        return entityModel.id;
   }
 
   getMedias() {
       let medias = [];
       const items = this.storage.readItems();
       if (items === null) {
           return medias;
       }
       for (const item of items) {
           medias.push(new Media(item.id, item.path));
       }
       return medias;
   }
 
   getMediaById(entityId) {
       const items = this.storage.readItems();
       for(const item of items)
       {
           if(item.id == entityId)
           {
               return new Media(item.id , item.path);
           }
       }
       return null;
   }
 
};
 
module.exports = MediaRepository;