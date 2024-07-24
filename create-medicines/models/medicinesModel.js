const db = require('./db');

const Medicines = {
  create: async (data) => {
    const { name, usage, price, quantity } = data;
    const query = `
      INSERT INTO medicines (name, usage, price, quantity) 
      VALUES ($1, $2, $3, $4) RETURNING *`;
    const values = [name, usage, price, quantity];
    return db.query(query, values);
  },

  delete: async (id) => {
    const query = 'DELETE FROM medicines WHERE id = $1';
    const values = [id];
    return db.query(query, values);
    }

};

module.exports = Medicines;