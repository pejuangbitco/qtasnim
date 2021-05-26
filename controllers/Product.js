const db = require('../models');

module.exports = {
  list: async (req, res) => {
    try {
      let condition = {}
      if (req.query.name)
        condition.where = {
          name: req.query.name
        }
      
      const result = await db.Product.findAll(condition);
      return res.send(result);
    } catch (error) {
      console.error(error);
    }  
  },
  
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await db.Product.findByPk(id);
      return res.send(result);
    } catch (error) {
      console.error(error);
    }  
  },

  create: async (req, res) => {
    try {
      const name = req.body.name;
      const stock = req.body.stock;
      const productType = req.body.productType;
      
      const result = await db.Product.create({
        name: name,
        stock: stock,
        productType: productType,
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
      const name = req.body.name;
      const stock = req.body.stock;
      const productType = req.body.productType;
      
      // await db.Product.update({
      //   name: name,
      //   stock: stock,
      //   productType: productType,
      //   updatedAt: new Date(),
      // }, {
      //   where: {
      //     id
      //   }
      // });

      const data = await db.Product.findByPk(id);
      if (data === null) {
        return res.res.sendStatus(404).send('Resource not found');
      }
      data.name = name;
      data.stock = stock;
      data.productType = productType;
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
      await db.Product.destroy({
        where: { id }
      });
      return res.send('Resource deleted');
    } catch (error) {
      console.error(error);
    }  
  },
}