var express = require('express');
var router = express.Router();
//Utils
const { sendError } = require('../utils/error');
// Controllers
const UrlController = require('../controllers/urls');


router.post('/', async (req, res) => {
  console.log('Body', req.body)
  UrlController.convertUrl(req.body)
  .then((result) => res.status(201).json(result))
  .catch((e) => sendError(res, e));
  });

router.get('/:urlId', async (req, res) => {
  UrlController.getOriginalUrl(req.params.urlId)
    .then((result) => res.json(result))
    .catch((e) => sendError(res, e));
});

router.get('/', async (req, res) => {
  UrlController.getUrls()
    .then((result) => res.json(result))
    .catch((e) => sendError(res, e));
});


module.exports = router;
