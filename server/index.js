import express from 'express';

import router from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', router);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
