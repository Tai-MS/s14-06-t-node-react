import mongoose from "mongoose";

const usersCollection = "users";

const userSchema = new mongoose.Schema({
  firstName: {type: String, required: [true, 'Missing field: first name']},
  lastName: {type: String, required: [true, 'Missing field: lastname']},
  email: {type: String, unique: [true, 'Email already in use.'], required: [true, 'Missing field: email']},
  city: {type: String, required: [true, 'Missing field: city']},
  service_type: {type: String, required: [true, 'Missing field: service type']},
  type_of_payment: {type: String, required: [true, 'Missing field: type of payment']},
  phone: {type: String, required: [true, 'Missing field: phone']},
  address: {type: String, required: [true, 'Missing field: address']},
  password: {type: String, required: [true, 'Missing field: password']},
  rol: {type: String, required: true, emun: ['admin', 'client', 'provider']},
});

const userModel = mongoose.model(usersCollection, userSchema);

export default userModel;