
function addTask() {
      var taskInput = document.getElementById("taskInput");
      var taskText = taskInput.value.trim();
      if (taskText === "") return; 
      taskInput.value = "";
  
      var taskList = document.getElementById("taskList");
      var li = document.createElement("li");
      li.innerHTML = `
          <span class="task-text">${taskText}</span>
          <span class="delete" onclick="deleteTask(this)">Delete</span>
      `;
      taskList.appendChild(li);
  }
  
  
  function deleteTask(element) {
      var taskList = document.getElementById("taskList");
      var li = element.parentElement;
      taskList.removeChild(li);
  }
  