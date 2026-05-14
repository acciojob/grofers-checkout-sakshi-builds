const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

    // select all price elements
    let prices = document.querySelectorAll(".prices");

    // variable to store total
    let total = 0;

    // loop through all prices
    prices.forEach((i) => {
        total += parseInt(i.textContent);
    });

    // select table
    const table = document.querySelector("table");

    // create new row
    const row = document.createElement("tr");

    // create new cell
    const data = document.createElement("td");

    // add total text
    data.textContent = "Total Price: " + total;

    // make td span across columns
    data.colSpan = 2;

    // append td inside row
    row.appendChild(data);

    // append row inside table
    table.appendChild(row);
};

// button click event
getSumBtn.addEventListener("click", getSum);