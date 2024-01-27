const z = require("zod");

const userSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
});

const isUserDataValid = (inputObject) => {
  return userSchema.safeParse(inputObject);
};

module.exports = { isUserDataValid };
