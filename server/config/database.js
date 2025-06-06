import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import mysql2 from "mysql2"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pemPath = path.resolve(__dirname, "../cert/isrgrootx1.pem");

dotenv.config();

const sql = new Sequelize(process.env.DB_URI, {
	dialect: "mysql",
	dialectModule: mysql2,
	dialectOptions: {
		ssl: {
			ca: fs.readFileSync(pemPath),
		},
	},
	logging: console.log,
});

export default sql;
