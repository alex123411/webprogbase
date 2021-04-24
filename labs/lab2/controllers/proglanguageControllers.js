
const ProgLanguage = require('./../models/ProgLanguage.js');
const ProgLanguageRepository = require('./../repositories/ProgLanguageRepository');

const { json } = require('body-parser');
const proglanguageRepository = new ProgLanguageRepository('data/proglanguages.json')
 
module.exports =
{
   getProglanguage(req , res)
   {
       const proglanguageId = parseInt(req.params.id);
       const proglanguage = proglanguageRepository.getProgLanguagesById(proglanguageId);
       if(proglanguage == null)
       {
           res.status(404).send("404 Not found");
       }else{
       res.json(proglanguage);
       }
   },
 
   getProglanguages(req , res)
   {
        if(req.query.page == null || req.query.size == null)
        {
            res.status(400).send("400 Bad request");
        }else{
        const page = parseInt(req.query.page);
        const amount = parseInt(req.query.size);
        const offset = (page - 1)*amount;
        const proglanguages = proglanguageRepository.getProgLanguages();
        const new_proglanguageRepository = proglanguages.slice(offset , offset + amount);
        res.json(new_proglanguageRepository);
        }
   },
 
   addProglanguage(req , res)
   {
       if(req.body.name  == null || req.body.founderName == null || req.body.lastversion == null || req.body.countofusers == null|| req.body.lasteditData == null)
       {
           res.status(400).send("400 Bad request");
       }else{
       const x = new ProgLanguage(0 , req.body.name , req.body.founderName , req.body.lastversion , req.body.countofusers , req.body.lasteditData);
       x.id = proglanguageRepository.addProgLanguage(x);
       res.status(201);
       res.json(x);
       }
   },
 
   updateProglanguage(req , res)
   {
       if(req.body.name  == null || req.body.founderName == null || req.body.lastversion == null || req.body.countofusers == null|| req.body.lasteditData == null)
       {
           res.status(400).send("400 Bad request");
       }else{
       const x = new ProgLanguage( req.body.id , req.body.name , req.body.founderName , req.body.lastversion , req.body.countofusers , req.body.lasteditData);
       if(proglanguageRepository.updateProgLanguages(x) == null)
       {
           res.status(404).send("404 Not found");
       }else{
       res.json(x);
       }
       }
   },
 
   deleteProglanguage(req ,res)
   {
       const proglanguageId = parseInt(req.params.id);
       const temp = proglanguageRepository.getProgLanguagesById(proglanguageId);
       if(proglanguageRepository.deleteProgLanguages(proglanguageId) == null)
       {
           res.status(404).send("404 Not found");
       }else{
           res.json(temp);
       }
   }
};
