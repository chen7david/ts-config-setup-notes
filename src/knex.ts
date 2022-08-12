import knex from "knex";
import { dbConfig } from "./database/knexfile";
const env: string = process.env.NODE_ENV || "development";
export const connection = knex(dbConfig[env]);
console.log(dbConfig);
