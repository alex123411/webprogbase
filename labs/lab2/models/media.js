
/**
* @typedef Media
* @property {integer} id
* @property {string} path - path to file
*/
 
class Media{
    constructor( id , path)
    {
       this.id = id; //number
       this.path = path; //string
    }
};
 
module.exports = Media
