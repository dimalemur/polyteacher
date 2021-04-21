/* eslint-disable @typescript-eslint/no-empty-interface */
import { UserDataType, UserInterface } from '../../../globalinterfaces';
import { CustomComponentInterface } from '../../interfaces';

export interface StateProfileInterface {
  user: {
    user: UserInterface
    userData: UserDataType
  }
}

export interface StateProfileToPropsInterface {
  userId: string
  userData: UserDataType
  userName: string
  fullName: string
}

export interface DispatchInterface {
  asyncAddUserData: (userId: string) => void
}

interface DispatchToPropsInterface {
  asyncAddUserData: (userId: string) => void
}

export interface ProfileInterface extends
  StateProfileToPropsInterface,
  DispatchToPropsInterface,
  CustomComponentInterface { }
