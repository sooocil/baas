const errorHandler = (status, message) => {
  const err = new Error("Not found");
  err.status = status;
  err.message = message;
  return err;
};

module.exports = errorHandler;
