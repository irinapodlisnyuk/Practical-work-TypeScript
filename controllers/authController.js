const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const secretKey = "your_secret_key";

const register = (req, res) => {
  const { username, password } = req.body;
  const existingUser = User.find(username);

  if (existingUser) {
    return res.status(400).json({ message: "пользователь уже существует" });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = User.create(username, hashedPassword);

  return res
    .status(201)
    .json({ message: "пользователь успешно добавлен", user: newUser });
};

const login = (req, res) => {
  const { username, password } = req.body;
  const user = User.find(username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res
      .status(400)
      .json({ message: "произошла ошибка при авторизации - неверные данные" });
  }

  const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
  return res.json({ message: "авторизация прошла успешно", token });
};

module.exports = { register, login };
