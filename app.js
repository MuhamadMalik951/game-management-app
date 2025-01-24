import express from 'express';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import dashboardRouter from './Routes/dashboardRouter.js';
import gameRouter from './Routes/gameRouter.js';
import developerRouter from './Routes/developerRouter.js';
import genreRouter from './Routes/genreRouter.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const assetsPath = join(__dirname, 'public');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));

app.set('views', join(__dirname, 'Views'));
app.set('view engine', 'ejs');

app.use('/', dashboardRouter);
app.use('/games', gameRouter);
app.use('/developers', developerRouter);
app.use('/genres', genreRouter);

app.listen(3000, () => {
  console.log('Were listening here at the localhost here');
});
