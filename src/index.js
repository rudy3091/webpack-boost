import express from 'express';

import initDB from './model';
import router from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', router);
initDB();

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
