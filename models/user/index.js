import { Schema, model } from 'mongoose';

const schema = new Schema({
  _id: { type: String },
  name: { type: String }
}, {
  strict: false,
  timestamps: true
});

const User = model('user', schema, 'user');

export default User;
