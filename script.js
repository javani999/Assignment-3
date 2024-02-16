const hours = new Date().getHours();
let message = "Welcome!";

if (hours >= 4 && hours < 12) {
    message = "Good morning! Welcome to my site.";
} else if (hours >= 12 && hours < 17) {
    message = "Good afternoon! Welcome to my site.";
} else {
    message = "Good evening! Welcome to my site.";
}

document.getElementById('welcome').textContent = message;


document.getElementById('welcome').textContent = message;