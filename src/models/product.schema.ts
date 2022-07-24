import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    title : String, 
    description : String, 
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }, 
    address: {
        addr1: String, 

        addr2: String, 
        city : String, 
        state: String, 
        country: String, 
        zip: Number
    }, 
    created : {
        type: Date,
        default : Date.now()
    }
})