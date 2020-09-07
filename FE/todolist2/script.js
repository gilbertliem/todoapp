const input = document.getElementById("input"), // ambil element input disimpan dalam variable input
      buttonadd = document.getElementById("add"), // ambil element add disimpan dalam variable buttonadd
      lists = document.getElementById("lists"), // ambil element lists disimpan dalam variable lists
      data = storage ('todo');


let todo = data ? data : []; // kita simpan data yang kita input di array todo 

buttonadd.addEventListener('click', add); // ketika button dengan id="add" di klik akan run fungsi add

if (todo.length) {
    show();
}

function show(){ // fungsi show() untuk menampilkan data dari todo
    lists.innerHTML = ""; // reset html jadi kosong 
    for(let i = 0; i < todo.length; i++){ // looping / perulangan ketika data dari todo tidak kosong
        lists.innerHTML += `<li>${todo[i]} <span onclick=remove(${i})> X </span><span onclick=edit(${i})> Edit </span></li>` // membuat element li baru dari data di todo
    }
}

function add(){ // fungsi add() untuk menambahkan data ke todo --> dipanggil ketika klik button id="add"
    let val = input.value; // ambil data / value / hasil dari input di todo
    todo.push(val) // menambahkan data ke array todo dari value input
    storage('todo', todo, true); // text yang di tampilkan
    show(); // memanggil fungsi show untuk menampilkan data yang sudah di tambahkan
}

function edit(index){
    lists.innerHTML = '';
    for (let i = 0; i < todo.length; i++) {
        if (i === index) {
            lists.innerHTML += `<input type='text' id='inputEdit' value=${todo[i]}><span onclick=done(${i})> Done </span>`
        } else {
            lists.innerHTML += `<li>${todo[i]} <span onclick=remove(${i})> X </span><span onclick=edit(${i})> Edit </span></li>`
        }
    }
}

function done(index) {
    const inputEdit = document.getElementById('inputEdit');
    todo.splice(index, 1, inputEdit.value);
    storage('todo', todo, true);
    show();
}

function remove(index){
    todo.splice(index, 1);
    storage('todo', todo, true);
    show();
}

function storage(name, data = null, set = false){
    if(set){
        localStorage.setItem(name, JSON.stringify(data));
        return true;
    }else{
        return JSON.parse(localStorage.getItem(name));
    }
}