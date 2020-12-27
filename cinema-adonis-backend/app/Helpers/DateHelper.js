"use strict";

const moment = require("moment");
const Config = use("Config");

class DateHelper {
  static async getDate(mDate, format = null) {
    const formatMoment =
      format || Config.get("constants.date.date_default_format");
    const dateFormat = mDate
      ? moment(mDate).format(formatMoment)
      : moment().format(formatMoment);

    return dateFormat;
  }

  static async getHour(mDateTime, format = null) {
    const formatTime =
      format || Config.get("constants.date.hour_default_format");
    const dateTimeFormat = mDateTime
      ? moment(mDate).format(formatTime)
      : moment().format(formatTime);

    return dateTimeFormat;
  }
}

module.exports = DateHelper;
