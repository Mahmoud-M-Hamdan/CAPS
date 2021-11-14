"use strict";

const events = require("./HUB.pool");
const faker = require("faker");

setTimeout(() => {
    // generate fake data in for CAPS 
  let payload = {
    store: faker.company.companyName(),
    orderId: faker.random.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
  };

  // emit events
  events.emit("pickup", payload);
}, 3000);

const pickup = require("./VCA");
const {inTransit,delivered} = require("./DCA");


events.on("pickup", pickup);
events.on("in-transit", inTransit);
events.on("delivered", delivered);