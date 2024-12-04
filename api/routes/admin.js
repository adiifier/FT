const express = require("express");
const adminMiddleware = require("../middlewares/admin");
const { Admin, Course } = require("../db");
const router = express.Router();

router.post("/sign-up", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  await Admin.create({
    username: username,
    password: password,
  }); //-->.then()-->.catch()

  res.json({
    message: "Admin Created Succesfully",
  });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;
  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });

  res.json({
    message: "Course created succesfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

module.exports = router;
