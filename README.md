# password-generator

[![Github](https://img.shields.io/github/followers/Karibash?label=Follow&logo=github&style=social)](https://github.com/Karibash?tab=followers)
[![Twitter](https://img.shields.io/twitter/follow/Karibash?label=Follow&style=social)](https://twitter.com/intent/follow?screen_name=Karibash)

A simple password generation helper function.

## 👏 Getting Started

The basic usage is as follows:

```typescript
import password from '@karibash/password-generator';

console.log(password(9));
// -> C_Tpmf45L
```

By specifying a character array as the second argument, you can change the characters to be used during generation.
At least one character from each array will be used.

You can change the string to be used when generating by doing the following:
```typescript
import password, { alphabetLowercase, alphabetUppercase } from '@karibash/password-generator';

const charSet = [
  alphabetLowercase,
  alphabetUppercase,
];
console.log(password(9, charSet));
```

By default, a string containing uppercase and lowercase letters, numbers, and symbols will be generated.
```typescript
const defaultCharSet = [
  alphabetLowercase,
  alphabetUppercase,
  digits,
  sign,
];
```

## 🚀 Installation

```
$ npm install @karibash/password-generator
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

Feel free to check [issues page](https://github.com/Karibash/password-generator/issues) if you want to contribute.
