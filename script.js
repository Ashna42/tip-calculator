let total_bill=document.getElementById("total")

    function calculate(bill,percentage){
        bill=Number(bill);
        percentage=Number(percentage);
        let total=bill+(bill * percentage / 100);
        total_bill.innerHTML="Total:$" + total;
}