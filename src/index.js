import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb+srv://vjpmongodb:vjpmongodb@cluster0.pakwt.mongodb.net/chatapp?retryWrites=true&w=majority';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  client.close();
}); */

//const mongoose = require('mongoose');

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
});*/

ReactDOM.render(
  <React.StrictMode>

    <App />

  </React.StrictMode>,
  document.getElementById('root')
);
