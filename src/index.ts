import Express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { bootConsoleLog } from "#root/utils/bootConsoleLog";

dotenv.config();

const PORT = process.env.API_PORT ? process.env.API_PORT : 4000;

const app = Express();

bootConsoleLog();

app.use(cors({ origin: (_, cb) => cb(null, true), credentials: true }));

app.get("/", (_, res) => {
	res.send(`<p>Basic express app working!</p>`);
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
