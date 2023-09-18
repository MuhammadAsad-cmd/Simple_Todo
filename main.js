window.addEventListener('load', () => {
    const form = document.querySelector("#newTaskForm");
	const input = document.querySelector("#newTaskInput");
	const list_el = document.querySelector("#tasks");
    

    form.addEventListener('submit', (e) => {

        console.log("Form submission");

        e.preventDefault();

        const task = input.value;

        // Check if the input is empty
        if (task.trim() === "") {
            // Optionally, you can provide feedback to the user here, e.g., display an alert.
            alert("Please Enter Some Value")
            return;
        }

        const task_el = document.createElement('div');
        task_el.classList.add("task");

        // Add a checkbox input element
        const task_checkbox_el = document.createElement('input');
        task_checkbox_el.classList.add('checkbox');
        task_checkbox_el.type = "checkbox";

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);


        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = "Edit";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = "Delete";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_content_el);
        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value = '';

        // Add an event listener to toggle line-through style when checkbox is clicked
        task_checkbox_el.addEventListener("change", (e) => {
            if (task_checkbox_el.checked) {
                task_input_el.style.textDecoration = "line-through";
            } else {
                task_input_el.style.textDecoration = "none";
            }
        });


        task_edit_el.addEventListener("click", (e) => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_edit_el.innerText = "save";
                task_input_el.removeAttribute("readonly")
                task_input_el.focus();
            }
            else {
                task_edit_el.innerText = "edit";
                task_input_el.setAttribute("readonly", "readonly");
            }
        });

        task_delete_el.addEventListener("click", (e) => {
            list_el.removeChild(task_el);
        })
    })
})