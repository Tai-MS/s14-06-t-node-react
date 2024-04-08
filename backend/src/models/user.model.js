import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {type: String, required: [true, 'Missing field: first name']},
  lastName: {type: String, required: [true, 'Missing field: lastname']},
  email: {type: String, unique: [true, 'Email already in use.'], required: [true, 'Missing field: email']},
  password: {type: String, required: [true, 'Missing field: password']},
  rol: {type: String, required: true, emun: ['admin', 'client', 'provider']},
  city: {type: String},
  service_type: {type: String, emun: ['Limpieza', 'Cuidado de Adultos', 'Niñera', 'Techista', 'Jardinero', 'Electricista', 'Albañil', 'Carpintero', 'Plomero', 'Pintor', 'Cerrajero', 'Flete', 'Gasista', 'Servicio a/a', 'Herrero', 'Vidriero' ]},
  type_of_payment: {type: String, emun: ['Efectivo', 'Débito', 'Crédito']},
  phone: {type: String},
  address: {type: String},
  calification: {type: Number, default: 0},
  img: {type: String},
  availability_to_travel: {type: Boolean, default: false},
  availability_schedule: {type:String, emun: ['full-time', 'part-time', 'flexible', 'weekends', 'nights', 'mornings', 'afternoons', 'evenings', 'nights', '24/7']},
  adquired_services: {type: Schema.Types.ObjectId, ref: 'Service'},
}); 

const userModel = mongoose.model('User', userSchema);

export default userModel;