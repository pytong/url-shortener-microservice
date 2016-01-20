"use strict";

let Url = require("../models/urls");

module.exports = {

    isValidUrl: (url) => {
        let expression = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})(\/[\w \.-]*)*\/?$/,
            regex = new RegExp(expression);

        if(url.match(regex) ) {
            return true;
        } else {
            return false;
        }
    },

    shortenUrl: (original_url, callback) => {
        let errorMessage = "Failed to shorten url. Please try again later.";

        Url.findOne({original_url: original_url}, (err, url) => {
            if(err) { return callback(false, errorMessage); }

            if(typeof(url) === "undefined" || url === null) {
                url = new Url();
                url.original_url = original_url;
                url.uuid = Math.random().toString(36).substr(2, 8);

                url.save((err) => {
                    if(err) { return callback(false, errorMessage); }
                    return callback(true, url.uuid);
                });
            } else {
                callback(true, url.uuid);
            }
        });
    }
}
