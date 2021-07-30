export const alphabetLowercase = 'abcdefghijklmnopqrstuvwxyz';
export const alphabetUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const digits = '0123456789';
export const sign = '-._~+/';

const choice = (chars: string): string => {
  return chars[Math.floor(Math.random() * chars.length)];
};

const shuffle = (chars: string): string => {
  return chars.split('').sort(() => 0.5 - Math.random()).join('');
};

const hash = (size: number, charSet: string[]): string => {
  if (size <= 0) return '';
  const chars = charSet
    .map(chars => {
      const count = Math.ceil(Math.random() * (size / charSet.length))
      return [...Array(count)].map(() => choice(chars)).join('');
    })
    .join('');
  return chars + hash(size - chars.length, charSet);
};

const password = (
  size: number,
  charSet: string[] = [
    alphabetLowercase,
    alphabetUppercase,
    digits,
    sign,
  ],
): string => {
  if (size < charSet.length) console.warn('A value smaller than charSet.length is specified for the size argument.');
  return shuffle(hash(size, charSet)).substr(0, size);
};

export default password;
