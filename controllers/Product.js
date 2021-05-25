const db = require('../models');

module.exports = {
  list: async (req, res) => {
    try {
      const result = await db.Product.findAll();
      console.log(result);
      return res.send(result);
    } catch (error) {
      console.error(error);
    }  
  }
}