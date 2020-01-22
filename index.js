function Pascal_Jardin_onclick(){
    var myElement = document.getElementById('Pascal_Jardin');
    var topPos = myElement.offsetTop;
    document.getElementById('console').scrollTop = topPos;
}

function Education_onclick(){
    var myElement = document.getElementById('Education');
    var topPos = myElement.offsetTop;
    document.getElementById('console').scrollTop = topPos;}

function About_Me_onclick(){
    var myElement = document.getElementById('About_Me');
    var topPos = myElement.offsetTop;
    document.getElementById('console').scrollTop = topPos;}

function Links_onclick(){
    var myElement = document.getElementById('Links');
    var topPos = myElement.offsetTop;
    document.getElementById('console').scrollTop = topPos;}

function Work_Experience_onclick(){
    var myElement = document.getElementById('Work_Experience');
    var topPos = myElement.offsetTop;
    document.getElementById('console').scrollTop = topPos;}


function Skills_onclick(){
    var myElement = document.getElementById('Skills');
    var topPos = myElement.offsetTop;
    document.getElementById('console').scrollTop = topPos;}

function Projects_onclick(){
    var myElement = document.getElementById('Projects');
    var topPos = myElement.offsetTop;
    document.getElementById('console').scrollTop = topPos;}


function myKeyPress(e){
  var keynum;

  if(window.event) { // IE
    keynum = e.keyCode;
  } else if(e.which){ // Netscape/Firefox/Opera
    keynum = e.which;
  }
    if ("p" == String.fromCharCode(keynum)){
        Pascal_Jardin_onclick();
    } else if ("e" == String.fromCharCode(keynum)){
        Education_onclick();
    } else if ("a" == String.fromCharCode(keynum)){
        About_Me_onclick();
    } else if ("l" == String.fromCharCode(keynum)){
        Links_onclick();
    } else if ("w" == String.fromCharCode(keynum)){
        Work_Experience_onclick();
    } else if ("s" == String.fromCharCode(keynum)){
        Skills_onclick();
    } else if ("P" == String.fromCharCode(keynum)){
        Projects_onclick();
    }
}
