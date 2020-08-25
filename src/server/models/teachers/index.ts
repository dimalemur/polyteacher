import mongoose, { Schema } from 'mongoose';
import { TeacherInterface } from './interfaces';

const workHistorySchema = new Schema({
  startDate: { type: Date, require: true },
  endDate: { type: Date, require: true },
  teach: { type: Date, require: true },
});

const TeacherSchema = new Schema({
  name: {
    type: String, required: true,
  },
  surname: {
    type: String, required: true,
  },
  patronymic: {
    type: String, required: true,
  },
  photo: {
    type: String, default: '',
  },
  likes: {
    type: Number, default: 0,
  },
  dislikes: {
    type: Number, default: 0,
  },
  vievCount: {
    type: Number, default: 0,
  },
  workHistory: {
    type: [workHistorySchema], required: true, default: [],
  },

});

TeacherSchema.index({ name: 1, surname: 1, patronymic: 1 }, { unique: true });

export default mongoose.model<TeacherInterface>('Teacher', TeacherSchema);
