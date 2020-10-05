module.exports = function toReadable(number) {

  number = +number;
  number += '';

  if (number.length === 1) {
    if (number === '0') return 'zero';
    return getNumberOne(number);
  };

  if (number.length === 2) {
    if (+number >= 11 && +number <= 19) return getNumberElevenNineteen(number);
    return (getNumberTwo(number[0]) + ' ' + getNumberOne(number[1])).trim();
  };

  if (number.length === 3) {
    if (number[1] === '0' && number[2] === '0') {
      return getNumberOne(number[0]) + ' hundred';
    } else {
      return getNumberOne(number[0]) + ' hundred ' + toReadable(number.substring(1));
    }
  };

  function getNumberOne(value) {
    switch (value) {
      case ('0'):
        return '';
      case '1':
        return 'one';
      case '2':
        return 'two';
      case '3':
        return 'three';
      case '4':
        return 'four';
      case '5':
        return 'five';
      case '6':
        return 'six';
      case '7':
        return 'seven';
      case '8':
         return 'eight';
      case '9':
        return 'nine';
    }
  };

  function getNumberTwo(value) {
    switch (value) {
      case '1':
        return 'ten';
      case '2':
        return 'twenty';
      case '3':
        return 'thirty';
      case '4':
        return 'forty';
      case '5':
        return 'fifty';
      case '6':
        return 'sixty';
      case '7':
        return 'seventy';
      case '8':
         return 'eighty';
      case '9':
        return 'ninety';
    }
  };

  function getNumberElevenNineteen(value) {
    switch (value) {
      case '11':
        return 'eleven';
      case '12':
        return 'twelve';
      case '13':
        return 'thirteen';
      case '14':
        return 'fourteen';
      case '15':
        return 'fifteen';
      case '16':
        return 'sixteen';
      case '17':
        return 'seventeen';
      case '18':
         return 'eighteen';
      case '19':
        return 'nineteen';
    }
  }


}
