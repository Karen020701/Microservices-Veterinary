const db = require('./db');

const PetFood = {
  update: async (id, data) => {
    const { descrip, type, price, quantity } = data;
    const query = `
      UPDATE pet_food
      SET descrip = $1, type = $2, price = $3, quantity = $4
      WHERE id = $5
      RETURNING *`;
    const values = [descrip, type, price, quantity, id];
    return db.query(query, values);
  }
};

module.exports = PetFood;
