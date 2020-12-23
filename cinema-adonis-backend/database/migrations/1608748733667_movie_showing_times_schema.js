"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MovieShowingTimesSchema extends Schema {
  up() {
    this.create("movie_showing_times", (table) => {
      table.increments();
      table.integer("movie_showing_id").unsigned();
      table.string("hour_to_show", 255);
      table.timestamps();

      table.foreign("movie_showing_id").references("movie_showings.id");
    });
  }

  down() {
    this.drop("movie_showing_times");
  }
}

module.exports = MovieShowingTimesSchema;
