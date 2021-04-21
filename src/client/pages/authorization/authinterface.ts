/* eslint-disable @typescript-eslint/no-empty-interface */
import { AuthDataInterface, UserInterface } from '../../../globalinterfaces';
import { CustomComponentInterface } from '../../interfaces';

export interface StateAuthInterface {
  user: {
    user: UserInterface
  }
}

export interface DispatchInterface {
  asyncAuth: (authData: AuthDataInterface) => void
}

interface DispatchToPropsInterface {
  asyncAuth: (authData: AuthDataInterface) => void;
}

export interface StateAuthToPropsInterface {
  userId: string
}
export interface AuthorizationInterface extends StateAuthToPropsInterface, DispatchToPropsInterface, CustomComponentInterface {}
