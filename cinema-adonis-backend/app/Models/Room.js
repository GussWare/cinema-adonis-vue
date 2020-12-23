"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Room extends Model {
  cinema() {
    return this.belongsTo("App/Models/Cinema");
  }

  movie_showing() {
    return this.hasMany("App/Models/MovieShowing");
  }
}

module.exports = Room;