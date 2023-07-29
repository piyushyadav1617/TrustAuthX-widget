import CryptoJS from "crypto-js";
//to decrypt mfa code
export const decryptCode = (mfa: string): string => {
  const bytes = CryptoJS.AES.decrypt(mfa, 'asjdhkasjdh');
  const decoded = bytes.toString(CryptoJS.enc.Utf8);
  return decoded;
};
//to test input password string
export const testPass = (password: string): boolean => {
  return !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,20}$/.test(password);
};
//correct password msg
export const passMsg =
  'Password must be between 8 and 20 characters long,contain at least one letter and one digit, and can include special characters';

//to test input OTP
export const testOTP = (otp: string): boolean => {
  //OTP should be 6 digits long and all the digits should not be
  return !/^(?!.*000000)\d{6}$/.test(otp);
};
