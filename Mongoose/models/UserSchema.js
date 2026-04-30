const mongoose = require('mongoose');
const schema = mongoose.Schema
const UserSchema = new schema({
  name: String,
  email: String,
});

const Users = mongoose.model('Users', UserSchema);
module.exports = Users;