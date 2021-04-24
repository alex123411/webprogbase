
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
        console.log("123")
        const image_path = req.params.path;
        res.contentType('image/jpeg');
        fs.createReadStream(path.resolve(__dirname + '/../data/media', image_path)).pipe(res);

   }
};
