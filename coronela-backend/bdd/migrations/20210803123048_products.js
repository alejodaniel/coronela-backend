
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Products', function (table) {
        table.increments('idProducts').unsigned().primary();
        table.string('nameProduct', 150).notNullable();
        table.string('descriptionProduct', 150).notNullable();
        table.string('priceProduct',10).notNullable();
        table.string('categoryProduct', 150).notNullable();
        table.longtext('photoProduct').notNullable();
        table.timestamps();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('Products');
  
};
