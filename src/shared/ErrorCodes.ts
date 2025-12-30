export const ErrorCodes = {
    customerNotFound: "CUSTOMER_NOT_FOUND",
    invalidParamter: "INVALID_PARAMETER",
    internal_server_error: "INTERNAL_SERVER_ERROR",
    non_existent_resource_id: "NON_EXISTENT_RESOURCE_ID",
} as const;

export type ErrorCode = (typeof ErrorCodes)[keyof typeof ErrorCodes];
