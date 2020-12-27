"use strict";

const GenreModel = use("App/Models/Genre");

class GenreService {
  constructor() {}

  async findAll() {
    const genres = await GenreModel.all();
    return genres;
  }
}

module.exports = GenreService;
