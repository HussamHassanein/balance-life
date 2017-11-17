var vals =[];


function showtext(){

 var text = document.getElementById("txtarea");

 var div = document.createElement('div');
 //div.innerHTML = text.value;
 div.setAttribute("contentEditable","true");

 div.setAttribute("class","readonly_label");
 div.setAttribute("id","updated");

 //div.setAttribute('class', 'myclass'); // and make sure myclass has some styles in css
 //document.body.appendChild(div);


div.innerHTML = text.value;
document.body.appendChild(div);
/*var str ="";
 $(".updated").each(function() {
    str = str + $(this).text() + " ";
 })
 vals.push(str);*/
/*var length = document.getElementsByClassName("readonly_label").length;

for(var i = 0; i < length; i++){

     var text3 =document.getElementsByClassName("readonly_label")[i].textContent;
     vals.push(text3);
}*/
 //var upp=$('#updated').text();
 //vals.push(upp);
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

  // localStorage.setItem('social', JSON.stringify(kewser));
  var length = document.getElementsByClassName("readonly_label").length;

  for(var i = 0; i < length; i++){

       var text =document.getElementsByClassName("readonly_label")[i].textContent;
       if(text == "")
        continue;
       vals.push(text);
  }

     localStorage.setItem('social', JSON.stringify(vals));
     location.href = "myplan.html";
}
function submit_studiesandwork()
{ var length = document.getElementsByClassName("readonly_label").length;

for(var i = 0; i < length; i++){

     var text =document.getElementsByClassName("readonly_label")[i].textContent;
     if(text == "")
      continue;
     vals.push(text);
}
     localStorage.setItem('studiesandwork', JSON.stringify(vals));
     location.href = "myplan.html";
}

function submit_exercise(){
  var length = document.getElementsByClassName("readonly_label").length;

  for(var i = 0; i < length; i++){

       var text =document.getElementsByClassName("readonly_label")[i].textContent;
       if(text == "")
        continue;
       vals.push(text);
  }
  localStorage.setItem('exercise', JSON.stringify(vals));
  location.href = "myplan.html";
}
function back_plan()
{  location.href = "myplan.html";}
function call() {
  location.href = "feedback.html";
}
