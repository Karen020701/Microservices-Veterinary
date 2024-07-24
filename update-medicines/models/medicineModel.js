const db = require('./db');

const Medicine = {
  update: async (id, data) => {
    const { name, usage, price, quantity } = data;
    const query = `
      UPDATE medicines
      SET name = $1, usage = $2, price = $3, quantity = $4
      WHERE id = $5
      RETURNING *`;
    const values = [name, usage, price, quantity, id];
    return db.query(query, values);
  }
};

module.exports = Medicine;
