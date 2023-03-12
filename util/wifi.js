const generateWifiStr = (wifiName, wifiPasswd) => {
    return `WIFI:S:${wifiName};T:WPA;P:${wifiPasswd};;`
};

exports.generateWifiStr = generateWifiStr;