let range = +prompt("შეიყვანეთ ელემენტების სასურველი რაოდენობა მასივში");
const primeNumbers = [];

while (primeNumbers.length <= range) {
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  if (randomNumber <= 1) {
    continue;
  } else if (randomNumber === 2) {
    primeNumbers.unshift(2);
  } else {
    let isPrime = true;
    for (let i = 2; i <= randomNumber / 2; i++) {
      if (randomNumber % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeNumbers.unshift(randomNumber);
    }
  }
}

console.log(primeNumbers);
