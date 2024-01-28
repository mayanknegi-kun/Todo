require("dotenv").config();
const express = require("express");
const cors = require("cors");
const setupDB = require("./utils/db");
const userRouter = require("./routes/userRouter");
const todoRouter = require("./routes/todoRouter");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
setupDB();

app.use("/user", userRouter);
app.use("/todos", todoRouter);
app.get("/", (req, res) => {
  res.json({ msg: "Hello" });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
