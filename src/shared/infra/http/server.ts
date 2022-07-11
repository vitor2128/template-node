import api_config from "@config/api";
import { app } from "./app";

const port = api_config.api_port;

app.listen(port, () => {
	console.log(`server running on port: ${port}`);
});
