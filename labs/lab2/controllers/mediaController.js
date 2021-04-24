
const MediaRepository = require('../repositories/mediaRepository');
const Media = require('../models/media');
const mediaRepository = new MediaRepository('data/medias.json');
const fs = require('fs');
const path = require('path');
 
module.exports =
{
   postMedia(req , res)
   {
       if(req.file == undefined)
       {
           res.status(400).send("400 Bad request");
       }else{
           const temp = new Media(0 , req.file.path);
           
           temp.id = mediaRepository.addMedia(temp);
           res.status(201);
           res.json(temp.id);
       }
   },
 
   getImage(req , res)
   {
       const imageId = parseInt(req.params.id);
       
       const image = mediaRepository.getMediaById(imageId);
       if(image == null)
       {
           res.status(404).send("404 Not found");
       }
       
       fs.createReadStream(path.resolve(__dirname + '/..' , image.path)).pipe(res);
   }
};
