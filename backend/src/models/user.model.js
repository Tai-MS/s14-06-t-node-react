import mongoose from "mongoose";

const usersCollection = "users";

const userSchema = new mongoose.Schema({
  firstName: {type: String, required: [true, 'Missing field: first name']},
  lastName: {type: String, required: [true, 'Missing field: lastname']},
  email: {type: String, unique: [true, 'Email already in use.'], required: [true, 'Missing field: email']},
  password: {type: String, required: [true, 'Missing field: password']},
  rol: {type: String, required: true, emun: ['admin', 'client', 'provider']},
});

const userModel = mongoose.model(usersCollection, userSchema);

export default userModel;