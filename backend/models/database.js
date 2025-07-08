const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    firstName: {
        type:String,
    },

    lastName: {
        type:String,
    },

    email: {
        type:String,
        unique:true,
    },

    country: {
        type:String,
    },

    streetAddress: {
        type:String,
    },

    city: {
        type:String,
    },

    state: {
        type:String,
    },

    postalCode:{
        type:String
    },

    comments:{
        type:Boolean
    },

    candidate:{
        type:Boolean
    },

    offers:{
        type:Boolean
    },

    pushNotification:{
        type:String
    }
});

module.exports = mongoose.model('formData', schema);
