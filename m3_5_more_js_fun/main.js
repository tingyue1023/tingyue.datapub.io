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

    const items = {};  // Using an object to store categories and their items
    for (let i = 0; i < itemCount; i++) {
        const category = prompt(`Enter the category for item ${i + 1}`);
        const item = prompt(`Enter item ${i + 1}`);
        if (!items[category]) {
            items[category] = [];
        }
        items[category].push(item);
    }

    let outputHtml = "";
    for (const category in items) {
        items[category].sort();
        outputHtml += `<strong>${category}:</strong> ${items[category].join(', ')}<br>`;
    }

    const outputDiv = document.getElementById('inputOutput');
    outputDiv.innerHTML = `Sorted items:<br>${outputHtml}`;
}

