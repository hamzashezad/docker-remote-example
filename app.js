const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Hello from Hell");
});

app.get("/version", (req, res) => {
	res.send("Version 1.1.0");
});

app.listen(3000, () => {
	console.log("Listening on port 3000");
});
