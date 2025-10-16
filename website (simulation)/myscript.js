// Log-In function
function loginFunction() {
    let text;
    let person = prompt("Please enter your name:");
    if (person == null || person == "") {
      text = "* User cancelled the prompt.";
    } else {
      window.alert("Welcome, " + person);
      window.location.href = 'homepage.html';
    }
    document.getElementById("demo").innerHTML = text;
}

// Log-Out function
function logoutFunction() {
    window.alert("You have logged out!");
    window.location.href = 'index.html';
}