import { MenuLinkInterface, UserDataType, UserInterface } from '../../../globalinterfaces';
import { CustomComponentInterface } from '../../interfaces';

export interface StateSidebarInterface {
  user: {
    user: UserInterface
    userData: UserDataType
    menuLinks: MenuLinkInterface[]
  }
}

export interface StateSidebarToPropsInterface {
  fullName: string,
  userId: string,
  menuLinks: MenuLinkInterface[]
}

export interface DispatchSidebarInterface {
  asyncAddUserTabs: (token: string) => void
  asyncLogout: () => void
}

interface DispatchSidebarToPropsInterface {
  asyncAddUserTabs: (token: string) => void
  asyncLogout: () => void
}

export interface MenuListInterface {
  links: MenuLinkInterface[],

}

export interface SidebarInterface extends CustomComponentInterface, StateSidebarToPropsInterface, DispatchSidebarToPropsInterface {
  isAuthorized: boolean,
  isOpenedMenu: boolean,
  setOnpenMenu: (isOpenedMenu: boolean) => void
}

