const express = require('express');
const app = express();
const apiRouter = require('./routes/apirouter');
port = process.env.port || 4444;
 
const expressSwaggerGenerator = require('express-swagger-generator');
const expressSwagger = expressSwaggerGenerator(app);
const options = {
   swaggerDefinition: {
       info: {
           description: 'http api server',
           title: 'lab2',
           version: '1.0.0',
       },
       host: 'localhost:4444',
       produces: [ "application/json" ],
   },
   basedir: __dirname,
   files: ['./routes/**/*.js', './models/**/*.js'],
};
expressSwagger(options);
 
app.use('/api' , apiRouter);
 
app.listen(port , err => {
   if(err)
   {
       return console.log("ERROR" , err);
   }
   console.log('listening on port ${port}');
});



/*const readlineSync = require('readline-sync');

const ProgLanguage = require('./models/ProgLanguage.js');


const JsonStorage = require('./jsonStorage.js');
const object = new JsonStorage("./data/users.json"); 

const UserRepository = require('./repositories/userRepository');
const userRepository = new UserRepository('./data/users.json');

const ProgLanguageRepository = require('./repositories/ProgLanguageRepository');
const progLanguageRepository = new ProgLanguageRepository('./data/proglanguages.json');



while (true)
{
    console.log('1-Show all users \n2-Show user info by id \n3-Show all proglanguages \n4-Sho proglanguage info by id \n5-add new proglanguage \n6-delete ProgLanguage by id \n7-Edit language by id\n--------------------------------------------------');

    const input = readlineSync.question('Input a command: ');
    if (input.length === 0) break;

    else if (input === '1') console.log(userRepository.getUsers());

    else if (input === '2')
    {
        n = readlineSync.question('Input user`s id: ');
        console.log(userRepository.getUserById(parseInt(n)));
    }

    else if (input === '3') console.log(progLanguageRepository.getProgLanguages());

    else if (input === '4')
    {
        n = readlineSync.question('Input proglanguage`s id: ');
        
        l = progLanguageRepository.getProgLanguagesById(parseInt(n));
        if(l === null)console.log('there is no language with such id');
        else console.log(l);
    }
    
    else if (input === '5') 
    {
        proglanguageModel = new ProgLanguage();

        while(true){
        proglanguageModel.name = readlineSync.question('Input proglanguage`s name: ');
        if(proglanguageModel.name.length >= 1) break;
        else {console.log('Please write at least 1 symbol');}
        }
        while(true){
        proglanguageModel.lastversion = readlineSync.question('Input proglanguage`s lastversion: ');
        if(proglanguageModel.lastversion.length >= 1) break;
        else {console.log('Please write at least 1 symbol');}
        }
        while(true){
        proglanguageModel.founderName = readlineSync.question('Input proglanguage`s founder name: ');
        if(proglanguageModel.founderName.length >= 4) break;
        else {console.log('Please write at least 4 symbols');}
        }
        while(true){
        proglanguageModel.countofusers = readlineSync.question('Input proglanguage`s count of users: ');
        if(proglanguageModel.countofusers.length >= 1) break;
        else {console.log('Please write at least 1 symbol');}
        }
        proglanguageModel.countofusers = parseInt(proglanguageModel.countofusers);
        proglanguageModel.lasteditData = new Date().toISOString();
        progLanguageRepository.addProgLanguage(proglanguageModel);
    } 

    else if (input === '6')
    {
        n = readlineSync.question('Input language`s id: ');
        //console.log(progLanguageRepository.deleteProgLanguages(parseInt(n)));
        m = progLanguageRepository.deleteProgLanguages(parseInt(n));
        if(m=== null) console.log('there is no language with such id');
    }

    else if (input === '7')
    {
        n = readlineSync.question('Input language`s id which u want to change: ');
        l = progLanguageRepository.getProgLanguagesById(parseInt(n));
        if(l === null)console.log('there is no language with such id');

        else 
        {
        console.log('Your language to edit\n',l);
        
        proglanguageModel = new ProgLanguage();
        proglanguageModel.id = parseInt(n);
        while(true){
        proglanguageModel.name = readlineSync.question('Input proglanguage`s name: ');
        if(proglanguageModel.name.length >= 1) break;
        else {console.log('Please write at least 1 symbol');}
        }
        while(true){
        proglanguageModel.lastversion = readlineSync.question('Input proglanguage`s lastversion: ');
        if(proglanguageModel.lastversion.length >= 1) break;
        else {console.log('Please write at least 1 symbol');}
        }
        while(true){
        proglanguageModel.founderName = readlineSync.question('Input proglanguage`s founder name: ');
        if(proglanguageModel.founderName.length >= 4) break;
        else {console.log('Please write at least 4 symbols');}
        }
        while(true){
        proglanguageModel.countofusers = readlineSync.question('Input proglanguage`s count of users: ');
        if(proglanguageModel.countofusers.length >= 1) break;
        else {console.log('Please write at least 1 symbol');}
        }
        proglanguageModel.countofusers = parseInt(proglanguageModel.countofusers);
        proglanguageModel.lasteditData = new Date().toISOString();
        var c = progLanguageRepository.updateProgLanguages(proglanguageModel);
        if (c!=null) console.log('Changed!');
        }

    }

    else console.log('There is no such command');
    console.log('--------------------------------------------------');
}
 
console.log('Bye.');*/



