"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class GenreMovieSchema extends Schema {
  up() {
    this.create("genre_movies", (table) => {
      table.increments();
      table.integer("movie_id").unsigned();
      table.integer("genre_id").unsigned();
      table.timestamps();

      table.foreign("movie_id").references("movies.id");
      table.foreign("genre_id").references("genres.id");
    });
  }

  down() {
    this.drop("genre_movies");
  }
}

module.exports = GenreMovieSchema;
