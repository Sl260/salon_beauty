require("dotenv").config({ path: "../.env" });
const User = require("../Model/User");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");

// Creation logic
exports.createUser = (req, res) => {
  console.log("request", req.body);
  const { email, firstName, lastName, password } = req.body;

  // First check database to see if a user exists, before registering one
  User.find({ email }, (err, result) => {
    if (err) {
      res.status(400).json({
        message: "Cannot query User Collection. " + err,
      });
    } else {
      // No users are found, go ahead and register
      if (result.length === 0) {
        // Salt and hash password of newly user before registering
        bcrypt.genSalt(10, (err, salt) => {
          if (err) {
            res.status(400).json({
              message: "Cannot salt password, invalid register. " + err,
            });
          } else {
            bcrypt.hash(password, salt, (err, hashedPassword) => {
              if (err) {
                res.status(400).json({
                  message: "Cannot hash password, invalid register. " + err,
                });
              } else {
                let newUser = new User({
                  email,
                  firstName,
                  lastName,
                  password: hashedPassword,
                  numberOfPosts: 0,
                });

                // Save newly created User to database with hashed password
                newUser
                  .save()
                  .then(() => {
                    res.status(201).json({
                      message: "User successfully registered!",
                    });
                  })
                  .catch((err) => {
                    res.status(400).json({
                      message: "Cannot register User. " + err,
                    });
                  });
              }
            });
          }
        });
      } else {
        // User exists? Respond with an error
        res.status(400).json({
          message: "User already exists!",
        });
      }
    }
  });
};

// Login logic

exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  // First, search the User by email to validate username
  User.find({ email }, (err, result) => {
    if (err) {
      res.status(400).json({
        message: "Cannot search User. " + err,
      });
    } else {
      // No emails found, means invalid email
      if (result.length === 0) {
        res.status(400).json({
          message: "Email does not exist!",
        });
      } else {
        // Email is found, compare passwords
        bcrypt.compare(password, result[0].password, (err, decoded) => {
          if (err) {
            res.status(400).json({
              message: "Cannot compare passwords. " + err,
            });
          } else if (decoded) {
            // Sign a JWT token and pass the email as the payload, valid for one hour only
            let token = JWT.sign(
              { email: result[0].email },
              process.env.TOKEN_SECRET,
              { expiresIn: 60 * 60 * 60 }
            );

            // Pass token to User
            res.status(200).json({
              token,
            });
          } else {
            res.status(401).json({
              message: "Passwords do not match",
            });
          }
        });
      }
    }
  });
};

// Update Logic

exports.updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findOneAndUpdate({ id: id }, req.body, {
      new: true,
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Logic

exports.deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findOneAndDelete({ id: id });

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all users

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get user by id

exports.getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({ id: id });

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
