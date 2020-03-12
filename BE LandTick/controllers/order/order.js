// -POST /order
const { Op } = require("sequelize");
const models = require("../../models");
const Order = models.order;
const User = models.user;
const Ticket = models.ticket;
const Train = models.train;

// multer input file
const multer = require("multer");
// const upload = multer({ dest: 'uploads/'})
var path = require("path");

const storage = multer.diskStorage({
  destination: path.join(`${__dirname}./../public/images/`),
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});

// init upload
const upload = multer({
  storage: storage
}).single("picture");

// upload file
exports.upload = async (req, res) => {
  try {
    upload(req, res, err => {
      const id = req.params.id;
      /*Now do where ever you want to do*/
      const fileName = {
        attachment: req.file.filename
      };
      if (!err) {
        Order.update(fileName, { where: { id: id } }).then(ress => {
          if (ress) {
            Order.findOne({ where: { id: id } }).then(result => {
              res.status(200).send({
                status: 200,
                message: "success",
                result
              });
            });
          }
        });
      } else console.log(err.message);
    });
  } catch (error) {
    console.log(error.message);
  }
};

// 5. Ticket MYTICKET
exports.myticket = async (req, res) => {
  try {
    const id = req.user.userId;
    var date = new Date().toJSON();
    // .slice(0, 10);
    // .replace(/-/g, "/");
    // [Op.like]:
    const myticket = await Order.findAll({
      where: {
        id_user: id
      },
      order: [["id", "DESC"]],
      attributes: [
        "id",
        "qty",
        "total_price",
        "status",
        "attachment",
        "createdAt",
        "updatedAt"
      ],
      include: [
        {
          model: User,
          attributes: [
            "id",
            "name",
            "user_name",
            "email",
            "password",
            "gender",
            "phone",
            "address"
          ]
        },
        {
          model: Ticket,
          attributes: [
            "id",
            "name_train",
            "date_start",
            "start_station",
            "start_time",
            "destination_station",
            "arival_time",
            "price"
          ],
          include: [{ model: Train, attributes: ["type_train"] }]
        }
      ]
    });

    res.status(200).send({
      status: 200,
      message: "success",
      myticket
    });
    // }
  } catch (error) {
    res.send(error);
  }
};

// 6. buy tiket
exports.order = async (req, res) => {
  try {
    const idTrain = req.body.ticket;
    const train = await Ticket.findOne({ where: { id: idTrain } });
    // // res.send(train.qty);
    const id = req.user.userId;
    const { qty, attachment } = req.body;

    const subPrice = train.price * qty; //get sub total price
    const remainsQty = train.qty - qty;
    const data = {
      qty: remainsQty
    };
    if (train.qty) {
      // if (train.qty < qty) {
      const updateTicket = await Ticket.update(data, {
        where: { id: idTrain }
      });
      const resultRemains = await Ticket.findOne({ where: { id: idTrain } });

      const result = await Order.create({
        id_ticket: idTrain,
        id_user: id,
        qty: qty,
        total_price: subPrice,
        status: "p",
        attachment: attachment
      });
      if (result) {
        const resultOrder = await Order.findOne({
          where: { id: result.id },
          attributes: ["id", "qty", "total_price", "status", "attachment"],
          include: [
            {
              model: User,
              attributes: [
                "name",
                "user_name",
                "email",
                "gender",
                "phone",
                "address"
              ]
            },
            {
              model: Ticket,
              attributes: [
                "id",
                "name_train",
                "date_start",
                "start_station",
                "start_time",
                "destination_station",
                "arival_time"
              ],
              include: { model: Train, attributes: ["type_train"] }
            }
          ]
        });
        res.status(200).send({
          status: 200,
          message: "success",
          resultOrder,
          resultRemains
        });
      }
      // ====
      // } else {
      //   res.status(404).send({
      //     status: 404,
      //     message: "Ticket less / used up"
      //   });
      // }
    } else {
      res.status(404).send({
        status: 404,
        message: "no ticket"
      });
    }
  } catch (error) {}
};

