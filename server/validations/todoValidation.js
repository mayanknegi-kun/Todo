const z = require("zod");

const todoSchema = z.object({
  data: z.string(),
  isCompleted: z.boolean(),
});

const isTodoDataValid = (inputObject) => {
  return todoSchema.safeParse(inputObject);
};

module.exports = { isTodoDataValid };
