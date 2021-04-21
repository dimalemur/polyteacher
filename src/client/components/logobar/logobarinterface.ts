import { CustomComponentInterface } from '../../interfaces';

export interface LogobarInterface extends CustomComponentInterface {
  isOpenedMenu: boolean,
  setOnpenMenu: (isOpenedMenu: boolean) => void
}
