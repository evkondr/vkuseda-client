export type TMenuItemLink = {
  name: string,
  link: string
};
export type TMenuItem = {
  id: string
  name: string,
  image: string,
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
