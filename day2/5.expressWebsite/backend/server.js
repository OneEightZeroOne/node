var express = require("express");
var app = express();
app.use(express.static('../fontend'));


require("./router/getMainHead.js").getMainHead(app);
require("./router/getMainImg.js").getMainImg(app);
require("./router/middleWare.js").middleWare(app);

app.listen(12345);
