export class ApiResponse<T = unknown> {
  code: number;
  message: string;
  data: T | null;
  issues?: any[];
}

export const SUCCESS_CODE = 0;
export const COMMON_ERROR_CODE = -1;
