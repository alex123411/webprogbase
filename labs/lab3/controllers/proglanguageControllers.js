
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
       res.render('proglanguage',proglanguage);
       }
   },
getNew(req, res) {
res.render('new');
},
getProglanguages(req , res)
{

    const proglanguages = proglanguageRepository.getProgLanguages();
    let new_proglanguages = [];
    if (req.query.name_search != null) {
        search_str = req.query.name_search;
        for (const temp of proglanguages) {
            str = temp.name.toLowerCase();
            if (str.indexOf(search_str.toLowerCase()) == 0) {
                new_proglanguages.push(temp);
            }
        }
    } else {
        new_proglanguages = proglanguages;
    }
    //new_proglanguages = proglanguages;
    let page;
    if (req.query.page == null) {
        page = 1;
    } else {
        page = parseInt(req.query.page);
    }
    const amount = 5;
    const offset = (page - 1) * amount;
    max_page = Math.ceil(new_proglanguages.length / parseFloat(amount))
    new_proglanguages = new_proglanguages.slice(offset, offset + amount)
    let pages = [];
    for (let i = 1; i <= max_page; i++) {
        pages.push({ page: i });
    }
    if (new_proglanguages.length == 0) {

        res.render('proglanguages', { new_proglanguages, is_proglanguages: true, pages, search: req.query.name_search, Empty: true, });
    } else {
        res.render('proglanguages', { new_proglanguages, is_proglanguages: true, pages, search: req.query.name_search, });
    }
},

 
   addProglanguage(req , res)
   {
       if (req.body.name  == "" || req.body.founderName == "" || req.body.lastversion == "" || req.body.countofusers == ""|| req.body.lasteditData == "")
       {
            res.render('new', { invalid: true, });
       }else{
        let path = ""; 
        if(req.file != undefined)
        {
            path = req.file.path;
        }
        const x = new ProgLanguage(0, req.body.name, req.body.founderName, req.body.lastversion, req.body.countofusers, req.body.lasteditData, path);
        x.id = proglanguageRepository.addProgLanguage(x);
        res.render('proglanguage' , x);
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
        const Id = parseInt(req.params.id);
        proglanguageRepository.deleteProgLanguages(Id);
        res.render('proglanguage' , {is_deleted: true});

   }
};
