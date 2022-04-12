const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    bookName: {
            type:String,
            required:true,
            
           },

    authorName: String,
    catagary: String,
    year: Number,
    
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array