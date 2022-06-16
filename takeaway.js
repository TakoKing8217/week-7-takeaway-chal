let answer = false;
const canWin = (num) => {
  let options = [2, 3, 5];
  for (let i = 0; i < options.length; i++) {
    if (num - options[i] === 0 || num - options[i] === 1) {
      answer = true;
      break;
    } else if (num > 5) {
      canWin(num - 5);
      canWin(num - 3);
      canWin(num - 2);
    }
  }

  return answer;
};

console.log(canWin(1), "1 should be false");
console.log(canWin(2), "2 should be true");
console.log(canWin(3), "3 should be true");
console.log(canWin(4), "4 should be true");
console.log(canWin(5), "5 should be true");
console.log(canWin(6), "6 should be true");
console.log(canWin(7), "7 should be false");
console.log(canWin(8), "8 should be false");
console.log(canWin(9), "9 should be false");
console.log(canWin(10), "10 should be true");
console.log(canWin(11), "11 should be true");
console.log(canWin(12), "12 should be true");
