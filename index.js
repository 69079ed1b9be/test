const a = 3;
const b = 6;

const app = require('express')();

app.get('/', (req, res) => {
  res.send('hallo wereld!');
})

app.listen(80, () => {
  console.log('app listening!');
}))

console.log(a + b);
