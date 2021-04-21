import { UserInterface } from '../../../globalinterfaces';
import { CustomComponentInterface } from '../../interfaces';

export interface StatePgCntrInterfaceInterface {
  user: {
    user: UserInterface
  }
}

export interface StatePgCntToPropsInterface {
  userName: string
}

export interface PageContainterInterface extends CustomComponentInterface, StatePgCntToPropsInterface {
  backgroundImg?: string,
  childComponent: React.FunctionComponent,
  pageTitle?: string
}
