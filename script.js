const bill_total = document.getElementById("bill_total"); 
const tip_percentage = document.getElementById("tip_percentage");
const calculate_btn = document.getElementById("calculate_btn");
const grand_total = document.getElementById("grand_total");

calculate_btn.addEventListener("click",billTotal);

function billTotal(){
    grand_total.innerHTML(bill_total)
}