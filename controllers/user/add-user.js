import { CreateUser, GetUser } from '../../models/user/operations';
import createError from '../../utils/create-error';

const AddUser = async ({ name }) => {

  const isExist = await GetUser({ name });

  if (isExist) throw createError('User Already Exist', 400);

  await CreateUser({ name });

  return {
    message: 'User Created Successfully'
  };
};

export default AddUser;
