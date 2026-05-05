var filter = "all";

// LOGIN
function login(){
  var u = document.getElementById("user").value;
  var p = document.getElementById("pass").value;

  if(u=="admin" && p=="1234"){
    document.getElementById("login").style.display="none";
    document.getElementById("app").style.display="block";
  } else {
    document.getElementById("error").innerText="Wrong login";
  }
}

// ADD TASK
function todo(){ 
  var input = document.getElementById("input"); 
  var val = input.value;

  if(val==""){
    alert("enter task");
    return;
  }

  input.value="";

  var task = document.getElementById("task"); 

  var html = `
  <fieldset data-done="false">
    <h3>${val}</h3>
    <button onclick="doner(event)">done</button>
    <button onclick="undoer(event)">undo</button>
    <button onclick="deleter(event)">delete</button>
  </fieldset>`;

  task.innerHTML += html;

  applyFilter();
}

// DONE
function doner(e){ 
  var box = e.target.closest("fieldset");
  box.querySelector("h3").style.textDecoration="line-through";
  box.setAttribute("data-done","true");
  applyFilter();
}

// UNDO
function undoer(e){
  var box = e.target.closest("fieldset");
  box.querySelector("h3").style.textDecoration="";
  box.setAttribute("data-done","false");
  applyFilter();
}

// DELETE
function deleter(e){ 
  e.target.closest("fieldset").remove();
}

// FILTER
function show(type){
  filter = type;
  applyFilter();
}

// APPLY FILTER
function applyFilter(){
  var all = document.querySelectorAll("#task fieldset");

  all.forEach(function(box){
    var done = box.getAttribute("data-done");

    if(
      (filter=="done" && done!="true") ||
      (filter=="todo" && done=="true")
    ){
      box.style.display="none";
    } else {
      box.style.display="block";
    }
  });
}