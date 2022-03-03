//  Requires express
const { Router } = require("express");

// Controllers bussiness logic
const emailSend = require("../controllers/emailSend");

// Instancia de objetos
const router = Router();

// Routess
router.post("/", emailSend);

// exports
module.exports = router;
