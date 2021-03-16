const mongoose = require('mongoose');

const appSchema = mongoose.Schema;

const UserSchema = new appSchema(
        {
            Name : String,
            Email : String,
            Street : String,
            City : String,
            Zipcode : Number,
            Tasks : [{
                        title : String,
                        completed : Boolean,
                    }],
            
            Posts : [{
                        title : String,
                        body : String,
                    }]
        
        });


module.exports = mongoose.model('users',UserSchema)  

