const mongoose = require("mongoose");
const { Schema }= mongoose;

const namesSchema = new Schema({
 firstName: String,
 lastName: String
},{ collection: 'user' });

mongoose.model('user', namesSchema);