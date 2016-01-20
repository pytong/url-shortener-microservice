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

    shortenUrl: (original_url) => {
        let uuid;

        Url.findOne({original_url: original_url}, (err, url) => {
            if(err) { return null; }

            if(typeof(url) === "undefined" || url === null) {
                uuid = Math.random().toString(36).substr(2, 8);

                url = new Url();
                url.original_url = original_url;
                url.uuid = uuid;

                url.save((err) => {
                    if(err) { return null; }
                    return uuid;
                });
            }
        });

        return uuid;
    }
}
