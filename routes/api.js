const test = require('../controllers/test');
const product = require('../controllers/Product');

module.exports = (router) => {
  router.get('/ping', test.ping);
  
  router.get('/product', product.list);
  router.get('/product/:id', product.get);
  router.post('/product', product.create);
  router.put('/product/:id', product.update);
  router.delete('/product/:id', product.delete);
  return router;
}