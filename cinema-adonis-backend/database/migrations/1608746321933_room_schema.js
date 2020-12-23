"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RoomSchema extends Schema {
  up() {
    this.create("rooms", (table) => {
      table.increments();
      table.integer("cinema_id").unsigned();
      table.integer("rows", 255);
      table.integer("seat", 255);
      table.integer("number", 255);
      table.timestamps();

      table.foreign("cinema_id").references("cinemas.id");
    });
  }

  down() {
    this.drop("rooms");
  }
}

module.exports = RoomSchema;
