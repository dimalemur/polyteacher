import Teacher from '../models/teacher';

export async function getAllTeachers():Promise<any> {
  let teacher;
  try {
    teacher = await Teacher.find();
  } catch (e) {
    throw e;
  }

  return teacher;
}

export async function addTeacher(name:string, surname:string, patronymic:string):Promise<any> {
  let teacher;
  try {
    teacher = await Teacher.create({ name, surname, patronymic });
  } catch (e) {
    throw e;
  }

  return teacher;
}
