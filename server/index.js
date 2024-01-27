const express = require("express");
const cors = require("cors");
const setupDB = require("./utils/db");
const userRouter = require("./routes/userRouter");
const todoRouter = require("./routes/todoRouter");
const app = express();
const PORT = 3000;

// app.use(cors);
app.use(express.json());
setupDB();
app.use("/user", userRouter);
app.use("/todos", todoRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
