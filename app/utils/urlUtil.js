"use strict";

module.exports = {

    isValidUrl: (url) => {
        let expression = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})(\/[\w \.-]*)*\/?$/,
            regex = new RegExp(expression);

        if(url.match(regex) ) {
            return true;
        } else {
            return false;
        }
    }

}
