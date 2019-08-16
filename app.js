var express = require("express");
var app = express();
var port=3000;

// app.use("/",(req,res)=>{
// 	res.send("Hello World");
// });
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/demo",{ useNewUrlParser: true });


// var nameSchema = new mongoose.Schema({
//  firstName: String,
//  lastName: String
// });
// var User = mongoose.model("User", nameSchema);

require('./models/User');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


require('./routes/nameRoutes')(app);


// app.post("/addname", (req, res) => {
// 	console.log("Print");
//  var myData = new User(req.body);
//  myData.save()
//  .then(item => {
//  res.send("item saved to database");
//  })
//  .catch(err => {
//  res.status(400).send("unable to save to database");
//  });
// });

app.use("/", (req, res) => {
 res.sendFile(__dirname + "/index.html");
});
app.listen(port,()=>{
	console.log("server listening on port "+port);
})