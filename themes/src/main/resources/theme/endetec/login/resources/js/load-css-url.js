var links = document.getElementsByTagName("link");
var baseUrl = "";
for ( var i = 0; i < links.length; i++ ) {

    if(links[i].getAttribute("href").indexOf("css/login.css") > -1){
         baseUrl =   links[i].getAttribute("href").substr(0, links[i].getAttribute("href").indexOf("css/login.css"));
    }
}

var url="css/loginDefault.css";

if (location.search.indexOf("://fusion.") > -1){
    url="css/loginFusion.css"
}
var lien_css = document.createElement('link');
lien_css.setAttribute("href",baseUrl + url);
lien_css.setAttribute("rel","stylesheet");
lien_css.setAttribute("type","text/css");
document.getElementsByTagName("head").item(0).appendChild(lien_css);

