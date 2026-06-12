const mongoose = require('mongoose');

const createSchema = new mongoose.Schema({
    sessionId:String,
    message:String,
    response: String
});
const chat =mongoose.model("Chat",createSchema);

module.exports = chat;