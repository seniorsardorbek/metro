/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('station_path_links' ,  (table) =>{
      table.increments('id') 
      table.integer('station_id').references('id').inTable('stations')
      table.integer('linked_id')
  
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('station_path_links')
  };
  