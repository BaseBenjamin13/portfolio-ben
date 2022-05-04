
const mongoose = require('../connection');

const UserScema = new mongoose.Schema({
    userName: String,
    firstName: String,
    lastName: String
})

const User = new mongoose.model('User', UserScema);
module.exports = User;