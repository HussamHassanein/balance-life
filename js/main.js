  var vals =[];
function showtext(){

 var text = document.getElementById("txtarea");

 var div = document.createElement('div');
 div.innerHTML = text.value;
 div.setAttribute("contentEditable","true");
 //div.setAttribute('class', 'myclass'); // and make sure myclass has some styles in css
 document.body.appendChild(div);
 vals.push(text.value);

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
function submit_social()
{
     localStorage.setItem('social', JSON.stringify(vals));
     location.href = "myplan.html";
}
function submit_studiesandwork()
{
     localStorage.setItem('studiesandwork', JSON.stringify(vals));
     location.href = "myplan.html";
}

function submit_exercise(){
  localStorage.setItem('exercise', JSON.stringify(vals));
  location.href = "myplan.html";
}
function back_plan()
{  location.href = "myplan.html";
}
