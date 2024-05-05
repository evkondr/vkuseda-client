const formatPhoneNumber = (phoneNumber: string):string => {
  let result = '+7 ';
  for (let i = 0; i < phoneNumber.length; i += 1) {
    if (i === 3 || i === 6) {
      result += ' ';
    }
    result += phoneNumber[i];
  }
  return result;
};
export default formatPhoneNumber;
