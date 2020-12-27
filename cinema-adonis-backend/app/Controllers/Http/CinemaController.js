"use strict";

const CinemaService = use("App/Services/CinemaService");

class CinemaController {
  constructor() {
    this.CinemaService = new CinemaService();
  }

  async findAll({ response }) {
    const cinemas = await this.CinemaService.findAll();
    return response.json(cinemas);
  }

  async findById({ response, params }) {
    const cinema = await this.CinemaService.findById(params.id);
    return response.json(cinema);
  }
}

module.exports = CinemaController;
