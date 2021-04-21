// eslint-disable-next-line import/extensions
import { MenuLinkInterface, UserInterface } from '../../../globalinterfaces';
import { CustomComponentInterface } from '../../interfaces';

export interface StateMainInterface {
  user: {
    user: UserInterface,
    menuLinks: MenuLinkInterface[]
  },
}

export interface StateMainToPropsInterface {
  user: string,
  menulinks: MenuLinkInterface[]
}

export interface MainInterface extends StateMainToPropsInterface, CustomComponentInterface {
  token: string | undefined
}
