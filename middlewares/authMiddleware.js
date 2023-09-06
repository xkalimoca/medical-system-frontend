const JWT = require('jsonwebtoken');

module.exports = async(req,res,next)=> {
    const token = req.headers.get('authorization').split(" ")[1]

}