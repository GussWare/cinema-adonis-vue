"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CustomerSchema extends Schema {
  up() {
    this.create("customers", (table) => {
      table.increments();
      table.integer("user_id").unsigned();
      table.string("phone", 255).nullable();
      table.string("credit_card", 255);
      table.timestamps();

      table.foreign("user_id").references("users.id");
    });
  }

  down() {
    this.drop("customers");
  }
}

module.exports = CustomerSchema;