//find all order
exports.index = async (req, res) => {
  try {
    const admin = await User.findAll();
    if (admin) {
      const result = await Order.findAll({
        order: [["id", "DESC"]],
        attributes: ["id", "qty", "total_price", "status", "attachment"],
        include: [
          {
            model: User,
            attributes: [
              "id",
              "name",
              "user_name",
              "email",
              "gender",
              "phone",
              "address"
            ]
          },
          {
            model: Ticket,
            attributes: [
              "id",
              "name_train",
              "date_start",
              "start_station",
              "start_time",
              "destination_station",
              "arival_time"
            ],
            include: { model: Train, attributes: ["type_train"] }
          }
        ]
      });
      res.send(result);
      if (result) {
        res.status(200).send({
          status: 200,
          message: "success",
          resultOrder
        });
      }
    } else {
      const result = await Order.findAll({
        where: { id_user: id },
        attributes: ["id", "qty", "total_price", "status", "attachment"],
        include: [
          {
            model: User,
            attributes: [
              "id",
              "name",
              "user_name",
              "email",
              "gender",
              "phone",
              "address"
            ]
          },
          {
            model: Ticket,
            attributes: [
              "id",
              "name_train",
              "date_start",
              "start_station",
              "start_time",
              "destination_station",
              "arival_time"
            ],
            include: { model: Train, attributes: ["type_train"] }
          }
        ]
      });
      res.send(result);
      if (result) {
        res.status(200).send({
          status: 200,
          message: "success",
          resultOrder
        });
      }
    }
  } catch (error) {}
};

// -GET/order/:id
exports.show = async (req, res) => {
  try {
    const id = req.user.userId;
    const idOrder = req.params.id;
    // console.log(idOrder);
    const admin = await User.findOne({
      where: { id: id }
    });
    if (admin) {
      const result = await Order.findOne({
        where: { id: idOrder },
        attributes: ["id", "qty", "total_price", "status", "attachment"],
        include: [
          {
            model: User,
            attributes: [
              "id",
              "name",
              "user_name",
              "email",
              "gender",
              "phone",
              "address"
            ]
          },
          {
            model: Ticket,
            attributes: [
              "id",
              "name_train",
              "date_start",
              "start_station",
              "start_time",
              "destination_station",
              "arival_time"
            ],
            include: { model: Train, attributes: ["type_train"] }
          }
        ]
      });
      res.send(result);
      if (result) {
        res.status(200).send({
          status: 200,
          message: "success",
          resultOrder
        });
      }
    } else {
      const result = await Order.findOne({
        where: { id: idOrder, id_user: req.user.userId },

        attributes: ["id", "qty", "total_price", "status", "attachment"],
        include: [
          {
            model: User,
            attributes: [
              "id",
              "name",
              "user_name",
              "email",
              "gender",
              "phone",
              "address"
            ]
          },
          {
            model: Ticket,
            attributes: [
              "id",
              "name_train",
              "date_start",
              "start_station",
              "start_time",
              "destination_station",
              "arival_time"
            ],
            include: { model: Train, attributes: ["type_train"] }
          }
        ]
      });
      res.send(result);
      if (result) {
        res.status(200).send({
          status: 200,
          message: "success",
          resultOrder
        });
      }
    }
  } catch (error) {}
};

// -PUT /order/:id
exports.update = async (req, res) => {
  try {
    const idOrder = req.params.id;
    // ======================================

    const resultUpdate = await Order.update(req.body, {
      where: { id: idOrder }
    });
    if (resultUpdate) {
      const resultOrder = await Order.findOne({
        where: { id: idOrder },
        attributes: ["id", "qty", "total_price", "status", "attachment"],
        include: [
          {
            model: User,
            attributes: [
              "name",
              "user_name",
              "email",
              "gender",
              "phone",
              "address"
            ]
          },
          {
            model: Ticket,
            attributes: [
              "id",
              "name_train",
              "date_start",
              "start_station",
              "start_time",
              "destination_station",
              "arival_time"
            ],
            include: { model: Train, attributes: ["type_train"] }
          }
        ]
      });
      res.status(200).send({
        status: 200,
        message: "success",
        resultOrder
      });
    }
  } catch (error) {}
};
