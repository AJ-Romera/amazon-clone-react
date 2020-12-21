const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
	"sk_test_51I0pufDKAE5kzKjk7JWur3hMGetl5JLeTOWCsscRIOHEklbCs3FwXioyXHoZbJLsJFmBdgeCmYGl10N9tI2rlfGP00dDyBeiJU"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

// - Listen command
exports.api = functions.https.onRequest(app);
