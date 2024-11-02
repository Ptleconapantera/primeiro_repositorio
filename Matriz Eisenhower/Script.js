function addTarefa() {
    const taskInput = document.getElementById('taskInput');
    const prioritySelect = document.getElementById('prioritySelect');
    const taskText = taskInput.value.trim();
    const selectedPriority = prioritySelect.value;

    if (taskText) {
        const taskElement = document.createElement('div');
        taskElement.textContent = taskText;
        document.getElementById(selectedPriority).appendChild(taskElement);
        taskInput.value = ''; // Limpa a caixa de texto
    } else {
        alert("Por favor, insira uma tarefa.");
    }
}