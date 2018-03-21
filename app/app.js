// // Define UI vars
// const form = document.querySelector('#task-form');
// const taskList = document.querySelector('.collection');
// const clearBtn = document.querySelector('.clear-tasks');
// const filter = document.querySelector('#filter');
// const taskInput = document.querySelector('#task');

// // Load all event listeners
// loadEventListeners();

// // Load all event listeners
// function loadEventListeners() {
//   // Add task event
//   form.addEventListener('submit', addTask);
//   // Remove task event
//   taskList.addEventListener('click', removeTask);
//   // Clear task event
//   clearBtn.addEventListener('click', clearTasks);
//   // Filter tasks event
//   filter.addEventListener('keyup', filterTasks);
// }

// // Add task

// function addTask(e) {
//   if(taskInput.value === '') {
//       alert('Add Task');
//   }

//   // Create li element
//   const li = document.createElement('li');
//   // Add class
//   li.className = 'collection-item';
//   // Create text node and append to the li
//   li.appendChild(document.createTextNode(taskInput.value));
//   // Create new link element
//   const link = document.createElement('a');
//   // Add class
//   link.className = 'delete-item secondary-content';
//   // Add icon html
//   link.innerHTML = '<i class="fa fa-times-circle" aria-hidden="true"></i>';
//   // Append the link to li
//   li.appendChild(link);
//   // Append li to ul
//   taskList.appendChild(li);
//   // Clear input
//   taskInput.value = '';

//   e.preventDefault();
// }

// // Remove task
// function removeTask(e) {
//   if(e.target.parentElement.classList.contains('delete-item')) {
//     if(confirm('Are you sure?')) {
//       e.target.parentElement.parentElement.remove();
//     }
//   }
// }

// // Clear tasks
// function clearTasks() {
//   // taskList.innerHTML = '';
//   // Faster
//   while(taskList.firstChild) {
//     taskList.removeChild(taskList.firstChild);
//   }

//   // https://jsperf.com/innerhtml-vs-removechild
// }

// // Filter tasks
// function filterTasks(e) {
//   const text = e.target.value.toLowerCase();
//   document.querySelectorAll('.collection-item').forEach
//   (function(task) {
//     const item = task.firstChild.textContent;
//     if(item.toLowerCase().indexOf(text) != -1) {
//       task.style.display = 'block';
//     } else {
//       task.style.display = 'none';
//     }
//   });
// }

// const form = document.querySelector('#task-form');
// const taskList = document.querySelector('.collection');
// const taskContent = document.querySelector('#task');

// runEvents();

// function runEvents() {
//   form.addEventListener('submit', addTask);
// }

// function addTask(e) {
//   if (taskContent.value === '') {
//     alert('Please add task');
//   }
  
//   const li = document.createElement('li');

//   li.appendChild(document.createTextNode(taskContent.value));

//   li.className = 'collection-item';

//   taskList.appendChild(li);

//   const link = document.createElement('a');

//   link.innerHTML = '<i class="fa fa-times-circle" aria-hidden="true"></i>'

//   li.appendChild(link);

//   link.className = 'delete-item secondary-content';

//   console.log(li); // remove

//   e.preventDefault();

//   taskContent.value = '';
// }


// 1. Select nodes you're working with

// 2. Create event listeners wrap it in a function call it

// 3. Create functions for all event listeners 