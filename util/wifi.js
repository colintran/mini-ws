const generateWifiStr = (wifiName, wifiPasswd) => {
    return "WIFI:S:"+wifiName+";P:"+wifiPasswd+";;";
};

exports.generateWifiStr = generateWifiStr;