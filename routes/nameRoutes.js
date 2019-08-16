const mongoose = require('mongoose');
const User = mongoose.model('user');

module.exports = app => {
app.post("/addname", (req, res) => {
	console.log("Print");
 var myData = new User(req.body);
 myData.save()
 .then(item => {
 res.send("item saved to database");
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });
});
};