"use strict";

const CinemaModel = use("App/Models/Cinema");
const CinemaDto = use("App/Dto/CinemaDto");
const DateHelper = use("App/Helpers/DateHelper");

class UserService {
  constructor() {}

  async pagination() {}

  async findAll() {
    const cinemas = await CinemaModel.query()
      .withCount("rooms as number_of_rooms")
      .fetch();

    return cinemas;
  }

  async findById(id) {
    const cinema = await CinemaModel.find(id);
    await cinema.loadMany({
      movie_showings: async (movie_showing) => {
        movie_showing
          .select("id", "movie_id", "room_id")
          .where("movie_show_date", await DateHelper.getDate())
          .with("movie_showing_times", async (movie_showing_time) => {
            movie_showing_time
              .where("hour_to_show", ">=", await DateHelper.getHour())
              .with("booking", (booking) => {
                booking.with("seats");
              });
          })
          .with("movie", (movie) => {
            movie.with("genres", (genre) => {
              genre.select("name");
            });
          })
          .with("room");
      },
    });

    return cinema;
  }

  async create(User) {
    const userInstance = new UserModel();
    userInstance.username = User.username;
    userInstance.email = User.email;
    userInstance.password = User.password;

    const newUser = await userInstance.save();
    return newUser;
  }

  async update(id, user) {
    const userInstance = await this.findById(id);

    if (!userInstance) {
      return null;
    }

    if (user.username) {
      userInstance.username = user.username;
    }

    if (user.email) {
      userInstance.email = user.email;
    }

    if (user.password) {
      userInstance.password = user.password;
    }

    userInstance.updated_at = new Date();

    return userInstance.save();
  }

  async delete() {}
}

module.exports = UserService;
