const mongoose = require("mongoose");
//defining the user schema
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    }
});
// Create a Mongoose model for the User using the defined schema
const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;