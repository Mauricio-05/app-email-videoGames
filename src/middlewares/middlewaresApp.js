const Error = require("../utils/responseErrors");

const errorCreate = (req, res, next) => {
  const error = new Error("404", "Not Found");
  next(error);
};

const errorHandler = (err, req, res, next) => {
  res.status(err.code).json(err);
};

module.exports = {
  errorCreate,
  errorHandler,
};
