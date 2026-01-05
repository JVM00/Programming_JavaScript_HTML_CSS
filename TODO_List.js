function addTask () {
  var input = document.getElementById("input");
  var newTask = input.value.trim();
  // only add new item to list if some text was entered
  if (newTask !== "") {
    var item = document.createElement("li");
    item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' +
                     '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' +
                     '<input type="button" class="important" onclick="important(this.parentNode)" value="!" /> ' +
                     newTask;
    document.getElementById("tasks").appendChild(item);

    /* Step 4 below here */
    input.value = "";
    input.placeholder = "enter next task ...";
  }
}

function markDone (item) {
  item.className = "finished";
}

function remove (item) {
  if (item.className === "finished") {
    item.remove();
  }
}

// highlight item from document
function important (item) {
  item.className = "important";
}

/* Step 11 below here */
function doAbout () {
  var aboutDiv = document.getElementById("divabout");
  aboutDiv.innerHTML = "Author is JVM00";
  aboutDiv.className = "yellowbackground";
}

/* Step 14 below here */
function clearAbout () {
  var aboutDiv = document.getElementById("divabout");
  aboutDiv.innerHTML = "";
  aboutDiv.className = "";
}
