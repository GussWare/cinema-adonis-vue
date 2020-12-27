"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const DateHelper = use("App/Helpers/DateHelper");

class Cinema extends Model {
  movie_showings() {
    return this.hasMany("App/Models/MovieShowing");
  }

  rooms() {
    return this.hasMany("App/Models/Room");
  }
}

module.exports = Cinema;
