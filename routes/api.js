const test = require('../controllers/test');
const product = require('../controllers/Product');

module.exports = (router) => {
  router.get('/ping', test.ping);
  router.get('/product', product.list);
  return router;
}