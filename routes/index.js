const express = require('express');
const superagent = require('superagent');
const {map} = require('rxjs/operator');
const url = require('url');
const router = express.Router();

async function findUser(id){

}

/* GET home page. */
router.get('/', async function (req, res, next) {
	const {user} = url.parse(req.url, true).query;
	try {
		const result = await superagent
			.get("https://randomuser.me/api/")
			.query({results: user});
		const {results} = result.body;
		let users = results.map(r=>({firstname: r.name.first, lastname: r.name.last}));
		res.removeHeader("X-Powered-By");
		res.json(users);
	}
	catch (e) {
		console.log(e);
	}
});

module.exports = router;
