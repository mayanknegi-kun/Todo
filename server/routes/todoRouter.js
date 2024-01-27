const { Router } = require("express");
const { isTodoDataValid } = require("../validations/todoValidation");
const { verifyToken } = require("../utils/jwt");
const { Todo } = require("../models/todo");
const router = Router();

const validateInputs = (req, res, next) => {
  const todoData = req.body;
  const validation = isTodoDataValid(todoData);
  if (validation.success) {
    next();
  } else {
    return res.status(422).json({ error: validation?.error });
  }
};

const getUserId = (req, res, next) => {
  const token = req.headers.authorization;
  const [tokenType, authToken] = token?.split(" ");
  if (tokenType !== "Bearer") {
    return res.status(403).json({ msg: "Invalid or expired token" });
  }
  try {
    const isvalid = verifyToken(authToken);
    const userId = isvalid?.id;
    req.userId = userId;
    next();
  } catch (error) {
    return res.status(403).json({ msg: "Invalid or expired token" });
  }
};

router.get("/list", getUserId, async (req, res) => {
  const userId = req.userId;
  const todos = await Todo.find({
    userId: {
      $in: userId,
    },
  });
  res.status(200).json(todos);
});

router.post("/create", validateInputs, getUserId, async (req, res) => {
  const { data } = req.body;
  const userId = req.userId;

  const todo = await Todo.create({
    data: data,
    isCompleted: false,
    userId,
  });

  const todoId = todo.id;
  res.status(200).json({
    msg: "todo creaed successfully",
    id: todoId,
  });
});

module.exports = router;
