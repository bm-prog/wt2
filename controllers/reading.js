"use strict";

const logger = require("../utils/logger");
const stationStore = require("../models/station-store");
//app.use(express.static('views/images')); //stackoverflow

const reading = {
  index(request, response) {
    const stationId = request.params.id;
    const readingId = request.params.readingId;
    logger.debug(`Editing Reading ${readingId} from Station ${stationId}`);
    const viewData = {
      title: "Edit Reading",
      station: stationStore.getStation(stationId),
      song: stationStore.getReading(stationId, readingId)
    };
    response.render("reading", viewData);
  },

  update(request, response) {
    const stationId = request.params.id;
    const readingId = request.params.readingid;
    const reading = stationStore.getReading(stationId, readingId)
    const newReading = {
      title: request.body.title,
      temperature: request.body.temperature,
      duration: Number(request.body.duration)
    };
    logger.debug(`Updating Reading ${readingId} from Station ${stationId}`);
    stationStore.updateReading(reading, newReading);
    response.redirect("/station/" + stationId);
  }
};

module.exports = reading;
