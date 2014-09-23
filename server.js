var express = require("express"),
	app = express(),
	handlebars  = require('express-handlebars');

app.get("/", function(req, res) {
	res.render("index");
})

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use("/public", express.static("public"));
var port = Number(process.env.PORT || 5000);
app.listen(port);

