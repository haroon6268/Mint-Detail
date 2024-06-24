const client = require("../utils/square");
const crypto = require("crypto");

exports.createOrder = async (req, res, next) => {
  console.log(req.body);
  const { catalogId, displayName, email, phone, address, deliverAt, payment } =
    req.body;
  let date = new Date(deliverAt).toISOString();
  const order = {
    locationId: process.env.LOCATION,
    lineItems: [
      {
        quantity: "1",
        catalogObjectId: catalogId,
      },
    ],
    fulfillments: [
      {
        type: "DELIVERY",
        state: "PROPOSED",
        deliveryDetails: {
          recipient: {
            displayName: displayName,
            emailAddress: email,
            phoneNumber: phone,
            address: {
              addressLine1: address,
            },
          },
          deliverAt: date,
        },
      },
    ],
  };
  const uuid = crypto.randomUUID();

  const response = await client.ordersApi.createOrder({ order, uuid });
  //   console.log(response.result.order.id);
  //   console.log(response.result.order.totalMoney.amount);

  const orderId = response.result.order.id;
  const UUID2 = crypto.randomUUID();
  const payementResponse = await client.paymentsApi.createPayment({
    sourceId: "cnon:card-nonce-ok",
    idempotencyKey: UUID2,
    amountMoney: {
      amount: 14900,
      currency: "USD",
    },
    orderId: orderId,
    acceptPartialAuthorization: false,
  });

  console.log(payementResponse);
};
