const { Router } = require("express");
const { isTodoDataValid } = require("../validations/todoValidation");
const { verifyToken } = require("../utils/jwt");
const { Todo } = require("../models/todo");
const { User } = require("../models/user");
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
  const currentUser = await User.findOne({ _id: { $in: userId } });
  const todoIds = currentUser.todoIds;
  const todos = await Todo.find({
    _id: { $in: todoIds },
    isDeleted: false,
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

  await User.updateOne(
    { _id: { $in: userId } },
    { $push: { todoIds: todoId } }
  );

  res.status(200).json({
    msg: "todo creaed successfully",
    id: todoId,
  });
});

router.put("/:todoId", validateInputs, getUserId, async (req, res) => {
  try {
    const todoId = req.params.todoId;
    const { data, isCompleted } = req.body;
    const filter = { _id: todoId };
    const update = {
      data: data,
      isCompleted: isCompleted,
      updatedAt: new Date(),
    };
    await Todo.findOneAndUpdate(filter, update);
    res.status(200).json({
      msg: "Todo updated successfully",
    });
  } catch (err) {
    res.status(500).json({ msg: "internal server error" });
  }
});

router.delete("/:todoId", getUserId, async (req, res) => {
  const todoId = req.params.todoId;
  const filter = { _id: todoId };
  const update = {
    isDeleted: true,
    updatedAt: new Date(),
  };
  await Todo.findOneAndUpdate(filter, update);
  res.status(200).json({
    msg: "Todo Deleted successfully",
  });
});

module.exports = router;
