import Settlement from './';

const CreateSettlement = async (data) => {
  return await Settlement.create(data);
};

export {
  CreateSettlement
};
