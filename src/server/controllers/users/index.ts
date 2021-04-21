import {
  AuthDataInterface,
  UserInterface,
  UserDataType,
  MenuLinkInterface,
  Gradetable,
} from '../../../globalinterfaces';
import {
  UsersRequest,
  UsersResponce,
} from './interfaces';

//  ---------------Moks data-------------- //
export const User = {
  id: 'student',
  login: 'jora',
  userMode: 1,
};

export const Teacher = {
  id: 'teacher',
  login: 'juplev',
  userMode: 2,
};

const orders = [
  {
    _id: '5ee8f1aaba20103dccebc346',
    name: 'Приказ № 789-с от 27 августа 2019 г. - «О переводе на следующий курс (ликвидация задолженностей)»',
    url: 'mospolytech.ru',
  },
  {
    _id: '5ef1c3cab67412450c5778b6',
    name: 'Приказ № 413-с от 28 августа 2018 г. - «О распределении по учебным группам»',
    url: 'mospolytech.ru',
  },
  {
    _id: '5ef1c3cab67412450c5778b6',
    name: 'Приказ № 592-ОД от 8 августа 2018 г. - «О зачислении»',
    url: 'mospolytech.ru',
  },
];

const workInfo = [
  {
    _id: '5ee8f1aaba20103dccebc346',
    name: 'Инфокогнитивные технологии',
    additional: '(преподаватель 0.25 ст.) - Основное место работы',
  },
  {
    _id: '5ef1c3cab67412450c5778b6',
    name: 'Центр разработки и поддержки информационных систем',
    additional: '(начальник центра 0.50 ст.) - Внутреннее совместительство',
  },
];

const polyProfileUserData = {
  name: 'Подов Гордей Семенович',
  faq: {
    key: 'Факультет',
    val: 'ФИТ',
  },
  course: {
    key: 'Курс',
    val: '3',
  },
  group: {
    key: 'Группа',
    val: '181-361',
  },
  specialty: {
    key: 'Специальность',
    val: '09.03.03 Прикладная информатика',
  },
  specialization: {
    key: 'Специализация',
    val: 'КИС',
  },
  period: {
    key: 'Срок обучения',
    val: 4,
  },
  form: {
    key: 'Форма обучения',
    val: 'Очная',
  },
  financing: {
    key: 'Вид финансирования',
    val: 'Бюджет',
  },
  level: {
    key: 'Уровень образования',
    val: 'Бакалавр',
  },
  year: {
    key: 'Год набора',
    val: '2018/2019',
  },
  email: 'jora@gmail.com',
  tel: '+79772714525',
  _id: '5ecb904139d6512be83cfd2b',
  orders,
};

const polyProfileTeacherData = {
  name: 'Иванов Иван Иванович',
  email: 'ivanov@mail.ru',
  tel: '+7-939-489-56-65',
  _id: '5ecb904139d6512be83cfd2b',
  workInfo,
};
//  ----------------------------------------- //

const linksForUser = [
  {
    id: 'Study',
    name: 'Учёба',
    links: [
      {
        name: 'Расписание',
        url: '/timetable',
      },
      {
        name: 'Успеваемость',
        url: '/performance',
      },
      {
        name: 'Посещения по физкультуре',
        url: '/visits',
      },
      {
        name: 'Образовательные программы',
        url: '/faculties',
      },
    ],
  },
  {
    id: 'Career',
    name: 'Карьера',
    links: [
      {
        name: 'Дополнительные образовательные курсы',
        url: '/additional_courses',
      },
      {
        name: 'Трудоустройство и практика',
        url: '/practic',
      },
      {
        name: 'Международные стажировки',
        url: '/internship',
      },
    ],
  },
  {
    id: 'myFinances',
    name: 'Мои финансы',
    url: '/myfinances',
  },
  {
    id: 'certificates',
    name: 'Справки',
    url: '/certificates',
  },
  {
    id: 'messages',
    name: 'Сообщения',
    url: '/messages',
  },
  {
    id: 'feedback',
    name: 'Обратная связь',
    links: [
      {
        name: 'Центры по работе со студентами',
        url: '/centers',
      },
      {
        name: 'Анкета для оценки образовательного процесса',
        url: '/questionnaire',
      },
      {
        name: 'Форма обратной связи',
        url: '/feedback',
      },
    ],
  },
];

const linksForTeacher = [
  {
    id: 'Study',
    name: 'ВУЗ',
    links: [
      {
        name: 'Расписание',
        url: '/timetable',
      },
      {
        name: 'Образовательные программы',
        url: '/faculties',
      },
    ],
  },
  {
    id: 'Career',
    name: 'Мероприятия',
    url: '/announcements',
  },
  {
    id: 'myFinances',
    name: 'Мои финансы',
    url: '/myfinances',
  },
  {
    id: 'messages',
    name: 'Сообщения',
    url: '/messages',
  },
  {
    id: 'blanks',
    name: 'Документы',
    url: '/blanks',
  },
  {
    id: 'digitalservices',
    name: 'Cервисы',
    url: '/digitalservices',
  },
  {
    id: 'feedback',
    name: 'Обратная связь',
    url: '/feedback',
  },
];

