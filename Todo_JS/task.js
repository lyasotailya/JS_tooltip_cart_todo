let tasks__list = document.querySelector('div.tasks__list')
let button = document.querySelector('button.tasks__add')
let input = document.querySelector('input.tasks__input')

button.onclick = (e) => {
    e.preventDefault()

    if (input.value !== '') {
        let div_task = document.createElement('div') 
        div_task.classList.add('task')
        tasks__list.appendChild(div_task)

        let div_task_title = document.createElement('div') 
        div_task_title.classList.add('task__title')
        div_task_title.textContent = input.value
        div_task.appendChild(div_task_title)

        let a_remove = document.createElement('a') 
        a_remove.href = '#'
        a_remove.classList.add('task__remove')
        a_remove.innerHTML = "&times;"
        div_task.appendChild(a_remove)

    }
    
}
