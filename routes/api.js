const test = require('../controllers/test');
const product = require('../controllers/Product');
const transaction = require('../controllers/Transaction');
const inventory = require('../controllers/Inventory');

module.exports = (router) => {
  router.get('/ping', test.ping);
  router.get('/inventory', inventory.list);
  router.get('/inventory/filter', inventory.listFilter);

  router.get('/product', product.list);
  router.get('/product/:id', product.get);
  router.post('/product', product.create);
  router.put('/product/:id', product.update);
  router.delete('/product/:id', product.delete);

  router.get('/transaction', transaction.list);
  router.get('/transaction/:id', transaction.get);
  router.post('/transaction', transaction.create);
  router.put('/transaction/:id', transaction.update);
  router.delete('/transaction/:id', transaction.delete);
  return router;
}