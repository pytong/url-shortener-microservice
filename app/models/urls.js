'use strict';

let mongoose = require('mongoose'),
	Schema = mongoose.Schema,

	Url = new Schema({
		original_url: String,
		short_url: String
	});

module.exports = mongoose.model('Url', Url);