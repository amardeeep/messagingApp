const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
//create a user
const createUser = async (userName) => {
  await prisma.users.create({
    data: {
      user_name: userName,
    },
  });
  return "User Created Successfully.";
};
//get a User
const getUser = async (userName) => {
  const user = await prisma.users.findUnique({
    where: { user_name: userName },
  });
};
