function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText === "") return;

  let li = document.createElement("li");
  li.textContent = taskText;

  // Toggle done when clicked
  li.onclick = () => li.classList.toggle("done");

  // Delete button
  let removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";
  removeBtn.onclick = (e) => {
    e.stopPropagation(); // prevent marking as done
    li.remove();
  };

  li.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}