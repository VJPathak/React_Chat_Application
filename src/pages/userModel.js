const mongoose = require("../database");
 
// create an schema
var userSchema = new mongoose.Schema({
            name: String,
            email:String
        });
 
var userModel=mongoose.model('users',userSchema);
 
module.exports = mongoose.model("Users", userModel);

<!DOCTYPE html>
<html>
<head>
  <title>fetch data from mongodb using node js and display in html</title>
  <link rel='stylesheet' href='/stylesheets/style.css' />
  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>
<body>
  <div>
    <a href="/customers" class="btn btn-info ml-3">Fetch  data from mongodb using node js and display in html</a>
</div>    
<!--   <% if (messages.error) { %>
  <p style="color:red"><%- messages.error %></p>
<% } %> -->
  
<% if (messages.success) { %>
    <p class="alert alert-success mt-4"><%- messages.success %></p>
<% } %>  
<br>
  <table class="table">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Name</th>
    <th scope="col">Email</th>
 
  </tr>
</thead>
<tbody>
  <% if(data.length){
 
  for(var i = 0; i< data.length; i++) {%>  
  <tr>
    <th scope="row"><%= (i+1) %></th>
    <td><%= data[i].chat%></td>
    <td><%= data[i].name%></td>
  </tr>
  <% }
           
   }else{ %>
       <tr>
          <td colspan="3">No user</td>
       </tr>
    <% } %>    
  
</tbody>
</table>
</body>
</html> 
