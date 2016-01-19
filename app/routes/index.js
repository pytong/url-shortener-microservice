"use strict";

let path = process.cwd(),
	urlUtil = require("../utils/urlUtil");


module.exports = (app) => {

	app.route("/new/:url(*)")
		.get((req, res) => {
			let url = req.params.url,
				isValid = urlUtil.isValidUrl(url),
				shortUrl;

			if(isValid) {
				shortUrl = urlUtil.shortenUrl(url);
				res.json({original_url: url, short_url: shortUrl});
			} else {
				res.json({error: "Invalid URL"});
			}
		});

	app.get("/", (req, res)  => {
		res.sendFile(path + "/public/index.html");
	});
};
