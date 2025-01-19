import express from 'express';

const app = express();
import { configDotenv } from 'dotenv';
console.log(configDotenv());
app.get('/', (req, res) => {
  res.send('this is the game management application.');
});

app.listen(3000, () => {
  console.log('Were listening here at the localhost here');
});
