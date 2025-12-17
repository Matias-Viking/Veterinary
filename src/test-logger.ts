import { Logger } from "tslog";
import { CustomerNotFoundError } from "./domain/errors/CustomerNotFound";


const error = new CustomerNotFoundError("29485940");

const logger = new Logger();

const errorCode = 'bad_request';
const codigo = 400;


logger.error({

    label: errorCode,
    errorCode:codigo,
    stack:error instanceof Error ? error.stack : undefined
}
)
