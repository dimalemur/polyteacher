import { Gradetable } from '../../../globalinterfaces';
import { CustomComponentInterface } from '../../interfaces';

export interface StateGradetablesInterface {
  gradesPage: {
    grades: Gradetable[]
  }
}

export interface StateGradeTablesToPropsInterface {
  gradetable: Gradetable[]
}

export interface DispatchInterface {
  asyncAddGrades: (semesters: [number]) => void
}

export interface DispatchToPropsInterface {
  asyncAddGrades: (semesters: number[]) => void
}

export interface GradeTablesInterface extends
  CustomComponentInterface,
  DispatchToPropsInterface,
  StateGradeTablesToPropsInterface { }
