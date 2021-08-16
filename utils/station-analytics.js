"use strict";

const stationAnalytics = {
  getShortestReading(station) {
    let shortestReading = null;
    if (station.readings.length > 0) {
      shortestReading = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].duration < shortestReading.duration) {
          shortestReading = station.readings[i];
        }
      }
    }
    return shortestReading;
  },

  getStationDuration(station) {
    let stationDuration = 0;
    for (let i = 0; i < station.readings.length; i++) {
      let reading = station.readings[i];
      stationDuration = stationDuration + reading.duration;
    }
    return stationDuration;
  }
};

module.exports = stationAnalytics;
