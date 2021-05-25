const db = require('../models');

module.exports = {
  list: async (req, res) => {
    try {
      const result = await db.Transaction.findAll({
        include: [{
          model: db.Product,
        }]
      });
      return res.send(result);
    } catch (error) {
      console.error(error);
    }  
  },
  
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await db.Transaction.findByPk(id,{
        include: [{
          model: db.Product,
        }]
      });
      return res.send(result);
    } catch (error) {
      console.error(error);
    }  
  },

  create: async (req, res) => {
    try {
      const quantity = req.body.quantity;
      const productId = req.body.productId;
      
      const result = await db.Transaction.create({
        quantity: quantity,
        productId: productId,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return res.send(result);
    } catch (error) {
      console.error(error);
    }  
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const quantity = req.body.quantity;
      const productId = req.body.productId;

      const data = await db.Transaction.findByPk(id);
      if (data === null) {
        return res.res.sendStatus(404).send('Resource not found');
      }
      data.quantity = quantity;
      data.productId = productId;
      data.updatedAt = new Date();
      data.save();

      return res.send({
        id
      });
    } catch (error) {
      console.error(error);
    }  
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      await db.Transaction.destroy({
        where: { id }
      });
      return res.send('Resource deleted');
    } catch (error) {
      console.error(error);
    }  
  },
}