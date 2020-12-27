"use strict";

class InputHelper {
  static async getData(objectDTO, inputData) {
    for (const i in objectDTO) {
      if (inputData.hasOwnProperty(i)) {
        objectDTO[i] = inputData[i];
      }
    }

    return objectDTO;
  }
}

module.exports = InputHelper;
