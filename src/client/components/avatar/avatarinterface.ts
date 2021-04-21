import { CustomComponentInterface } from '../../interfaces';

export interface StateMainInterface { }

interface StateMainToPropsInterface { }

export interface DispatchAvatarInterface { }

interface DispatchAvatarToPropsInterface { }

export interface AvatarInterface extends DispatchAvatarToPropsInterface, StateMainToPropsInterface, CustomComponentInterface { }
