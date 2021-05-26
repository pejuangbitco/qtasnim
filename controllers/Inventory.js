const db = require('../models');

module.exports = {
  list: async (req, res) => {
    let sql = "SELECT products.*, SUM(transactions.quantity) as sold, DATE(transactions.tanggal) AS tanggal FROM `products` LEFT JOIN transactions ON transactions.productId = products.id GROUP BY products.id, DATE(transactions.tanggal)";
    
    const result = await db.sequelize.query(sql, { type: db.sequelize.QueryTypes.SELECT });     
    res.send(result);
  },

  listFilter: async (req, res) => {
    let sql = "SELECT products.productType, SUM(transactions.quantity) as sold FROM `products` LEFT JOIN transactions ON transactions.productId = products.id GROUP BY products.productType ORDER BY transactions.tanggal";
    const from = req.query.from;
    const to = req.query.to;
    if (req.query.from && req.query.to) {
      sql = "SELECT products.productType, SUM(transactions.quantity) as sold FROM `products` LEFT JOIN transactions ON transactions.productId = products.id WHERE transactions.tanggal > ? AND transactions.tanggal < ? GROUP BY products.productType ORDER BY transactions.tanggal";
      const result = await db.sequelize.query(sql, { 
      replacements: [from, to],
      type: db.sequelize.QueryTypes.SELECT });     
      res.send(result);
    }    
    
    const result = await db.sequelize.query(sql, { type: db.sequelize.QueryTypes.SELECT });     
    res.send(result);
  }
}