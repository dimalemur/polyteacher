import mongoose from 'mongoose';

export interface UserInterface {
  login:string,
  password:string,
}

export interface UserInterfaceModel extends UserInterface, mongoose.Document {
  comparePasswords(password:string):Promise<boolean>
}
