import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    id: Number,
    first_name:String,
    last_name:String,
    email:String,
    gender:String,
    avatar:String,
    domain:String,
    available:Boolean
});

const User = model('User', userSchema);

export default User;
