var items = JSON.parse(localStorage.getItem("todo-list")) || [];
var check = -1;
var inputBox = document.querySelector("#todo-input");
function addTodo() {
    if (check >= 0)
    {
      inputBox.value = document.querySelector("#litask_" + check).innerText;
      var item1  = inputBox.value;
      items[check].value = item;
      localStorage.setItem("todo-list", JSON.stringify(items));
      items.push({
        value: item1,
      }
      )
      inputBox.value = "";
    }
    else
    {
      var inputBox = document.querySelector("#todo-input");
      var item = inputBox.value;
      if (item === "")
        return (document.getElementById("list").innerHTML =
          "Please input to do list");
      items.push({
        value: item,
        textDecoration: "none"
      });
    }
    localStorage.setItem("todo-list", JSON.stringify(items));
    listItems();
    inputBox.value = "";
    check = -1;
}

function deleteItem(index) {
  items.splice(index, 1);
  localStorage.setItem("todo-list", JSON.stringify(items));
  listItems();
}

function editItems(index)
{
  var getItems = document.querySelector("#litask_" + index);
  inputBox.value = getItems.innerText;
  items.push({
    value: inputBox.value,
  });
  check = index;
}
function toggleStyle(index) {
  var element = document.getElementById("litask_" + index);
  if (element.style.textDecoration === "line-through") {
    element.style.textDecoration = "none";
    items[index].textDecoration = "none"; 
    localStorage.setItem("todo-list", JSON.stringify(items)); 
  } else {
    element.style.textDecoration = "line-through";
    items[index].textDecoration = "line-through"; 
    localStorage.setItem("todo-list", JSON.stringify(items));   
  }
}

function listDone()
{
  var listD = "";
  for (var i = 0; i < items.length; i++) {
    if(items[i].textDecoration === 'line-through')
    {
      listD += "<li id ='litask_" + i + "' onclick='toggleStyle(" + i + ")'";
      listD += " style='text-decoration:" + items[i].textDecoration + ";'>";
      listD += items[i].value + " ";
      listD += "</li>";
      listD +=
      "<div id ='btnlist'><span><button class='edit' onclick='editItems(" +
      i +
      ")'>Edit</button></span>" +
        "<span onclick='deleteItem(" +
        i +
        ")'><button class='remove'>Remove</button></span></div> ";
    }
  }
  localStorage.setItem("done-list", JSON.stringify(listD));
  document.querySelector("#done-list").innerHTML = listD;
  document.querySelector("#todo-list").style.display = 'none';
  document.querySelector("#undone-list").style.display ='none';
  document.querySelector("#done-list").style.display ='block';
  
}
function unDoneList()
{
  var listU = "";
  for (var i = 0; i < items.length; i++)
  {
    if(items[i].textDecoration != 'line-through')
    {
      listU += "<li id ='litask_'" + i + "' onclick='toggleStyle(" + i + ")'>";
      listU += items[i].value + " ";
      listU += "</li>";
      listU +=
      "<div id ='btnlist'><span><button class='edit' onclick='editItems(" +
      i +
      ")'>Edit</button></span>" +
        "<span onclick='deleteItem(" +
        i +
        ")'><button class='remove'>Remove</button></span></div> ";
    }
  }
  
  localStorage.setItem("undone-list", JSON.stringify(listU));
  document.querySelector("#undone-list").innerHTML = listU;
  document.querySelector("#todo-list").style.display = 'none';
  document.querySelector("#done-list").style.display ='none';
  document.querySelector("#undone-list").style.display ='block';
}
function listItems() {
  document.querySelector("#todo-list").style.display = 'block';
  var list = "";
  for (var i = 0; i < items.length; i++) {
    list += "<li id ='litask_" + i + "' onclick='toggleStyle(" + i + ")'";
    list += " style='text-decoration:" + items[i].textDecoration + ";'>";
    list += items[i].value + " ";
    list += "</li>"
    list +=
    "<div id ='btnlist'><span><button class='edit' onclick='editItems(" +
      i +
      ")'>Edit</button></span>" +
        "<span onclick='deleteItem(" +
        i +
        ")'><button class='remove'>Remove</button></span></div> ";
  }
  document.querySelector("#todo-list").innerHTML = list;
  document.querySelector("#done-list").style.display ='none';
  document.querySelector("#undone-list").style.display ='none';
}

(function () {
  listItems();
})();    