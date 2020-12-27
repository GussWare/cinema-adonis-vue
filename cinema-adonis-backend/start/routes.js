"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.on("/").render("welcome");

Route.group(() => {
  Route.post("login", "AuthController.login");
  Route.post("register", "AuthController.register");
  Route.put("profile", "AuthController.profile").middleware(["auth:jwt"]);

  Route.get("cinemas", "CinemaController.findAll");
  Route.get("cinemas/:id", "CinemaController.findById");

  Route.get("genres", "GenreController.findAll");
  Route.get("movies/:cinemaId/by-cinema", "MoviesController.findMovieByCinema");
  Route.get("movies/:id", "MoviesController.findById");

  Route.post("bookings", "BookingsController.save").middleware(["auth:jwt"]);
  Route.get("bookings/last", "BookingsController.findByLast").middleware([
    "auth:jwt",
  ]);
  Route.get(
    "bookings/my-bookings",
    "BookingsController.findMyBookings"
  ).middleware(["auth:jwt"]);
}).prefix("api/v1");
