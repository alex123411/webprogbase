const router = require('express').Router();
 
const userController = require('./../controllers/userControllers');
 
router
   /**
    * @route GET /api/users/{id}
    * @group Users - user operations
    * @param {integer} id.path.required - id of the User - eg: 1
    * @returns {User.model} 200 - User object
    * @returns {Error} 404 - User not found
    */
   .get("/:id", userController.getUser)
   /**
    * @route GET /api/users?page={page}&size={size}
    * @group Users - user operations
    * @param {integer} page.path.required - page 
    * @param {integer} size.path.required - size 
    * @returns {Array.<User>} User - all users
    */
   .get("/", userController.getUsers)
 
module.exports = router;

