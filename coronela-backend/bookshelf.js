;
const config = require('./knexfile');
const db = require('knex')(config['development']);
const bookshelf = require('bookshelf')(db);


module.exports = bookshelf;
