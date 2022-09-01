const express = require('express');
const { createPost } = require('../controller/post');
const router = express.Router();
const shortid = require('shortid');
const {upload, requireSignin} = require('./../common-middleware/index');

router.post('/post/create', requireSignin, upload.array('postImage'), createPost);

module.exports = router;