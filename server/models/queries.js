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
const getUser = async (userId) => {
  const user = await prisma.users.findUnique({
    where: { user_id: userId },
  });
  return user;
};
//create Message
const createMessage = async (
  messageText,
  userIdOfAuthor,
  userIdOfRecipient
) => {
  await prisma.messages.create({
    data: {
      message_text: messageText,
      author_user_id: userIdOfAuthor,
      recipient_user_id: userIdOfRecipient,
    },
  });
  return "Message Created Successfullly.";
};
//get Message
const getMessage = async (message_id) => {
  const message = await prisma.messages.findUnique({
    where: { message_id },
  });
  return message;
};
module.exports = { getMessage, createMessage, getUser, createUser };
