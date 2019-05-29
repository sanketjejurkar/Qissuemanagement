const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');




const Schema = mongoose.Schema;
 
let Issue = new Schema({
    employee_code:{
         type:String
    },

    title:{
        type:String
    },

   summary:{
        type:String
    },

    site_of_issue: {
        type:String,
    },

    responsible:{
        type:String
    },
    description:{
        type:String
    },
    severity:{
        type:String
    },
    status:{
        type:String,
        default:'Open'
    }
});

module.exports = mongoose.model('Issue', Issue);