const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
//create a user
const createUser = async (userName, password) => {
  await prisma.users.create({
    data: {
      user_name: userName,
      password: password,
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
//update User
const updateUserPassword=async(userId,password)=>{
  await prisma.users.update({
    data:{
      password
    },
    where:{
      user_id:userId
    }
  })
}
//delete User
const deleteUser=async(userId)=>{
  await prisma.users.delete({
    where:{
      user_id:userId
    }
  })
}
//create User Profile
const createUserProfile = async (userId, fullName, about, dateJoined) => {
  await prisma.profile.create({
    data: {
      user_id: userId,
      full_name: fullName,
      about,
      dateJoined,
    },
  });
  return "Profile Created Succesfully";
};
//edit User Profile
const editUserProfile = async (user_id, fullName, about) => {
  await prisma.profile.update({
    data: {
      full_name: fullName,
      about,
    },
    where: {
      user_id: user_id,
    },
  });
};
//delete User Profile
const 

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
//get messages of user
const getMessagesCreatedByUserWithUserId = async (userId) => {
  const messages = await prisma.messages.findMany({
    where: {
      author_user_id: userId,
    },
  });
  return messages;
};
module.exports = {
  getMessage,
  createMessage,
  getUser,
  createUser,
  getMessagesCreatedByUserWithUserId,
};
