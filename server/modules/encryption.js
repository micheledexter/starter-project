const bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 10; // the cost of processing the data

const publicAPI = {
  encryptPassword(password) {
    const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR); // generate the salt
    return bcrypt.hashSync(password, salt); // avoid the same hashes by hashing the password and salt
  },

  comparePassword(candidatePassword, storedPassword) {
    return bcrypt.compareSync(candidatePassword, storedPassword);
  },
};

module.exports = publicAPI;