import express from 'express';
import axios from 'axios';
import config from './config.json' assert { type: 'json' };
const router = express.Router();

const routes = router.all('/:apiName/*', async (req, res, next) => {
	let { apiName } = req.params;

	let dynamicPath = req.params['0'];

	console.log(config.services[apiName].url + dynamicPath);

	try {
		// let resp = await axios.get('http://localhost:3001/' + apiName);
		if (config.services[apiName]) {
			let resp = await axios({
				method: req.method,
				url: config.services[apiName].url + dynamicPath,
				headers: req.headers,
				data: req.body,
			});
			// .get(config.services[apiName].url + req.params.path);

			// console.log(resp);
			res.send(resp.data);
		} else {
			throw 'API does not exist';
		}
	} catch (err) {
		res.send(err);
	}
});

export default routes;
