var login = document.querySelector(".login");
var nameInput = document.getElementById("myName");
var myName = "";

function sohbeteBasla() {
    myName = nameInput.value;
    if(myName.length > 0) {
        login.classList.add("hidden");
    }
}