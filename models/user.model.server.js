const mongoose = require('mongoose');
const userSchema = require('./user.schema.server')
const userModel = mongoose.model('UserModel', userSchema)
module.exports = userModel;