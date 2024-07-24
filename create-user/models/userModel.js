const db = require('./db');

const Veterinary = {
  create: async (data) => {
    const { email, password, full_name, role } = data;
    const query = `
      INSERT INTO users_inf (email, password, full_name, role) 
      VALUES ($1, $2, $3, $4) RETURNING *`;
    const values = [email, password, full_name, role];
    return db.query(query, values);
  }
};

module.exports = Veterinary;