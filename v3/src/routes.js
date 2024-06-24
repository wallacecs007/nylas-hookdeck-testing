const express = require('express');

const router = express.Router();

router.get("/", function(req, res) {
  res.send("Welcome to the Webhooks API");
});

// Nylas Webhooks

router.get("/nylas", function(req, res) {
    console.log("Challenge Received: ", req.query.challenge)
    res.send(req.query.challenge).status(200);
});

router.post("/nylas", function(req, res) {
    
    console.log(req.body)
    res.send("Webhook received").status(200);
});

module.exports = router;

function verifySignature(data, secret) {
    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(JSON.stringify(data));
    return hmac.digest('hex');
}