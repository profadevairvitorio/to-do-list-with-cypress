// Função para adicionar uma nova tarefa
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById('task-list');
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Adiciona a funcionalidade de marcar a tarefa como concluída
        taskItem.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        // Adiciona a nova tarefa à lista
        taskList.appendChild(taskItem);

        // Limpa o campo de entrada e foca nele novamente
        taskInput.value = '';
        taskInput.focus();
    }
}

// Adiciona o evento de clique ao botão de adicionar tarefa
document.getElementById('add-task').addEventListener('click', addTask);

// Adiciona a funcionalidade de pressionar Enter para adicionar uma tarefa
document.getElementById('new-task').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