const gradetables = [
  {
    semester: 1,
    grades: [
      {
        name: 'Элективные дисциплины по физической культуре и спорту',
        type: 'Оценка',
        grade: 'Отлично',
      },
      {
        name: 'Проектная деятельность',
        type: 'Зачёт',
        grade: 'Не Зачтено',
      },
      {
        name: 'Программирование',
        type: 'Зачёт',
        grade: 'Зачтено',
      },
      {
        name: 'Основы бух учета и управления финансами',
        type: 'Зачёт',
        grade: 'Зачтено',
      },
    ],
  },
  {
    semester: 2,
    grades: [
      {
        name: 'Элективные дисциплины по физической культуре и спорту',
        type: 'Оценка',
        grade: 'Отлично',
      },
      {
        name: 'Проектная деятельность',
        type: 'Зачёт',
        grade: 'Не Зачтено',
      },
      {
        name: 'Программирование',
        type: 'Зачёт',
        grade: 'Зачтено',
      },
      {
        name: 'Основы бух учета и управления финансами',
        type: 'Зачёт',
        grade: 'Зачтено',
      },
    ],
  },
  {
    semester: 3,
    grades: [
      {
        name: 'Элективные дисциплины по физической культуре и спорту',
        type: 'Оценка',
        grade: 'Отлично',
      },
      {
        name: 'Проектная деятельность',
        type: 'Зачёт',
        grade: 'Не Зачтено',
      },
      {
        name: 'Программирование',
        type: 'Зачёт',
        grade: 'Зачтено',
      },
      {
        name: 'Основы бух учета и управления финансами',
        type: 'Зачёт',
        grade: 'Зачтено',
      },
    ],
  },
  {
    semester: 4,
    grades: [
      {
        name: 'Элективные дисциплины по физической культуре и спорту',
        type: 'Оценка',
        grade: 'Отлично',
      },
      {
        name: 'Проектная деятельность',
        type: 'Зачёт',
        grade: 'Не Зачтено',
      },
      {
        name: 'Программирование',
        type: 'Зачёт',
        grade: 'Зачтено',
      },
      {
        name: 'Основы бух учета и управления финансами',
        type: 'Зачёт',
        grade: 'Зачтено',
      },
    ],
  },
  {
    semester: 5,
    grades: [
      {
        name: 'Элективные дисциплины по физической культуре и спорту',
        type: 'Оценка',
        grade: 'Отлично',
      },
      {
        name: 'Проектная деятельность',
        type: 'Зачёт',
        grade: 'Не Зачтено',
      },
      {
        name: 'Программирование',
        type: 'Зачёт',
        grade: 'Зачтено',
      },
      {
        name: 'Основы бух учета и управления финансами',
        type: 'Зачёт',
        grade: 'Зачтено',
      },
    ],
  },
];

export async function authUser(req: UsersRequest<AuthDataInterface>, res: UsersResponce<UserInterface>)
  : Promise<UsersResponce<UserInterface> | void> {
  const { login, password } = req.body;
  console.log({ login, password });

  if (login === 'teacher') {
    res.cookie('token', '1A2B3C');
    return res.json(Teacher);
  }

  res.cookie('token', '4D5E6F');

  return res.json(User);
}

// any
export async function logoutUser(req: UsersRequest<any>, res: UsersResponce<any>)
  : Promise<UsersResponce<UserInterface> | void> {
  req.session?.destroy(() => {
    console.log('Сессия завершена');
  });

  // временно
  res.clearCookie('token');

  return res.status(200).send('Success');
}

export async function getUserByToken(req: UsersRequest<{ token: string }>, res: UsersResponce<UserInterface>)
  : Promise<UsersResponce<UserInterface> | void> {
  const { token } = req.body;
  console.log({ token });
  if (token === '1A2B3C') {
    return res.json(Teacher);
  }
  return res.json(User);
}

export async function getUserData(req: UsersRequest<{ id: string }>, res: UsersResponce<UserDataType>)
  : Promise<UsersResponce<UserDataType> | void> {
  const userId = req.query.id;
  console.log({ userId });
  if (userId === 'student') {
    return res.json(polyProfileUserData);
  }
  return res.json(polyProfileTeacherData);
}

export async function getUserTabs(req: UsersRequest<{ id: string }>, res: UsersResponce<MenuLinkInterface[]>)
  : Promise<UsersResponce<MenuLinkInterface[]> | void> {
  const userId = req.query.id;
  console.log({ userId });
  if (userId === 'student') {
    return res.json(linksForUser);
  }
  return res.json(linksForTeacher);
}

export async function getGradetables(req: UsersRequest<{ semesters: [number] }>, res: UsersResponce<Gradetable[]>)
  : Promise<UsersResponce<Gradetable[]> | void> {
  const { semesters } = req.body;
  const returnedGradetables: Gradetable[] = [];

  gradetables.forEach((grade) => {
    console.log(semesters.find(((needSemester) => needSemester === grade.semester)));

    if (grade.semester === semesters.find(((needSemester) => needSemester === grade.semester))) {
      returnedGradetables.push(grade);
    }
  });

  return res.json(returnedGradetables);
}
