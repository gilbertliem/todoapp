const idInput = document.querySelector('#idInput');
const button = document.querySelector('#addItem');
const addList = document.querySelector('#lists');

let todo = ['gilbert', 'sasa', 'faris', 'amir'];


function show() {
    addList.innerHTML = '';
    for(let i = 0; i < todo.length; i++) {
        addList.innerHTML += `<li>${todo[i]} <span onclick=remove(${i})> X </span><span onclick=edit(${i})> Edit </span></li>`;
    }
}
show();


function add() {
    let val = idInput.value;
    todo.push(val);
    show();
    idInput.value = '';
}
button.addEventListener('click', add);