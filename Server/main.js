const express =  require('express');
var cors = require('cors');
const bodyParser = require('body-parser');


let app = express();
app.use(cors());

require('./configs/dataBase')

app.use(bodyParser.urlencoded({extended : true}))
    .use(bodyParser.json());

const usersController = require('./controllers/usersController');

app.use('/api/users' , usersController);

app.listen(8000);

console.log("Server is running...");