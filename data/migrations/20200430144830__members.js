
exports.up = function(knex, Promise) {
    return knex.schema.createTable('members', tbl => {
        tbl.increments();
        tbl.string('First_Name').notNullable();
        tbl.string('Last_Name').notNullable();
    }); 
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('members');
};
