const z = require("zod");

const todoSchema = z.object({
  data: z.string(),
});

const isTodoDataValid = (inputObject) => {
  return todoSchema.safeParse(inputObject);
};

module.exports = { isTodoDataValid };
