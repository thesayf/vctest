var stripe = require("stripe")(
  "sk_live_soQQdjDzUEp49Ue0Xb2qkPyP"
  //"pk_test_GrFP5ytVZ9Df9ZKztAJbiOmc"
);
var User = require(__dirname + '/../models/user');

var stripePay = {};

stripePay.chargeCustomer = function(price, customerID, name, token, utils, callback) {
    stripe.charges.create({
        amount: price*100, // stripe takes pence
        currency: "GBP",
        metadata: {name: name},
        source: token,
        description: customerID
    }, function(err, charge) {
        // asynchronously called
        if(err) {
            utils.winston.log('info', JSON.stringify(err));
            JSON.stringify(obj)
            callback(false);
        } else {
            utils.winston.log('info', JSON.stringify(charge));
            callback(charge);
        }
    });
}




module.exports = stripePay;
