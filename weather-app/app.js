const request = require("request");
const utils = require("./utils");

const userLocation = process.argv[2];
if (!userLocation) {
    return console.log("Please supply a location name.");
}

utils.geocode(userLocation, (error, data) => {
    if (error) {
        return console.log(error);
    }
    utils.forecast(data.latitude, data.longitude, (error, fdata) => {
        if (error) {
            return console.log(error);
        }
        console.log(data.location);
        console.log(fdata);
    });
});
