"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SeatSchema extends Schema {
  up() {
    this.create("seats", (table) => {
      table.increments();
      table.integer("seat_row");
      table.integer("seat_number");
      table.enum("seat_state", ["AVAILABLE", "BOOKED"]).defaultTo("AVAILABLE");
      table.integer("booking_id").nullable().unsigned();
      table.timestamps();

      table.foreign("booking_id").references("bookings.id");
    });
  }

  down() {
    this.drop("seats");
  }
}

module.exports = SeatSchema;
