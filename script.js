let btnReal = document.getElementById("btn-real");
let btnTest = document.getElementById("btn-test");

let real = document.getElementById("realizovane");
let test = document.getElementById("ukazkove");

btnReal.onclick = function(){
    realizovane.style.display = "grid";
    ukazkove.style.display = "none";
}

btnTest.onclick = function(){
    realizovane.style.display = "none";
    ukazkove.style.display = "grid";
}