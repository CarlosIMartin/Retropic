const moment = require('moment');
const helpers = {};

// Procesar tiempo de creación de imagen.
helpers.timeAgo = timestamp => {
    return moment(timestamp).startOf('minute').fromNow();
};

module.exports = helpers;