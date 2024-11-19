function addTask() {
    var taskTitle = document.getElementById("taskTitle").value.trim();
    var taskDescription = document.getElementById("taskDescription").value;

    if (taskTitle === "") {
        alert("Please enter a task title.");
        return;
    }

    var task = {
        title: taskTitle,
        description: taskDescription,
        completed: false
    };

    fetch('/api/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to add task');
        }
        return response.json();
    })
    .then(data => {
        console.log('Task added successfully:', data);
        document.getElementById("taskTitle").value = "";
        document.getElementById("taskDescription").value = "";
        fetchTasks();
    })
    .catch(error => {
        console.error('Error:', error.message);
        alert('Failed to add task. Please try again later.');
    });
}

function fetchTasks() {
    fetch('/api/tasks')
    .then(response => response.json())
    .then(data => {
        var taskList = document.getElementById("taskList");
        taskList.innerHTML = "";
        data.forEach(task => {
            var li = document.createElement("li");
            li.innerHTML = `<span>${task.title}</span>
                            <span>${task.description.replace(/\n/g, '<br>')}</span>
                            <div class="task-buttons">
                                <button onclick="updateTask('${task.id}')">Update</button>
                                <button onclick="deleteTask('${task.id}')" class="delete">Delete</button>
                            </div>`;
            taskList.appendChild(li);
        });
    })
    .catch(error => {
        console.error('Error:', error.message);
        alert('Failed to fetch tasks. Please try again later.');
    });
}

function updateTask(id) {
    var newTitle = prompt("Enter the new title for the task:");
    var newDescription = prompt("Enter the new description for the task:");

    if (newTitle === null || newDescription === null) {
        return; // User clicked cancel
    }

    fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: newTitle,
            description: newDescription
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to update task');
        }
        console.log('Task updated successfully');
        fetchTasks();
    })
    .catch(error => {
        console.error('Error:', error.message);
        alert('Failed to update task. Please try again later.');
    });
}

function deleteTask(id) {
    if (!confirm("Are you sure you want to delete this task?")) {
        return;
    }

    fetch(`/api/tasks/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete task');
        }
        console.log('Task deleted successfully');
        fetchTasks();
    })
    .catch(error => {
        console.error('Error:', error.message);
        alert('Failed to delete task. Please try again later.');
    });
}

fetchTasks();
