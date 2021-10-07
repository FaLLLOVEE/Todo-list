const btn_nova_tarefa = document.querySelector('#nova-tarefa')
const inp_taskname = document.querySelector('#nome-da-tarefa')
const quantidade_de_items = document.querySelector('#quantidade-de-items')
let quantidade_de_items_n = 0
const tasklist = document.querySelector('.c-tasklist')
btn_nova_tarefa.addEventListener('click', novaTarefa)


function novaTarefa()
{
    if(inp_taskname.value === '') return
    const li = document.createElement('li')
    const text = document.createElement('span')
    const del = document.createElement('i')

    text.innerText = inp_taskname.value
    del.className = 'delete bi bi-x'
    del.onclick = deleteElement
    li.appendChild(text)
    li.appendChild(del)

    tasklist.appendChild(li)
    inp_taskname.value = ''
    quantidade_de_items_n++
    quantidade_de_items.innerHTML = '<i class="bi bi-list-task"></i> '+quantidade_de_items_n
}
function deleteElement(e)
{
    e.target.parentElement.remove()
    quantidade_de_items_n--
    quantidade_de_items.innerHTML = "Tarefas restantes: "+quantidade_de_items_n

}
