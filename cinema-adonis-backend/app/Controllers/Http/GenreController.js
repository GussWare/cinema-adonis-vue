"use strict";

const GenreService = use("App/Services/GenreService");

class GenreController {
  constructor() {
    this.GenreService = new GenreService();
  }
  async findAll({ request, response }) {
    const genres = await this.GenreService.findAll();
    return response.json(genres);
  }
}

module.exports = GenreController;
