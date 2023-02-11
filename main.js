let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
var enter = document.getElementById('entries');
var count = 0;
var entry = count;

function increment(){
    entry++;
    countEl.innerHTML = entry;
}

function save(){
    countEl.innerHTML = entry*0;
    enter.innerHTML = entry;
}

function reset(){
    window.location.reload();
}