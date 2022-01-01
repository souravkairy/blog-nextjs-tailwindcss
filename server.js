const express = require("express");
const path = require("path");
const compression = require("compression");
const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, ".next")));

app.use(function(req, res) {
	res.sendFile(path.join(__dirname, ".next", "index.html"));
});

app.listen(3000, function() {
	console.log("React app is running on port: 3000");
});
