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
				urlUtil.shortenUrl(url, (success, result) => {
					if(success === false) {
						return res.json({original_url: url, short_url: null});
					}

					shortUrl = req.protocol + '://' + req.get('host') + "/" + result;
					res.json({original_url: url, short_url: shortUrl});
				});
			} else {
				res.json({error: "Invalid URL"});
			}
		});

	app.get("/", (req, res)  => {
		res.sendFile(path + "/public/index.html");
	});
};
