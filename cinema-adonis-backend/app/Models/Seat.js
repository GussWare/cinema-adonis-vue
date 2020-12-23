"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Seat extends Model {
  booking() {
    return this.belongsTo("App/Models/Booking");
  }
}

module.exports = Seat;
