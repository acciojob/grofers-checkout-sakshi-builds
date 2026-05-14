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

    // add text
    data.textContent = total;

    // span across both columns
    data.colSpan = 2;

    // append td inside row
    row.appendChild(data);

    // append row inside tbody
    tableBody.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);