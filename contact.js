// declare variables 
var SelectMethod = document.getElementById("ChooseContact");
SelectMethod.addEventListener("change",MyMethod);
function MyMethod() { 
console.log("test");
var SelectMyEmail = document.getElementById("myEmail"); 
var SelectMyPhone = document.getElementById("myPhone"); 
if (SelectMyEmail.selected) {
    document.getElementById("phonebox").style.display = "none";
    document.getElementById("emailbox").style.display = "block";
} else if (SelectMyPhone.selected) {
    document.getElementById("emailbox").style.display = "none";
    document.getElementById("phonebox").style.display = "block";
} else {
    document.getElementById("emailbox").style.display = "none";
    document.getElementById("phonebox").style.display = "none";
}
}