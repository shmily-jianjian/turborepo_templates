export class ApiResponse<T = unknown> {
  code: number;
  message: string;
  data: T | null;
  issues?: any[];
}

export const SUCCESS_CODE = 0;
export const COMMON_ERROR_CODE = -1;

// 飞书相关错误码枚举
export enum FeishuErrorCode {
  GET_DEPARTMENT_LIST_FAILED = 10001,
  GET_DEPARTMENT_USERS_FAILED = 10002,
  BIND_DEPARTMENT_USER = 10003,
}

// 用户 / 鉴权相关错误码枚举
export enum UserErrorCode {
  MISSING_A_SYSTEM_TOKEN = 40001,
  A_SYSTEM_TOKEN_VERIFY_FAILED = 40002,
  A_SYSTEM_UNION_ID_MISSING = 40003,
  INVALID_USER_IDENTITY = 40101,
  USER_NOT_FOUND_NO_PERMISSION = 40301,
  USER_NOT_FOUND_OR_DELETED = 40302,
}
