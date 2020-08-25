import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import { UserInterfaceModel } from './interfaces';

const UserSchema = new Schema({
  login: {
    type: String, unique: true, lowercase: true, index: true,
  },
  password: String,
});

UserSchema.pre<UserInterfaceModel>('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(this.password, salt);

  this.password = hash;
  next();
});

UserSchema.methods.comparePasswords = function (password:string):Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

export default mongoose.model<UserInterfaceModel>('User', UserSchema);
