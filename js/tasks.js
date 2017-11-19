var vals =[];
var text="";
var len;
var vals ;
var val;

    vals = JSON.parse(localStorage.getItem('social'));
    len =vals.length;
for (var i = 0; i < len; i++) {
  text = vals[i]  + "<br>";
 var div = document.createElement("div");
  div.innerHTML = vals[i];
  document.body.appendChild(div);
  div.setAttribute("contentEditable","true");

}
