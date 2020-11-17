const express = require('express');
const app = express();

// port for local host
var PORT = process.env.PORT || 3001; 

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('./public'));

// require routes files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("Application is listening at http://localhost:" + PORT);
});