let User = require("../model/users.model");

const users = async (req, res) => {
    // User.find()
    //   .select("contact password name username")
    //   .exec()
    //   .then((docs) => {
    //     const response = {
    //       count: docs.length,
    //       Users: docs.map((doc) => {
    //         return {
    //           _id: doc._id,
    //           password: doc.password,
    //           name: doc.name,
    //           username: doc.username,
    //         };
    //       }),
    //     };
    //     res.status(200).json(response);
    //   })
    //   .catch((err) => res.status(400).json("Error: " + err));
    try{
        var usersList = await User.find({});

        res.json({msg: "success", usersList})
    }catch(e){
        res.json({msg: "unsuccessful", e})

    }
  }


  const createUsers = (req, res) => {
    const password = req.body.password;
  const username = req.body.username;
  const email = req.body.email;

  const newUser = new User({
    username,
    password,
    email,
  });

  newUser
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "User Submitted",
        createdUser: {
          password: result.password,
          username: result.username,
          email: result.email,
          _id: result._id,
        },
      });
    })
    .catch((err) => res.status(400).json("Error: " + err));
  }

  module.exports = { users, createUsers }