var extention = ".php"; 
 var host = "http://localhost/stokvel/stokvel/Api/";
//var host = "http://ndu-systems.net/demo/01/Api/";

function GetApiUrl(serviceName) {
    
    var url = host + serviceName + extention;
    return url;
}
function GetHost(data) {
    return host + ""+data;
}
function getDate() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    return dateTime;
}
// email tempates 

function WelcomeMessage() {
    var msg = "";
    return "";
}