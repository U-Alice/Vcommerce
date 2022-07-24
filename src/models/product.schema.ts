import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    title : String, 
    description : String, 
    image : String,
    price : String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    created : {
        type: Date,
        default : Date.now()
    }
})