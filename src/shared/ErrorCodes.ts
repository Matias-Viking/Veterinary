

export const ErrorCodes={

    customerNotFound:'CUSTOMER_NOT_FOUND'
}

export type ErrorCode = (typeof ErrorCodes)[keyof typeof ErrorCodes]