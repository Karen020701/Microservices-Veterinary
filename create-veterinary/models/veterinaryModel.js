const db = require('./db');

const Veterinary = {
  create: async (data) => {
    const { full_name, specialty, phone_number, email, foto } = data;
    const query = `
      INSERT INTO veterinary (full_name, specialty, phone_number, email, foto) 
      VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const values = [full_name, specialty, phone_number, email, foto];
    return db.query(query, values);
  },

  getAll: async () => {
  const query = 'SELECT * FROM veterinary';
  return db.query(query);
  },
  getById: async (id) => {
  const query = 'SELECT * FROM veterinary WHERE id = $1';
  const values = [id];
  return db.query(query, values);
  }
};


module.exports = Veterinary;