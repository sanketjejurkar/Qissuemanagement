const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');




const Schema = mongoose.Schema;
 
let Issue = new Schema({
  

    title:{
        type:String
    },

   summary:{
        type:String
    },

    site_of_issue: {
        type:String
    },

    department:{
        type:String
    },
  
    severity:{
        type:String
    },
    status:{
        type:String,
        
    }
});

module.exports = mongoose.model('Issue', Issue);