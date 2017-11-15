
function showtext(){
 var text = document.getElementById("txtarea");
 var div = document.createElement('div');
 div.innerHTML = text.value;
 //div.setAttribute('class', 'myclass'); // and make sure myclass has some styles in css
 document.body.appendChild(div);

  //var showarea = document.getElementById("adduserdata");
 //showarea.innerHTML=text.value;

}
function relocate_home()
{
     location.href = "main.html";
}
function back_plan()
{
     location.href = "myplan.html";
}
