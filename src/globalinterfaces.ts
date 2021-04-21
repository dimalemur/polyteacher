// интерфейс пользователЯ
export interface UserInterface {
  id: string,
  login: string,
  userMode: number | null,
}

// данные авторизации
export interface AuthDataInterface {
  login: string,
  password: string
}

// данные пользователя (общий)
interface UserDataInterface {
  name: string,
  email: string,
  tel: string,
}

interface OrderInterface {
  _id: string,
  name: string,
  url: string
}

interface WorkInfoInterface {
  _id: string,
  name: string,
  additional: string
}

// данные студента
interface StudentInterface extends UserDataInterface {
  faq: string,
  course: number,
  group: string,
  specialty: string,
  specialization: string,
  period: number,
  form: string,
  financing: string,
  level: string,
  year: string,
  orders: OrderInterface[],
  userId: string
}

// данные учителя
interface TeacherInterface extends UserDataInterface {
  salary: number
  workInfo: WorkInfoInterface[]
}

interface LinkInterface extends MenuUrlInterface {
  name: string,
  url: string
}

interface MenuUrlInterface {
}

interface Grades {
  name: string,
  type: string,
  grade: string
}

export interface Gradetable {
  semester: number,
  grades: Grades[]
}

export interface MenuLinkInterface {
  id: string,
  name: string,
  links?: LinkInterface[],
  url?: string
}

export type UserDataType = StudentInterface | TeacherInterface | {}
