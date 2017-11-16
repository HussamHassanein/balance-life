
function showtext(){
 var text = document.getElementById("txtarea");
 var div = document.createElement("div");
 //var x = document.createElement("P");
div.setAttribute('contenteditable', 'true');
//div.setAttribute("style", "mystyle");
// and make sure myclass has some styles in css

div.innerHTML = text.value;
document.body.appendChild(div);
//document.body.appendChild(x);
//document.getElementById(div).contentEditable = "true";
//x.innerHTML=text.value;

 //document.querySelector("[contenteditable=true]");
 //var showarea = document.getElementById("adduserdata");
 //showarea.innerHTML=text.value;

}


function myFunction() {
    var str=document.getElementById("txt").value;
    var n=str.replace("");
    var m=n.replace();
    document.getElementById("txt").value=m;
}

function relocate_home()
{
     location.href = "main.html";
}
function back_plan()
{
     location.href = "myplan.html";
}
