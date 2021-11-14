"use strict";

const events = require("./HUB.pool");

function pickup(payload) {
  // daclare new date
  let date = new Date();

  // declare pick up event object
  let pickupEvent = {
    event: "pickup",
    time: `${date.getDate()}`,
    payload: payload,
  };
  console.log("EVENT", pickupEvent);
  console.log(`DRIVER: Picked up ${payload.orderId}`);
  events.emit("in-transit", payload);
}

module.exports = pickup;