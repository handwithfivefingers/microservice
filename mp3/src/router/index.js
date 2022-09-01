import express from 'express';

const router = express.Router();
// router /mp3/v.1.0
router.get('/get', (req, res, next) => {
	console.log('coming get all list mp3');
	return res.send('here we come mp3 routing');
});

export default router;
