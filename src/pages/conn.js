/*const mysql = require('mysql');
var mysqlConnection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password: '',
  database: 'expense_tracker'
});

mysqlConnection.connect((err)=>{
  if(!err)
  console.log('connection');
  else
  console.log('No connection');
})*/

/*var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/chatapp', {useNewUrlParser: true});
var conn = mongoose.connection;
conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;*/
const mongoose = require('mongoose');

const URL = "url";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

module.exports = connectDB;
   
  


//Extracting Data

/*const playlistschema = new mongoose.Schema({
  oid: String,
  name: String,
  email : String,
  PhNo : String,
  status : String,
  ProfDisc : String,
  Password : String,
  chats : Array,
  friends :Array,
  requests :Array
})

const Userdata = new mongoose.model("Userdata",playlistschema);

const updateDpcument = async (_id) => {
  try{

    const result = await Userdata.updateOne({_id},{
      $set : {
        oid : "5"
      }
  
    } );

console.log(result)

  }catch(err){
    console.log(err);
  }

}

updateDpcument('615e8b9a1d5c5ecd5f43fbd4');*/

/* var express = require('express');
var router = express.Router();
router.get('/likes',function(req,res) {
  var logvalue = req.headers['log'];
  if(logvalue && logvalue == 'info'){
    console.log('req recieved for likes');
  }

var select = req.query.select;
var database = [];
ChoiceModel.find({} , function(err, foundData) {
  if(err){
    console.log(err);
    res.status(500).send();
  }
  else {
    if(foundData.length == 0) {
      var responseObject = undefined;
      if(select && select == 'count'){
        responseObject = {count: 0};
      }
      res.status(404).send(responseObject);
    }
    else {
      var responseObject = foundData;
      if(select && select == 'count'){
        responseObject = {count: foundData.length};
      }
      res.send(responseObject);
    }

  }
});

}); */
