import Pino from "pino";
// import { APP_ID, LOG_LEVEL } from "./Config";

export const logger = Pino({
  name: 'app-name',
  level: 'debug'
});