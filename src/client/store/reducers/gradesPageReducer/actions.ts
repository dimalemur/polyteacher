import { Gradetable } from '../../../../globalinterfaces';
import { SET_GRADES } from './actionTypes';
import { SetGradesAction } from './interfaces';

export const setGrades = (grades: Gradetable[]): SetGradesAction => ({ type: SET_GRADES, grades });
