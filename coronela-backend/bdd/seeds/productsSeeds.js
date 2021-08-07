exports.seed = function (knex, Promise) {
    return knex('Products').del()
        .then(function () {
            // Inserts seed entries
            return knex('Products').insert([
                {
                    idProducts: 1,
                    nameProduct: 's8 plus',
                    descriptionProduct: 'celular s8',
                    priceProduct: '120.68',
                    categoryProduct: 'Tecnologia',
                    photoProduct: 's8.png',
                },
                {
                    idProducts: 2,
                    nameProduct: 'Refrigeradora',
                    descriptionProduct: 'refri',
                    priceProduct: '500.68',
                    categoryProduct: 'Electrodomestico',
                    photoProduct: 'refri.png',
                },
            ]);
        });
};