// Compute Interest
function compute()
{
    //Get Amount
    const principal = document.getElementById("principal").value;
    //Handling if amount is negative or 0
    if (principal<=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    //Get choosen rate and years
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;

    //Caluclate interest
    let interest = principal * years * rate /100;

    //Calculate year
    const year = new Date().getFullYear()+parseInt(years);

    //Write back interest-result
    const result = document.getElementById("result");
    result.innerHTML=
    `<br/> If you deposit <mark>${principal}</mark>,<br/>
    at an interest rate of <mark>${rate}%</mark>,<br/>
    You will receive an amount of <mark>${interest},</mark><br/>
    in the year <mark>${year}</mark>.<br/>`
    
}

//Updates rate changed by slider
function updateRate(){
    const rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
        