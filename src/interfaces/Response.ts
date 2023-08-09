export interface SuccessResponse {
  success: boolean;
  message: string;
}

export interface ErrorResponse {
  success: boolean;
  message: string;
  code?: string | number;
}
