import { Gradetable } from '../../../../globalinterfaces';

export interface StateInterface {
  grades: Gradetable[]
}

interface Action {
  type: string
}

export interface SetGradesAction extends Action {
  grades: Gradetable[]
}

export type GradesPageActionsTypes = SetGradesAction
