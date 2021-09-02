// Your JS goes here
document.body.style.width = "100vh";
document.body.style.height = "100vh";
    
for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
        let check = document.createElement("div");

    check.style.width = "12.5%"
    check.style.height = "12.5%"
    check.style.float = "left";

    if(i % 2 === 0){
        let color = j % 2 === 0 ? "red" : "black";
        check.style.backgroundColor = color;
    }
    else {
        let color = j % 2 == 0 ? "black" : "red";
        check.style.backgroundColor = color;
    }
        document.body.appendChild(check);
    }
}