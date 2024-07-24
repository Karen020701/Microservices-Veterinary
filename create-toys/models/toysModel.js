const db = require('./db');

const Toys = {
  create: async (data) => {
    const { name, type, price, quantity } = data;
    const query = `
      INSERT INTO toys (name, type, price, quantity) 
      VALUES ($1, $2, $3, $4) RETURNING *`;
    const values = [name, type, price, quantity];
    return db.query(query, values);
  }, 

  delete: async (id) => {
    const query = 'DELETE FROM toys WHERE id = $1';
    const values = [id];
    return db.query(query, values);
    }
};

module.exports = Toys;