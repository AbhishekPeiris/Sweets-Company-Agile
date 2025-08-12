// Basic error handler; keep it simple
// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, _next) {
  console.error(err);
  res
    .status(err.status || 500)
    .json({ message: err.message || "Server error" });
}
