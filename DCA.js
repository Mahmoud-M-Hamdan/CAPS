"use strict";

const events = require("./HUB.pool");

function inTransit(payload) {
  // daclare new date
  let date = new Date();

  // declare in transit event object
  let inTRansitEvent = {
    event: "in-transit",
    time: `${date.getDate()}/ November`,
    payload: payload,
  };
  console.log("EVENT", inTRansitEvent);
  events.emit("delivered", payload);
}



function delivered(payload) {
  console.log(`DRIVER: delivered up ${payload.orderId}`);
  console.log(`VENDOR: Thank you for delivering ${payload.orderId}`);
  // daclare new date
  let date = new Date();

  // declare delivered event object
  let deliveredEvent = {
    event: "delivered",
    time: `${date.getDate()}/ November`,
    payload: payload,
  };
  console.log("EVENT", deliveredEvent);
}


module.exports = {inTransit,delivered};