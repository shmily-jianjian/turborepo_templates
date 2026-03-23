import { userContract } from './user/user.contract';

export const contract = {
  user: userContract,
};

export type AppContract = typeof contract;
