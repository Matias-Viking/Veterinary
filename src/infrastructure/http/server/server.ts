import express from "express";
import cors from "cors";
import { CorsOptions } from "cors";
import correlator from "express-correlation-id";
import { setCorrelatorInResponse } from "../middlewares/setCorrelatorInResponse";
import { router } from "../routes/router";
import { resourceNotFoundHandler } from "../middlewares/resourceNotFoundHandler";
import { errorHandler } from "../middlewares/errorHandler";

const server = express();

const corsOptions: CorsOptions = {
    methods: ["GET,POST,PATCH,HEAD"],
};

server.use(correlator({ header: "x-correlator" }));
server.use(setCorrelatorInResponse);
server.use(express.json());
server.use(cors(corsOptions));
server.use("/", router);
server.use(resourceNotFoundHandler);
server.use(errorHandler);
