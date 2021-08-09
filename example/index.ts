import password, { alphabetLowercase, alphabetUppercase } from '@karibash/password-generator';

console.log(password(9));

const charSet = [
  alphabetLowercase,
  alphabetUppercase,
];
console.log(password(9, charSet));
