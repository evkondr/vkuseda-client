export type TMenuItemLink = {
  name: string,
  link: string
};
export type TCategory = {
  id: string,
  name: string
}
export type TMenuItem = {
  id: string
  name: string,
  image: string | undefined,
  ingredients: string,
  category: TCategory,
  weight: string,
  price: number,
  imageAlt?: string,
  isInPromo?: boolean
};
export type TCartItem = {
  id: string,
  name: string,
  amount: number,
  price: number,
  totalPrice: number
}
export type TRegistrerFormData = {
  login: string,
  email?: string,
  password: string
}
export type TMenuItemFormValues = {
  name: string,
  image?: FileList | File | undefined,
  ingredients: string,
  categoryId?: string,
  weight: string,
  price: number,
  imageAlt?: string | undefined,
}
export type TPromoItem = {
  id: string,
  menuItem: TMenuItem,
}
export type TUser = {
  id: string,
  login: string,
  role: string
}
export type TOrder = {
  id: string,
  orderNumber: string,
  cart: string | TCartItem[],
  totalPrice: number
  customerName: string,
  customerAddress: string,
  customerPhone: string,
  comment: string,
  date: string,
  isDone: boolean,
}
export type TWeekDay ={
  id?: string,
  name: string,
  menuItems: TMenuItem[]
}
export type TSettings = {
  id?: string,
  name: string,
  value: string | boolean,
}
export type TAllSettings = {
  boolSettings: TSettings[],
  textSettings: TSettings[]
};
export type TLoginFormData = Omit<TRegistrerFormData, 'email'>
export type TMenuItemFormData = Omit<TMenuItem, 'id'>
export type TSendOrderValues = Omit<TOrder, 'id' | 'orderNumber' | 'date' | 'isDone'>

// Interfaces
export interface IInitialState {
  loading: boolean,
  error: string | undefined
}
export type TWeekDayUnion = 'понедельник' |
  'вторник' |
  'среда' |
  'четверг' |
  'пятнциа' |
  'суббота' |
  'воскресенье'
