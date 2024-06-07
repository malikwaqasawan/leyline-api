const createError = (msg, statusCode) => {
  const err = new Error(msg);
  err.statusCode = statusCode;
  return err;
};

export default createError;
