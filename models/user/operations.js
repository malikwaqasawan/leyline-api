import User from './';

const CreateUser = async (data) => {
  return await User.create(data);
};

const GetUser = async (data) => {
  return await User.findOne(data).lean();
};

export {
  CreateUser,
  GetUser
};
