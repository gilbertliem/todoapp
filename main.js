// CREATING THE CLOSE BUTTONS FOR LISTS THAT ARE NOTE CREATED WITH THE MAIN FUNCTION
let myList = document.getElementsByTagName('li');
let index;

for (index = 0; index < myList.length; index++) {
    let aSpanTag = document.createElement('SPAN');
    let someTxt = document.createTextNode('\u00D7');
    aSpanTag.className = 'close';
    aSpanTag.appendChild(someTxt);
    myList[index].appendChild(aSpanTag);
}

// CLOSE BUTTON
let closeButton = document.getElementsByClassName('close');
// Removing items when click on SPAN CLOSE BUTTON
for (let i = 0; i < closeButton.length; i++) {
    closeButton[i].onclick = function() {
        let theDiv = this.parentElement;
        theDiv.style.display = 'none';
    }
}

// CREATING TODOS FUNCTION
function createNewElement() {
    let li = document.createElement('li'); // <li> make an empty list
    let theInputValue = document.getElementById('the-input').value;
    let textNode = document.createTextNode(theInputValue); // the-input value will be put inside the textnode
    li.appendChild(textNode); // put the textnode inside the list <li>
    // if value in NOT empty, value will be added to the ul <ul>

    if(theInputValue === '') {
        alert('Hey this cannot be empty.')
    } else {
        document.getElementById('the-ul').appendChild(li);
    }

    document.getElementById('the-input').value = '';

    let thePanTag = document.createElement('SPAN'); // create 'span' element
    let txt = document.createTextNode('\u00D7');
    thePanTag.className = 'close'; // create 'close' class
    thePanTag.appendChild(txt); // adding txt to thePanTag
    li.appendChild(thePanTag); // adding thePanTag to the li

}

// CREATING CHECKED TODOS
let ulList = document.querySelector('ul');
ulList.addEventListener('click', function(event) {
    // console.log(event);
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
}, false);

