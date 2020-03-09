const jwt = require("jsonwebtoken");
const model = require("../../models");
const User = model.user;

exports.store = async (req, res) => {
  try {
    const rolereq = req.body.role;
    let role = "";
    if (rolereq) {
      role = rolereq;
    } else {
      role = "public";
    }

    const {
      name,
      username,
      email,
      password,
      gender,
      phone,
      address
    } = req.body;

    User.findOne({ where: { user_name: username } }).then(Username => {
      if (!Username) {
        const user = User.create({
          name: name,
          user_name: username,
          email: email,
          password: password,
          gender: gender,
          phone: phone,
          address: address,
          role: role
        }).then(user => {
          const token = jwt.sign({ userId: user.id }, "my-secret-key");
          res.status(200).send({
            status: 200,
            message: "success",
            username: user.user_name,
            status: user.role,
            token
          });
        });
      } else {
        res.status(201).send({
          status: 201,
          message: "user name is already in use",
          data: req.body
        });
      }
    });
  } catch (error) {
    res.status(400).send({
      status: 400,
      username: "unique",
      password: "unique",
      message: "Bad Request",
      data: req.body
    });
  }
};
