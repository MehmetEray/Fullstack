const mongoose = require("mongoose");
const signUpTemplate = new mongoose.Schema({
    studentid: { type: String, required: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model("myFirstDatabase", signUpTemplate);
