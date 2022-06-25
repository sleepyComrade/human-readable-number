module.exports = function toReadable(number) {
  const arr = String(number).split('').reverse();
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  const dozens = ['hundred', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

  const readable = [];
  let count = arr.length - 1;
  if (count === 0) {
    readable.push(numbers[+arr[count]]);
  }

  if (count === 2) {
    for (let i = 0; i < 10; i++) {
      if (+arr[count] === i) {
        readable.push(numbers[i] + ' ' + dozens[0]);
        count--;
        break;
      }
    }
  }

  if (count === 1 && +arr[count] > 1) {
    for (let i = 2; i < 10; i++) {
      if (+arr[count] === i) {
        readable.push(dozens[i]);
        count--;
        break;
      }
    }
  } else if (count === 1 && +arr[count] === 1) {
    count--;
    readable.push(teens[+arr[count]]);
    count--;
  } else {
    count--;
  }

  if (count === 0 && +arr[count] > 0) {
    readable.push(numbers[+arr[count]]);
  }

  return readable.join(' ');
}