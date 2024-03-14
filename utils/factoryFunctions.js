exports.sendRes = (res, status, data, results, msg, error = false) => {
  res.status(status).json({
    results: results,
    data: data,
    message: msg,
    error: error,
  });
};
