import { UserInterface } from '../../globalinterfaces';

export interface StateMainInterface {
  user: {
    user: UserInterface
  },
}

export interface StateMainToPropsInterface {
  user: string
}

export interface DispatchInterface {
  asyncAddUserByToken: (token: string) => void
}

interface DispatchToPropsInterface {
  asyncAddUserByToken: (token: string) => void;
}

export interface AppInterface extends DispatchToPropsInterface, StateMainToPropsInterface {
}
