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
app.use(express.static(path.join(rootPath, 'public')));

const wifiUtil = require('./util/wifi');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
router.get('/',(req,res,next) => {
    res.render('wifi-form');
});
router.post('/qr-code', (req,res,next) => {
    let name = req.body.wifiName.trim();
    let passwd = req.body.wifiPwd.trim();
    console.log('name: ',name,'pass: ',passwd);
    res.render('qr', {wifiStr: wifiUtil.generateWifiStr(name, passwd)});
});
app.use('/',router);
app.listen(3000);