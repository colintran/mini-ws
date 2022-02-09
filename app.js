const express = require('express');
const app = express();
const router = express.Router();
const random = require('random');
const path = require('path');
const rootPath = require('./util/rootPath');
app.set('view engine','ejs');
const viewsPath = path.join(rootPath, 'views');
app.set('views',viewsPath);
// add static folder
// app.use(express.static(path.join(rootPath, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
const serverId = random.int((min=1), (max=10))
router.get('/',(req,res,next) => {
    res.render('index', {id: serverId});
})

app.use('/',router);
app.listen(3000);