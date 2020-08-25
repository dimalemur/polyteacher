import mongoose from 'mongoose';

interface workHistoryInterface {
  startDate:Date,
  endDate:Date,
  teach:string,
}

export interface TeacherInterface extends mongoose.Document {
  likes?: number,
  dislikes?:number,
  vievCount?:number,
  name: string,
  surname: string,
  patronymic: string,
  workHistory?:workHistoryInterface[]
}
