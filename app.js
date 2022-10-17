const fs = require('fs');

const people = [];

const genders = ['M', 'F'];
const maleNames = ['Adam', 'Mario', 'Danny', 'Ken', 'Yaro', 'Peter', 'John'];
const femaleNames = ['Ann', 'Maria', 'Joan', 'Anette', 'Elisabeth', 'Katherin', 'Juliet'];
const lastNames = ['Smith', 'Thomson', 'Fisher', 'Ashby', 'Craven', 'Jackson', 'Jones'];

const randChoice = arr => Math.floor(Math.random() * arr.length);

let i = 1;
while (i <= 20) {
  const gender = genders[randChoice(genders)];

  const name =
    gender === 'M' ? maleNames[randChoice(maleNames)] : femaleNames[randChoice(femaleNames)];

  const lastName = lastNames[randChoice(lastNames)];

  const age = Math.floor(Math.random() * (69 - 18) + 18);

  const phoneNumber = Math.floor(100000000 + Math.random() * 900000000);

  const email = (name + '.' + lastName + '@gmail.com').toLowerCase();

  const person = { gender, name, lastName, age, phoneNumber, email };

  people.push(person);
  i++;
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, err => {
  if (err) throw err;
  console.log('The file has been saved!');
});
