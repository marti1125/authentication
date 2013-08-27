var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

// connect to cloud database - mongolab
var username = "root"
var password = "mongolab"
var address = '@ds041238.mongolab.com:41238/marketwilly'
connect()

function connect(){
	var url = 'mongodb://' + username + ':' + password + address;
	mongoose.connect(url);
}

function disconnect() {
	mongoose.disconnect();
}