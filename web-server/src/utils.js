const request = require("request");
const config = require("./config");

const geocode = (location, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        location
    )}.json?access_token=${config.mapBoxAPIKey}&limit=1`;
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback({ error: "Unable to connect to location service." });
            return;
        }
        if (response.body.features.length === 0) {
            callback({ error: "Unable to find the requested location." });
            return;
        }
        callback(undefined, {
            latitude: response.body.features[0].center[1],
            longitude: response.body.features[0].center[0],
            location: response.body.features[0].place_name
        });
    });
};

const forecast = (lat, long, callback) => {
    const url = `https://api.darksky.net/forecast/${config.darkSkyAPIKey}/${lat},${long}?units=si`;
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback({ error: "Unable to connect to weather service." });
            return;
        }
        const body = response.body;

        if (body.error) {
            callback({
                error: "Unable to find weather for the requested location."
            });
            return;
        }

        if (!body.daily.data[0].summary) {
            callback({
                error:
                    "No weather report is available for the requested location."
            });
            return;
        }
        callback(
            undefined,
            body.daily.data[0].summary +
                " It is currently " +
                body.currently.temperature +
                " degrees out. There is a " +
                body.currently.precipProbability +
                "% chance of rain."
        );
    });
};

module.exports = {
    geocode: geocode,
    forecast: forecast
};
