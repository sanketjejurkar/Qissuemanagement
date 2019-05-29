const mongoose = require('mongoose');
const passport = require('passport');
const rp = require('request-promise');
const _ = require('lodash');

const User = mongoose.model('User')







module.exports.authenticate = async (req, res, next) => {
    console.log('authenticate is called',res)

    let user = await rp.get("https://oauth2.googleapis.com/tokeninfo?id_token="+req.body.id);
    try{
      if (user)  return res.status(200).json({ "token": user.generateJwt() });
    }catch(err){
      next(err)
    }

}