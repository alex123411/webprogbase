const router = require('express').Router();
 
const proglanguageController = require('./../controllers/proglanguageControllers');
 
router
   .get("/new" , proglanguageController.getNew)
   /**
    * @route GET /api/proglanguages/{id}
    * @group Proglanguages - proglanguage operations
    * @param {integer} id.path.required - id of the Proglanguage - eg: 1
    * @returns {Proglanguage.model} 200 - Proglanguage object
    * @returns {Error} 404 - Proglanguage not found
    */
   .get("/:id", proglanguageController.getProglanguage)
   /**
    * @route GET /api/proglanguages
    * @group Proglanguages - proglanguage operations 
    * @returns {Array.<Proglanguage>} Proglanguage - all proglanguages
    */
   .get("/", proglanguageController.getProglanguages)
   /**
    * @route POST /api/proglanguages
    * @group Proglanguages - proglanguage operations
    * @param {Proglanguage.model} id.body.required - new Proglanguage object
    * @returns {Proglanguage.model} 201 - added Proglanguage object
   */
   .post("/" , proglanguageController.addProglanguage)
   
   /**
    * @route PUT /api/proglanguages
    * @group Proglanguages - proglanguage operations
    * @param {Proglanguage.model} id.body.required - new Proglanguage object
    * @returns {Proglanguage.model} 200 - changed Proglanguage object
    */
   .put("/" , proglanguageController.updateProglanguage)
   /**
    * @route DELETE /api/proglanguages/{id}
    * @group Proglanguages - proglanguage operations
    * @param {integer} id.path.required - id of the Proglanguage - eg: 1
    * @returns {Proglanguage.model} 200 - deleted Proglanguage object
    * @returns {Error} 404 - Proglanguage not found
    */
   .post("/:id" , proglanguageController.deleteProglanguage)
  
module.exports = router;