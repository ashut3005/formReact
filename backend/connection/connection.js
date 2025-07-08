const mongoose = require('mongoose');

require('dotenv').config();

const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then( ()=> {
        console.log('connected');
    })
    .catch( (err)=> {
        console.log(err);
        console.log('Not connected');
    })
}

module.exports = connectDB;