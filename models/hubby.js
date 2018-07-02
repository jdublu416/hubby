const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: false },
  userName: { type: String, required: false },
  password: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, default: Date.now },
  devices: {
    name: { type: String, required: true },
    settings: { type: Object, required: false }
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;

/* For testing porpoises:

  Device settings model
    settings: {
      screenRes: {type: Number, required: true},
      widgets: {
        WIDGET FILTH HERE
      }
    }
  
  
  */
