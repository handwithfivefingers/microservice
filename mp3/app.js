import express from 'express';
import cors from 'cors';
import routes from './src/router/index.js';

const app = express();
const PORT = 3001;

app.use(express.json());

app.use(cors());

app.use('/', routes);

app.listen(PORT, () => {
	console.log(`Mp3 service listening on port ${PORT}`);
});
