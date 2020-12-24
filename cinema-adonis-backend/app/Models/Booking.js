"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Booking extends Model {
  seats() {
    return this.hasMany("App/Models/Seat");
  }

  movie_showing_time() {
    return this.belongsTo("App/Models/MovieShowingTime");
  }
}

module.exports = Booking;
