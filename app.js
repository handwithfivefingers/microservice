import express from 'express';
import cors from 'cors';
import routes from './router/index.js';
import helmet from "helmet";

const app = express();
const PORT = 3000;

app.use(helmet());
app.use(express.json());
app.use(cors());

app.use('/api', routes);

app.listen(PORT, () => {
	console.log('Microservices listening on port 3000');
});
