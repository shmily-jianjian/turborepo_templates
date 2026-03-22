import { oc } from '@orpc/contract';
import { userContract } from './user/user.contract';

export const contract = oc.router({
  user: userContract,
});

export type AppContract = typeof contract;
