"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MoviesSchema extends Schema {
  up() {
    this.create("movies", (table) => {
      table.increments();
      table.string("name", 255).notNullable().unique();
      table.string("director", 255);
      table.string("screenshot", 255);
      table.text("synopsis");
      table.timestamps();
    });
  }

  down() {
    this.drop("movies");
  }
}

module.exports = MoviesSchema;
