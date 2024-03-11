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
  weight: number,
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
  image: FileList | File | undefined,
  ingredients: string,
  categoryId: string,
  weight: number,
  price: number,
  imageAlt?: string
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
  cart: TCartItem[],
  totalPrice: number
  customerName: string,
  customerAddress: string,
  customerPhone: string,
  comment: string,
}
export interface IStateStdProps {
  loading: boolean,
  error: string | undefined
}
export type TLoginFormData = Omit<TRegistrerFormData, 'email'>
export type TMenuItemFormData = Omit<TMenuItem, 'id'>
export type TSendOrderValues = Omit<TOrder, 'id'>
