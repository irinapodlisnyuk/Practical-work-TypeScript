const jwt = require("jsonwebtoken");
const secretKey = "your_secret_key";

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(403).json({ message: "доступ запрещен" });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).json({ message: "токен некорректный" });
  }
};

module.exports = authenticate;
