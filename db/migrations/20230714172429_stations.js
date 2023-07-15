/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('stations' ,  (table) =>{
      table.increments('id') 
      table.string('name').unique()
      table.integer('path_id').references('id').inTable('paths')
      table.integer('forward_id').nullable()
      table.integer('backward_id').nullable()
      table.boolean('has_path_link').notNullable()
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('stations')
  };
  