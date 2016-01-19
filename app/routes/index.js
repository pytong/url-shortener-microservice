"use strict";

let path = process.cwd(),
	urlUtil = require("../utils/urlUtil");


module.exports = (app) => {

	app.route("/new/:url(*)")
		.get((req, res) => {
			let url = req.params.url,
				result = urlUtil.isValidUrl(url);

			res.json(result);
		});

	app.get("/", (req, res)  => {
		res.sendFile(path + "/public/index.html");
	});
};
