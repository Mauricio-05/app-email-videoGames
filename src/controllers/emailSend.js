const ejs = require("ejs");
const path = require("path");

const gmailAuthNodemailer = require("../utils/gmailAuth");
const DataAPIS = require("../utils/requestAPIS");

const Error = require("../utils/responseErrors");

const emailSend = async (req, res, next) => {
  try {
    const { email } = req.body;

    const videoGame = await DataAPIS();
    const { transport, CLIENT_EMAIL } = await gmailAuthNodemailer();

    const template = await ejs.renderFile(
      path.join("src", "public", "template", "template.ejs"),
      { videoGame }
    );

    const templateEmail = {
      from: `"App Email VideoGame 👾" ${CLIENT_EMAIL}`,
      to: `${email}`,
      subject: `${videoGame.title} 🎮`,
      html: template,
    };

    const { response } = await transport.sendMail(templateEmail);

    return res.status(200).json({
      code: 200,
      message: "Email Successfull",
      send: response,
    });
  } catch (err) {
    const error = new Error("500", err.toString());
    return next(error);
  }
};

module.exports = emailSend;
