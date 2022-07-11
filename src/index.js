module.exports = function toReadable (number) {
  let numString = number.toString();
  let numLength = numString.length;
  let firstDigit = '';
  let secondDigit = '';
  let thirdDigit = '';
  let numReadable = '';

  if (numLength >= 1) {
    switch (numString[numLength - 1]) {
      case '0':
        firstDigit = 'zero';
        break;
      case '1':
        firstDigit = 'one';
        break;
      case '2':
        firstDigit = 'two';
        break;
      case '3':
        firstDigit = 'three';
        break;
      case '4':
        firstDigit = 'four';
        break;
      case '5':
        firstDigit = 'five';
        break;
      case '6':
        firstDigit = 'six';
        break;
      case '7':
        firstDigit = 'seven';
        break;
      case '8':
        firstDigit = 'eight';
        break;
      case '9':
        firstDigit = 'nine';
        break; 
    }
    numReadable = firstDigit;
    if (numLength >= 2) {
      if (numString[numLength - 2] === '1') {
        if (+numString[numLength - 1] > 2 ) {
          switch (numString[numLength - 1]) {
            case '3':
              firstDigit = 'thir';
              break;
            case '5':
              firstDigit = 'fif';
              break;
            case '8':
              firstDigit = 'eigh';
              break;
          }
          secondDigit = `${firstDigit}teen`;
        } else {
          switch (numString[numLength - 1]) {
            case '0':
              secondDigit = 'ten';
              break;
            case '1':
              secondDigit = 'eleven';
              break;
            case '2':
              secondDigit = 'twelve';
              break;
          }
        }
        numReadable = `${secondDigit}`;
      } else {
        switch (numString[numLength - 2]) {
          case '2':
            secondDigit = 'twenty';
            break;
          case '3':
            secondDigit = 'thirty';
            break;
          case '4':
            secondDigit = 'forty';
            break;
          case '5':
            secondDigit = 'fifty';
            break;
          case '6':
            secondDigit = 'sixty';
            break;
          case '7':
            secondDigit = 'seventy';
            break;
          case '8':
            secondDigit = 'eighty';
            break;
          case '9':
            secondDigit = 'ninety';
            break; 
        }
        if (numString[numLength - 1] !== '0') {
          numReadable = `${secondDigit} ${firstDigit}`;
        } else { numReadable = `${secondDigit}`; }
      }
    }
    if (numLength === 3) {
      switch (numString[0]) {
        case '1':
          thirdDigit = 'one';
          break;
        case '2':
          thirdDigit = 'two';
          break;
        case '3':
          thirdDigit = 'three';
          break;
        case '4':
          thirdDigit = 'four';
          break;
        case '5':
          thirdDigit = 'five';
          break;
        case '6':
          thirdDigit = 'six';
          break;
        case '7':
          thirdDigit = 'seven';
          break;
        case '8':
          thirdDigit = 'eight';
          break;
        case '9':
          thirdDigit = 'nine';
          break; 
      }
      thirdDigit = `${thirdDigit} hundred`;
      numReadable = `${thirdDigit} ${numReadable}`;
      numReadable = numReadable.split('  ').join(' ');
    }
  }
  return numReadable.trim();
}
