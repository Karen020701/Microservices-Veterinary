const db = require('./db');

const Accessory = {
  update: async (id, data) => {
    const { name, type, price, quantity } = data;
    const query = `
      UPDATE accessories
      SET name = $1, type = $2, price = $3, quantity = $4
      WHERE id = $5
      RETURNING *`;
    const values = [name, type, price, quantity, id];
    return db.query(query, values);
  }
};

module.exports = Accessory;
