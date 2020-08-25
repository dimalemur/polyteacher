import Teacher from '../models/teachers';
import { TeacherInterface } from '../models/teachers/interfaces';

export async function getAllTeachers():Promise<TeacherInterface[]|never> {
  let teacher:TeacherInterface[];
  try {
    teacher = await Teacher.find();
  } catch (e) {
    throw e;
  }

  return teacher;
}

export async function addTeacher(name:string, surname:string, patronymic:string):Promise<TeacherInterface|never> {
  let teacher:TeacherInterface;
  try {
    teacher = await Teacher.create({ name, surname, patronymic });
  } catch (e) {
    throw e;
  }

  return teacher;
}

export async function setLikeTeacher(teacherId:string):Promise<TeacherInterface|null|never> {
  let teacher:TeacherInterface|null = null;
  try {
    const teacherLikes = await Teacher.findById(teacherId).select({ likes: 1 });
    if (teacherLikes !== null && teacherLikes.likes !== undefined) {
      let { likes } = teacherLikes;
      likes += 1;
      teacher = await Teacher.findOneAndUpdate({ _id: teacherId }, { likes });
    }
  } catch (e) {
    throw e;
  }
  return teacher;
}

