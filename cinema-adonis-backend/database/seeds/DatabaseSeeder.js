"use strict";

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class DatabaseSeeder {
  async run() {
    const customersArray = await Factory.model(
      "App/Models/Customer"
    ).createMany(5);

    const cinemasArray = await Factory.model("App/Models/Cinema").createMany(
      10
    );

    const genreAction = await Factory.model("App/Models/Genre").create({
      name: "Accion",
    });
    const genreFantasia = await Factory.model("App/Models/Genre").create({
      name: "Fantasia",
    });
    const genreComedia = await Factory.model("App/Models/Genre").create({
      name: "Comedia",
    });

    cinemasArray.forEach(async (cinema) => {
      for (let i = 0; i < 5; i++) {
        let room = await Factory.model("App/Models/Room").create({
          cinema_id: cinema.id,
        });

        let movie = await Factory.model("App/Models/Movie").create();

        await movie
          .genres()
          .attach([genreAction.id, genreComedia.id, genreFantasia.id]);

        const movieShowing = await Factory.model(
          "App/Models/MovieShowing"
        ).create({
          cinema_id: cinema.id,
          room_id: room.id,
          movie_id: movie.id,
        });

        const movieShowingTime = await Factory.model(
          "App/Models/MovieShowingTime"
        ).create({
          movie_showing_id: movieShowing.id,
        });

        customersArray.forEach(async (customer) => {
          const booking = await Factory.model("App/Models/Booking").create({
            customer_id: customer.id,
            movie_showing_time_id: movieShowingTime.id,
          });

          await Factory.model("App/Models/Seat").create({
            booking_id: booking.id,
          });
        });
      }
    });
  }
}

module.exports = DatabaseSeeder;
