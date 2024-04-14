// In most cases this need to copare two arrays with same type of data
// and return new one with exluded repetitions
export default <T>(bigArr:T[], smallArr:T[], key: keyof T):T[] => {
  return bigArr.filter((item) => !smallArr.find((el) => el[key] === item[key]));
};
