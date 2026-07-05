let btnReal = document.getElementById("btn-real");
let btnTest = document.getElementById("btn-test");

let real = document.getElementById("realizovane");
let test = document.getElementById("ukazkove");

btnReal.onclick = function () {
    real.style.display = "flex";
    test.style.display = "none";
};

btnTest.onclick = function () {
    real.style.display = "none";
    test.style.display = "flex";
};