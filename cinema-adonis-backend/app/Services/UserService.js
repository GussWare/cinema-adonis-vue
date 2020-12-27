"use strict";

const UserModel = use("App/Models/User");
const UserDTO = use("App/Dto/UserDto");

class UserService {
  constructor() {}

  async findAll() {}

  async findById() {}

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

  async updateProfile(id, username, email) {
    const userDTO = new UserDTO();
  }
}

module.exports = UserService;
