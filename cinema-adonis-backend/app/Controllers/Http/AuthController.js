"use strict";

const User = require("../../Models/User");

const UserService = use("App/Service/UserService");
const InputHelper = use("App/Helpers/InputHelper");

class AuthController {
  constructor() {
    this.UserService = new UserService();
  }

  async login({ request, resonse, auth }) {
    const user = request.all();
    const logged = await auth.attempt(user.email, user.password, true);

    return resonse.json(logged);
  }

  async register({ request, response }) {
    const user = await InputHelper.getData(new UserDTO(), request.all());
    const newUser = await this.UserService.create(user);

    return response.json(newUser);
  }

  async profile({ request, response, auth }) {
    const { id } = auth.getUser();
    const { username, email } = request.all();

    const userUpdate = await this.UserService.updateProfile(
      id,
      username,
      email
    );

    const userLogged = await auth.generate(userUpdate, true);

    return userLogged;
  }
}

module.exports = AuthController;
