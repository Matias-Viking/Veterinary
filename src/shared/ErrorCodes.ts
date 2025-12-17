export const ErrorCodes = {
    customerNotFound: "CUSTOMER_NOT_FOUND",
    invalidParamter:"INVALID_PARAMETER",
    internal_server_error:"INTERNAL_SERVER_ERROR"
} as const;

export type ErrorCode = (typeof ErrorCodes)[keyof typeof ErrorCodes];
