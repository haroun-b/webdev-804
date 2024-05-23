function handleNotFound(res) {
  res.status(404).json({ message: "Resource Not Found!" });
}

module.exports = { handleNotFound };
