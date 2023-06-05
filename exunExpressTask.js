//FOR EXUN MEMBERS: 
//you can start the server by running "node exunExpressTask.js" on your terminal"
//  http://localhost:3000/number will give the output: "Go to /number/:num to check if :num is prime or composite."
//  http://localhost:3000/number/2 will give the output: "The number 2 is prime."
//  http://localhost:3000/number/1 will give the output: "The number 1 is neither prime nor composite."
//  http://localhost:3000/number/-5 will give the ouput: "The number is negative."

const express = require('express');

const app = express();

app.get('/number', (req, res) => {
  res.send('Go to /number/:num to check if :num is prime or composite');
});

app.get('/number/:num', (req, res) => {
  const number = parseInt(req.params.num);

  if (number === 1) {
    res.send(`The number 1 is neither prime nor composite`);
  } else if (number < 0) {
    res.send(`The number is negative`);
  } else if (isPrime(number)) {
    res.send(`The number ${number} is prime`);
  } else {
    const factors = getFactors(number);
    res.send(`The number ${number} is composite and its factors are: ${factors.join(', ')}`);
  }
});

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function getFactors(num) {
  const factors = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }

  return factors;
}

app.get("/", function(request, response){
  response.send("WELCOME TO THIS WEBSITE!")
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});