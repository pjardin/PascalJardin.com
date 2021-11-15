function Pascal_Jardin_onclick(){
    curent_loc = "p"
    var myElement = document.getElementById('Pascal_Jardin');
    var topPos = myElement.offsetTop;
    document.getElementById('console').scrollTop = topPos;
    window.history.pushState(null, null, '?location=p');

}

function Full_Stack_onclick(){
    curent_loc = "f"
    var myElement = document.getElementById('Full_Stack');
    var topPos = myElement.offsetTop;
    document.getElementById('console').scrollTop = topPos;
    
    window.history.pushState(null, null, '?location=f');

}

function Software_onclick(){
    curent_loc = "s"
    var myElement = document.getElementById('Software');
    var topPos = myElement.offsetTop;
    document.getElementById('console').scrollTop = topPos;
    window.history.pushState(null, null, '?location=s');

}

function Blender_onclick(){
    curent_loc = "b"
    var myElement = document.getElementById('Blender');
    var topPos = myElement.offsetTop;
    document.getElementById('console').scrollTop = topPos;
    window.history.pushState(null, null, '?location=b');

}

function Coding_Projects_onclick(){
    curent_loc = "c"
    var myElement = document.getElementById('Coding_Projects');
    var topPos = myElement.offsetTop;
    document.getElementById('console').scrollTop = topPos;
    window.history.pushState(null, null, '?location=c');

}

function resources_onclick(){
    curent_loc = "r"
    var myElement = document.getElementById('Resources');
    var topPos = myElement.offsetTop;
    document.getElementById('console').scrollTop = topPos;
    window.history.pushState(null, null, '?location=r');

}

function myKeyPress(e){
  var keynum;

  if(window.event) { // IE
    keynum = e.keyCode;
  } else if(e.which){ // Netscape/Firefox/Opera
    keynum = e.which;
  }

    var c = String.fromCharCode(keynum)
    goTo(c)
    
}


var curent_loc = ""
function goTo(c){
    curent_loc = c

    window.history.pushState(null, null, '?location=' + c);

    if ("p" == c ){
        Pascal_Jardin_onclick();
    } else if ("f" == c){
        Full_Stack_onclick();
    } else if ("s" == c){
        Software_onclick();
    } else if ("b" == c){
        Blender_onclick();
    }else if ("c" == c){
        Coding_Projects_onclick();
    }else if ("r" == c){
        resources_onclick();
    }
}

function UpdateLocation(e){
    var p = document.getElementById("Pascal_Jardin").getBoundingClientRect()
    var f = document.getElementById("Full_Stack").getBoundingClientRect()
    var s = document.getElementById("Software").getBoundingClientRect()
    var b = document.getElementById("Blender").getBoundingClientRect()
    var c = document.getElementById("Coding_Projects").getBoundingClientRect()
    var r = document.getElementById("Resources").getBoundingClientRect()

    if ( b.top < 30 && b.bottom > 30 &&curent_loc != "b" ){
        curent_loc = "b"
        window.history.pushState(null, null, '?location=b');

    } else if (s.top < 30 && s.bottom > 30 && curent_loc != "s" ){
        curent_loc = "s"
        window.history.pushState(null, null, '?location=s');
    }else if (f.top < 30 && f.bottom > 30 && curent_loc != "f" ){
        curent_loc = "f"
        window.history.pushState(null, null, '?location=f');
    }else if (p.top < 50 && p.bottom > 30 && curent_loc != "p" ){
        curent_loc = "p"
        window.history.pushState(null, null, '?location=p');
    }else if (c.top < 50 && c.bottom > 30 && curent_loc != "c" ){
        curent_loc = "c"
        window.history.pushState(null, null, '?location=c');
    }else if (r.top < 50 && r.bottom > 30 && curent_loc != "r" ){
        curent_loc = "r"
        window.history.pushState(null, null, '?location=r');
    }

}


$( document ).ready(function() {
   
    
    //https://www.sitepoint.com/get-url-parameters-with-javascript/
    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);
    const loc = urlParams.get('location')

    goTo(loc)
    
});
