const idInput = document.querySelector('#idInput');
const button = document.querySelector('#addItem');
const addList = document.querySelector('#lists');
const data = getStorage('simpenan')

let todo = data ? data : [];


function show() {
    addList.innerHTML = '';
    for(let i = 0; i < todo.length; i++) {
        addList.innerHTML += `<li>${todo[i]} <span onclick=remove(${i})> X </span><span onclick='edit(${i}, event)'> Edit </span></li>`;
    }
}
show();

function add() {
    let val = idInput.value;
    todo.push(val);
    setStorage("laci", todo);
    show();
    idInput.value = '';
}
button.addEventListener('click', add);

function remove(index) {
    todo.splice(index, 1);
    setStorage("laci", todo);
    show();
}

// 1. edit di click, muncul input di namanya untuk bisa edit
// 2. setelah tulisan edit, klik enter / add button disamping input
// 3. call fungsi show

function edit(index, event) {
    let elem = event.target.parentNode;
    console.log(elem);
    // elem.innerHTML = `<input id='newInput' type='text'><span onclick=done(${index})>done</span>`;
    // elem.innerHTML = `<input type='text' onkeypress='done(${index},event)'>`;
}

function done(index) {
    const newInput = document.querySelector('#newInput');
    todo[index] = newInput.value;
    setStorage('laci', todo);
    show();
}

function done(index, event) {
    console.log(event);
    if(event.key === 'Enter') {
        todo[index] = event.target.value;
        // console.log(todo[index]);
        setStorage('laci', todo);
        show();
    }
}

// psuedocode getStorage
// 1. menciptakan variabel yg berisi data dari localStorage
// 2. membuat fungsi getStorage
// 3. menyambungkan fungsi getStorage dengan variabel yg berisi data dari localStorage
// 4. apabila fungsi dipanggil, value/data didalam variabel akan diambil
function getStorage(name) {
    return JSON.parse(localStorage.getItem(name));
}

function setStorage (name, data) {
    return localStorage.setItem(name, JSON.stringify(data));
}

// function storage(name, data = null, set = false){
//     if(set){
//         localStorage.setItem(name, JSON.stringify(data));
//         return true;
//     }else{
//         return JSON.parse(localStorage.getItem(name));
//     }
// }