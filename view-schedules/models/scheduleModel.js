const db = require('./db');

const Schedule = {
  getAll: async () => {
    const query = 'SELECT * FROM schedules';
    return db.query(query);
  }
};

module.exports = Schedule;
