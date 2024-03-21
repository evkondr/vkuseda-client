// Function that creates action name for asyncThunk functions
const createAsyncThunkName = (first:string) => {
  const name = `${first}/`;
  return (verb:string) => {
    return name + verb;
  };
};
export default createAsyncThunkName;
