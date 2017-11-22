
var vals;

function showtext() {

  var text = document.getElementById("txtarea");
  var div = document.createElement('div');
  div.setAttribute("contentEditable", "true");
  div.setAttribute("class", "readonly_label");
  div.setAttribute("id", "updated");
  div.innerHTML = text.value;
  document.body.appendChild(div);
}

function cleartext() {
  var text = document.getElementById("txtarea");
  document.getElementById("txtarea").value = "";
}


function relocate_home() {
  location.href = "main.html";
}

function submit_social() {
//var vals = [];
  // localStorage.setItem('social', JSON.stringify(kewser));
  var length = document.getElementsByClassName("readonly_label").length;

localStorage.setItem('length', JSON.stringify(length));
  for (var i = 0; i < length; i++) {

    var text = document.getElementsByClassName("readonly_label")[i].textContent;
    localStorage.setItem('text ', JSON.stringify(text));
    if (text == "")
      continue;

        if(vals==null)
        {
          vals=[];
        }
    vals.push(text);
  }

  localStorage.setItem('social', JSON.stringify(vals));
  location.href = "myplan.html";
}

function submit_studiesandwork() {
  //var vals = [];
  var length = document.getElementsByClassName("readonly_label").length;

  for (var i = 0; i < length; i++) {

    var text = document.getElementsByClassName("readonly_label")[i].textContent;
    if (text == "")
      continue;
      if(vals==null)
      {
        vals=[];
      }
    vals.push(text);
  }
  localStorage.setItem('studiesandwork', JSON.stringify(vals));
  location.href = "myplan.html";
}

function submit_exercise() {
  //var vals = [];

  var length = document.getElementsByClassName("readonly_label").length;

  for (var i = 0; i < length; i++) {

    var text = document.getElementsByClassName("readonly_label")[i].textContent;
    if (text == "")
      continue;
      if(vals==null)
      {
        vals=[];
      }
    vals.push(text);
  }
  localStorage.setItem('exercise', JSON.stringify(vals));
  location.href = "myplan.html";
}

function back_plan() {
  location.href = "myplan.html";
}
