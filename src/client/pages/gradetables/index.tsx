import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import './gradetables.pcss';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import {
  GradeTablesInterface,
  StateGradetablesInterface,
  StateGradeTablesToPropsInterface,
  DispatchToPropsInterface,
} from './gradetablesinterface';
import { asyncGetGrades } from '../../store/middleware/asyncGetGrades';

export const userGrades = [
  {
    semester: 1,
    orders: [
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
    orders: [
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
    orders: [
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
    orders: [
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
    orders: [
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

const Gradetables: React.FunctionComponent<GradeTablesInterface> = (props) => {
  const [changedSemesters, setChangedSemesters] = React.useState<number[]>([1]);
  const courses = [1, 2, 3, 4, 5, 6, 7, 8];
  const coursesText = courses.map((course) => (
    { value: course, label: `${course} семестр` }
  ));

  React.useEffect(() => {
    props.asyncAddGrades(changedSemesters);
  }, [changedSemesters]);

  const handleChangeCourse = (e) => {
    const semesters: number[] = Array.isArray(e) ? e.map((x) => x.value) : [];
    console.log(semesters);

    setChangedSemesters(semesters);
  };

  return (
    <div className={`Grades ${(props.className) ? props.className : ''}`}>
      <form className='Coursechange Grades-Coursechange' action='submit'>
        <Select
          onChange={handleChangeCourse}
          options={coursesText}
          styles={{
            valueContainer: (base) => ({
              ...base,
              minHeight: '30px',
              justifyContent: 'center',
            }),
            indicatorSeparator: () => ({}),
            dropdownIndicator: (base) => ({
              ...base,
              color: '#898686',
              '&:hover': {
                color: '#898686',
              },
            }),
            control: (base) => ({
              ...base,
              borderColor: 'gray',

              '&:hover': {},
            }),
          }}
          className='basic-multi-select'
          defaultValue={coursesText[0]}
          isMulti
          isSearchable={false}
        />
      </form>

      <div className='Grades-Content'>
        {
          props.gradetable.map((el, i) => (
            <div className='Grades-Inner' key={i}>
              <div className='Grades-Semester'>
                <span className='Semester-Text'>
                  {`${el.semester} cеместр`}
                </span>
              </div>
              <div className='Gradetable Grades-Gradetable'>
                <div className='Gradetable-Title'>
                  <div className='Title-Name'>
                    <span>Дисциплина</span>
                  </div>
                  <div className='Title-Type'>
                    <span>Тип cдачи</span>
                  </div>
                  <div className='Title-Grade'>
                    <span>Оценка</span>
                  </div>
                </div>
                {
                  el.grades.map((element, j) => (
                    <div className='Gradetable-Content' key={j}>
                      <div className='Gradetable-Name'>
                        <span>{element.name}</span>
                      </div>
                      <div className='Gradetable-Type'>
                        <span>{element.type}</span>
                      </div>
                      <div className='Gradetable-Grade'>
                        <span>{element.grade}</span>
                      </div>
                    </div>
                  ))
                }

              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

const mapState = (state: StateGradetablesInterface): StateGradeTablesToPropsInterface => ({
  gradetable: state.gradesPage.grades,
});

const mapDispatch = (dispatch: ThunkDispatch<{}, undefined, Action>): DispatchToPropsInterface => ({
  asyncAddGrades: (semesters: number[]) => dispatch(asyncGetGrades(semesters)),
});

const connector = connect(mapState, mapDispatch);

export const GradeTablesWithConnect = connector(Gradetables);
