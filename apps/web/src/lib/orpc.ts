import { createORPCClient } from '@orpc/client';
import { OpenAPILink } from '@orpc/openapi-client/fetch';
import type { ContractRouterClient } from '@orpc/contract';
import type { JsonifiedClient } from '@orpc/openapi-client';

import { contract } from 'contracts';

const link = new OpenAPILink(contract, {
  url: 'http://localhost:3000',
  headers: () => {
    return {
      Authorization: `Bearer ${localStorage.getItem('token') ?? 'hahaha'}`,
    };
  },
});

type Client = JsonifiedClient<ContractRouterClient<typeof contract>>;

export const orpcClient = createORPCClient<Client>(link);
