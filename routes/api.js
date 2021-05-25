const test = require('../controllers/test');

module.exports = (router) => {
  router.get('/ping', test.ping);

  return router;
}