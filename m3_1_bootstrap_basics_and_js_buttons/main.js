// Tingyue's Part

// Function for the first button
function greetUser() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour > 5 && hour < 12) {
        greeting = "Good morning";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }

    alert(greeting);
}


// Function for the second button
function changeButtonTextAndClass() {
    let button = document.getElementById("button2");
    console.log("Before change:", button.textContent, button.className);

    button.textContent = "Done";
    button.className = "btn btn-success";

    console.log("After change:", button.textContent, button.className);
}

// Add event listeners
document.getElementById("button1").addEventListener("click", greetUser);
document.getElementById("button2").addEventListener("click", changeButtonTextAndClass);
