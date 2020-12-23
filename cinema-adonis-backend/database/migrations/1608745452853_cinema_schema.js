"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CinemaSchema extends Schema {
  up() {
    this.create("cinemas", (table) => {
      table.increments();
      table.string("name", 255).notNullable().unique();
      table.string("screenshot", 255);
      table.string("address", 255);
      table.string("phone", 255);
      table.string("seat_capacity", 255);
      table.text("details", 255);
      table.timestamps();
    });
  }

  down() {
    this.drop("cinemas");
  }
}

module.exports = CinemaSchema;
