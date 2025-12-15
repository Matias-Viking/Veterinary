import { Logger } from "tslog";
import { CustomerNotFoundError } from "./domain/errors/CustomerNotFound";


const error= new CustomerNotFoundError("29485940");


const logger=new Logger({

});




const port=8080;

logger.info(`Servidor arrancado. Escuchando en el puerto ${port}`);

logger.error(error);

