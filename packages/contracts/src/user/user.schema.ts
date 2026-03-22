import { z } from 'zod';

export const userInputSchema = z.object({
  // 自动类型转换
  id: z.coerce.number(),
});

export const userOutputSchema = z.object({
  code: z.number(),
  message: z.string(),
  data: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      email: z.string(),
      age: z.number(),
    }),
  ),
});

export const addUserInputSchema = z.object({
  name: z.string(),
  email: z.string(),
  age: z.number(),
});

export const addUserOutputSchema = z.object({
  code: z.number(),
  message: z.string(),
  data: z.object({
    id: z.number(),
  }),
});
