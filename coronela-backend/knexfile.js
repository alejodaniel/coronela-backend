;
const databaseData = {
    client: process.env.CLIENT || 'mysql',
    connection: process.env.CONNECTION_DB || {
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: '1245678',
        database: 'Inventario'
    }
};
//configurar knex
module.exports = {
    development: {
        migrations: {tableName: 'knex_migrations', directory: './bdd/migrations'},
        seeds: {directory: './bdd/seeds'},
        client: databaseData.client,
        connection: databaseData.connection

    },
};
