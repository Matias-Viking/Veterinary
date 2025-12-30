import dotenv from 'dotenv';


dotenv.config();



export const environment={

    PORT:Number(process.env.PORT) || 8080,

}