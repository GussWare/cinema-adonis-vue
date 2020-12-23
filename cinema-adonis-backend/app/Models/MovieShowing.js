"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MovieShowing extends Model {
  cinema() {
    return this.belongsTo("App/Models/Cinema");
  }

  room() {
    return this.belongsTo("App/Models/Room");
  }

  movies() {
    return this.hasMany("App/Models/Movie");
  }

  movie_showing_times() {
    return this.hasMany("App/Models/MovieShowingTime");
  }
}

module.exports = MovieShowing;
