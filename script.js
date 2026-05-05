// LOGIN
function login(){ 
  var userInput = document.getElementById("user").value;
  var passInput = document.getElementById("pass").value;

  if(userInput=="admin" && passInput=="1234"){
    document.getElementById("login").style.display="none";
    document.getElementById("app").style.display="block";
  } else {
    document.getElementById("error").innerText="Wrong login";
  }
}

// ADD TASK
function todo(){ 
  var input = document.getElementById("input"); 
  var value = input.value;

  if(value==""){
    alert("enter task");
    return;
  }

  input.value="";

  var task = document.getElementById("task"); 

  var html = `
  <fieldset>
    <h1>${value}</h1>
    <button onclick="doner(event)">done</button>
    <button onclick="deleter(event)">delete</button>
  </fieldset>`;

  task.innerHTML = task.innerHTML + html;
}

// DONE
function doner(event){ 
  var header = event.target.parentElement.querySelector("h1"); 
  header.style.textDecoration = "line-through"; 
}

// DELETE
function deleter(event){ 
  event.target.parentElement.remove();
}