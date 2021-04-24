const router = require('express')   
   .Router()
   .post('/', (req, res) => res.send(req.files));

const mediaController = require('./../controllers/mediaController');

router
   /**
    * @route POST /api/media
    * @group Medias - upload and get images
    * @consumes multipart/form-data
    * @param {file} image.formData.required - uploaded image
    * @returns {integer} 200 - added image id
    */
   .post("/", mediaController.postMedia)
      /**
    * @route GET /api/media/{id}
    * @group Medias - media operations
    * @param {integer} id.path.required - id of the Proglanguage - eg: 1
    * @returns {Proglanguage.model} 200 - Proglanguage object
    * @returns {Error} 404 - Proglanguage not found
    */
   .get("/:id", mediaController.getImage)

module.exports = router;
