const getSumBtn = document.createElement("button");

getSumBtn.append("Get Total Price");

document.body.appendChild(getSumBtn);

const getSum = () => {

    let prices = document.querySelectorAll(".prices");

    let total = 0;

    prices.forEach((i) => {
        total += parseInt(i.textContent);
    });

    // select tbody
    const tableBody = document.querySelector("tbody");

    // create row
    const row = document.createElement("tr");

    // create td
    const data = document.createElement("td");

    // add total text
    data.textContent = "Total Price: " + total;

    // span across columns
    data.colSpan = 2;

    // append td to row
    row.appendChild(data);

    // append row to tbody
    tableBody.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);