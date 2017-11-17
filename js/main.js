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
function retrieve(view){
  var text="";
  var len;
  var vals ;
  var val;

      vals = JSON.parse(localStorage.getItem(view));
      len =vals.length;
  for (var i = 0; i < len; i++) {
    text = vals[i]  + "<br>";
   var div = document.createElement("div");
    div.innerHTML = vals[i];
    document.body.appendChild(div);
    div.setAttribute("contentEditable","true");

}
}
/*
function retrieve(){
for(var i=0; i<vals.length; i++) {
  var div = document.createElement('div');
  div.innerHTML = vals[i];
  document.body.appendChild(vals[i]);
  localStorage.setItem('studiesandwork', JSON.stringify(vals[i]));
}

}
function getcheck(){
  var keyy=['social','studiesandwork','exercise']
  var lenkey=keyy.length;
  var len;
  var vals ;
  for (var j = 0; j < lenkey; j++) {
    var div = document.createElement("div");
     div.innerHTML = keyy[j];
      vals = JSON.parse(localStorage.getItem(keyy[j]));
      len =vals.length;
     for (var i = 0; i < len; i++) {
       var x = document.getElementById("INPUT");
  //     x.getAttribute("checked",);
  var checkedValue = document.querySelector('x').value;

  }}
}
*/


function cleartext(){
  var text = document.getElementById("txtarea");
  document.getElementById("txtarea").value = "";
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
function submit_plan()
{  location.href = "feedback.html";
}
