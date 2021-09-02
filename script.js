// Your JS goes here
for(let i = 0; i <= 63; i++) {
    let div = document.createElement('div');
    document.body.style.width = '100vh';
    document.body.style.height = '100vh';
    div.style.height = '11.1%';
    div.style.width = '11.1%';
    div.style.backgroundColor = 'blue';
    div.style.float = 'left';
    div.style.border = '1px solid black';
    document.body.appendChild(div);
}