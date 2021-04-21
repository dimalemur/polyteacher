/* eslint-disable @typescript-eslint/no-empty-interface */
import { UserDataType, UserInterface } from '../../../globalinterfaces';
import { CustomComponentInterface } from '../../interfaces';

export interface StateSettingsInterface {
  user: {
    user: UserInterface
    userData: UserDataType
  }
}

export interface DispatchInterface {
  asyncAddUserData: (userId: string) => void
}

interface DispatchToPropsInterface {
  asyncAddUserData: (userId: string) => void
}

export interface StateSettingsToPropsInterface {
  userId: string,
  login: string
  email: string,
  tel: string,
}

export interface SettingsInterface extends StateSettingsToPropsInterface, DispatchToPropsInterface, CustomComponentInterface { }
