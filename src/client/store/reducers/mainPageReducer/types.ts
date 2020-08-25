export interface UserInterface {
  name?:string,
  surname?:string,
  age?:number
}

interface pageStateInterface {
  menuVisible:boolean
}

export interface StateInterfase {
  user: UserInterface,
  pagesState:pageStateInterface
}

export interface SetUserAction {
  type: string
  user: UserInterface
}

export type MainPageActionsTypes = SetUserAction
