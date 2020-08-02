import mongoose, { Schema } from 'mongoose';

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
});

TeacherSchema.index({ name: 1, surname: 1, patronymic: 1 }, { unique: true });

export default mongoose.model('Teacher', TeacherSchema);
