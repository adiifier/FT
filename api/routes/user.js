const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middlewares/user");
const { User, Course } = require("../db");

router.post("/sign-up", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  await User.create({
    username: username,
    password: password,
  }); //-->.then()-->.catch()

  res.json({
    message: "User Created Succesfully",
  });
});

router.get("/courses", async (req, res) => {
  const response = await Course.find({});

  res.json({
    Courses: response,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const username = req.headers.username;

  const courseId = req.params.courseId;

  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );

  res.json({
    message: "Purchases Complete",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const user = await User.findOne({
    username: req.headers.username,
  });
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });
  res.json({
    courses: courses,
  });
});

module.exports = router;
