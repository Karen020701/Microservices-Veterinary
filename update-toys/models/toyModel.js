const db = require('./db');

const Toy = {
  update: async (id, data) => {
    const { name, type, price, quantity } = data;
    const query = `
      UPDATE toys
      SET name = $1, type = $2, price = $3, quantity = $4
      WHERE id = $5
      RETURNING *`;
    const values = [name, type, price, quantity, id];
    return db.query(query, values);
  }
};

module.exports = Toy;
