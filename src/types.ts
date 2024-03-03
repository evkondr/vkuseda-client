export type TMenuItemLink = {
  name: string,
  link: string
};
export type TMenuItem = {
  id: string
  name: string,
  image: string | undefined,
  ingredients: string,
  category: string,
  weghit: number,
  price: number,
  imageAlt?: string
};
export type TCategory = {
  id: string,
  name: string
}
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
export interface IStateStdProps {
  loading: boolean,
  error: string | undefined
}
export type TLoginFormData = Omit<TRegistrerFormData, 'email'>
export type TMenuItemFormData = Omit<TMenuItem, 'id'>
