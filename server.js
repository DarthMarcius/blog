var express = require("express"),
	app = express(),
	handlebars  = require('express-handlebars');
	


app.engine('handlebars', handlebars({defaultLayout: 'main', extname: '.handlebars'}));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));
var context = {
        title: 'Page 1',
        message: 'This is a message'
    };

console.log(context);
app.get("/", function(req, res) {
	res.render("index", context);
})
//app.use("/public", express.static("public"));


var port = Number(process.env.PORT || 5000);
app.listen(port);

