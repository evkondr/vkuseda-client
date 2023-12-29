import { createSlice } from '@reduxjs/toolkit';
import { menuItemsLinks, mainPageMenuItemLinks } from '../../tempDB';
import { TMenuItemLink } from '../../types';

type TNavState = {
  landingNavLinks: TMenuItemLink[],
  mainPageNavLinks: TMenuItemLink[],
}
const initialState: TNavState = {
  landingNavLinks: menuItemsLinks,
  mainPageNavLinks: mainPageMenuItemLinks,
};
const navSlice = createSlice({
  name: 'site-navigation',
  initialState,
  reducers: {

  },
});
export default navSlice.reducer;
