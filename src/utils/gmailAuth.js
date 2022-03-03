// util path routes
const path = require("path");

// Variable enveroinment
require("dotenv").config({ path: path.join("src", "OAuth2.env") });

// requires dependecies
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

// assign variable enveroinment
const CLIENT_EMAIL = process.env.CLIENT_EMAIL;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

// Instance object googleAPIS
const OAuth2 = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

OAuth2.setCredentials({ refresh_token: REFRESH_TOKEN });

const gmailAuthNodemailer = async () => {
  try {
    const accessToken = await OAuth2.getAccessToken();
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: CLIENT_EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    return {
      transport,
      CLIENT_EMAIL,
    };
  } catch (err) {
    return err;
  }
};

module.exports = gmailAuthNodemailer;
