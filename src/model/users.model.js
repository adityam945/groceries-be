const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsersRouter = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },  
  data: {
    type: JSON,
    default: {
      token: ""
    },
  },
  verified: {
    type: Number,
    default: 0, // verifing user token via mail
  },
  isDeleated: {
    type: Number,
    default: 0,  // deleated
  }
},{timestamps: true});

const Users = mongoose.model("Users", UsersRouter);

module.exports = Users;