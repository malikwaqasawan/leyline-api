import { Schema, model } from 'mongoose';

const schema = new Schema({
  _id: { type: String },
  userId: { type: String },
  createdBy: { type: String },
  name: { type: String },
  description: { type: String },
  amount: { type: Number },
  status: {
    type: String,
    enum: ['Accept', 'Disputed', 'Created'],
    default: 'Created'
  }
}, {
  strict: false,
  timestamps: true
});

const Settlement = model('settlement', schema, 'settlement');

export default Settlement;
