const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices=document.querySelectorAll(".prices");
	let total=0;
	prices.forEach((i)=>{
		total +=parseInt(i.textContent);
	});
	const table=document.querySelector("table");
	const row=document.createElement("tr");
	const data=document.createElement("td");
	row.appendChild(data);
	table.appendChild(row);
	data.textContent=total;
  
};

getSumBtn.addEventListener("click", getSum);

