"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MovieShowingSchema extends Schema {
  up() {
    this.create("movie_showings", (table) => {
      table.increments();
      table.integer("cinema_id").unsigned();
      table.integer("movie_id").unsigned();
      table.integer("room_id").unsigned();
      table.date("movie_show_date");
      table.timestamps();

      table.foreign("cinema_id").references("cinemas.id");
      table.foreign("movie_id").references("movies.id");
      table.foreign("room_id").references("rooms.id");
    });
  }

  down() {
    this.drop("movie_showings");
  }
}

module.exports = MovieShowingSchema;
