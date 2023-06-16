const a = 3;
const b = 6;

const app = require('express')();

app.get('/', (req, res) => {
  res.send('hallo wereld!');
})

console.log(a + b);
