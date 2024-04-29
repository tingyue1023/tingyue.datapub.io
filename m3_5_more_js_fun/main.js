function sortDefault() {
    const items = ['Watermelon', 'Apple', 'Orange', 'Kiwi'];
    items.sort();
    const outputDiv = document.getElementById('defaultOutput');
    outputDiv.innerHTML = 'Sorted: ' + items.join(', ');
}

function inputAndSort() {
    const numItems = prompt("How many items would you like to enter? (Between 2 and 4)");
    const itemCount = parseInt(numItems, 10);

    if (itemCount < 2 || itemCount > 4 || isNaN(itemCount)) {
        alert("Please enter a number between 2 and 4.");
        return;
    }

    const items = [];
    for (let i = 0; i < itemCount; i++) {
        items.push(prompt(`Enter item ${i + 1}`));
    }

    const enteredItems = items.join(', ');
    items.sort(); // Sort the items alphabetically
    const sortedItems = items.join(', ');

    const outputDiv = document.getElementById('inputOutput');
    outputDiv.innerHTML = `You entered ${enteredItems}. <br> I sorted them ${sortedItems}.`;
}