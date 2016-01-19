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

    shortenUrl: (url) => {
        let uuid = Math.random().toString(36).substr(2, 8);

        return uuid;
    }
}
