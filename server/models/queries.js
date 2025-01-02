const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const createUser = async (
  name,
  email,
  about,
  address,
  occupation,
  status,
  password
) => {
  await prisma.user.create({
    data: {
      name,
      email,
      about,
      address,
      occupation,
      status,
      password,
    },
  });
  return "User Created Successfully!";
};
const getUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};
const updateUser = async (
  user_id,
  name,
  email,
  about,
  address,
  occupation,
  status,
  password
) => {
  await prisma.user.update({
    data: {
      name,
      email,
      about,
      address,
      occupation,
      status,
      password,
    },
    where: {
      user_id,
    },
  });
  return "User Updated Successfully!";
};
const deleteUser = async (user_id) => {
  await prisma.user.delete({
    where: {
      user_id,
    },
  });
};
const getMessagesSent = async (user_id) => {
  const messagesSent = await prisma.user.findMany({
    where: {
      user_id,
    },
    select: {
      messageFrom,
    },
  });
};
