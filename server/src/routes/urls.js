var express = require('express');
var router = express.Router();

// Controllers
const UrlController = require('../controllers/urls');

router.post('/', async (req, res) => {

  console.log(req.body)
  
  UrlController.addUrl(req.body)
  .then((result) => res.status(201).json(result))
  .catch((e) => console.log(res, e));
  });

router.get('/:urlId', async (req, res) => {
  UrlController.getUrl(req.params.urlId)
    .then((result) => res.json(result))
    .catch((e) => sendError(res, e));
});

router.get('/', async (req, res) => {
  UrlController.getUrls()
    .then((result) => res.json(result))
    .catch((e) => console.log(e));
});


module.exports = router;
