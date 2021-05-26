const db = require('../models');

module.exports = {
  list: async (req, res) => {    
    let sql = "SELECT products.*, SUM(transactions.quantity) as sold, DATE(transactions.tanggal) AS tanggal FROM `products` LEFT JOIN transactions ON transactions.productId = products.id GROUP BY products.id, DATE(transactions.tanggal)";
    const result = await db.sequelize.query(sql, { type: db.sequelize.QueryTypes.SELECT });     
    res.send(result);
  }
}