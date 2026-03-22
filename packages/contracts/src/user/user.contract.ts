import { oc } from '@orpc/contract';
import { addUserInputSchema, addUserOutputSchema, userInputSchema, userOutputSchema } from './user.schema';

export const userContract = oc.router({
  getUser: oc
    .route({
      path: '/user/get',
      method: 'GET',
      description: 'Get a user by ID',
    })
    .input(userInputSchema)
    .output(userOutputSchema),

  addUser: oc
    .route({
      path: '/user/add',
      method: 'POST',
      description: 'Add a user',
    })
    .input(addUserInputSchema)
    .output(addUserOutputSchema),
});
