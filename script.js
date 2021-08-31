function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = parseInt(document.getElementById("years").value);
    var interest = principal*years*rate/100;


    var today = new Date().getFullYear();
    var futureyear = today + years;

    if(isNaN(principal) || principal<=0){
        alert("Enter a positive value");
        document.getElementById("principal").focus();
    }else{
        document.getElementById("result").innerHTML= 
        "If you deposit "+ principal+","  + "<br>\n"+
        " at an interest rate of " + rate + "%." + "<br>\n"+
        " You will recieve an amout of " + interest + ","+ "<br>\n"+
        " in the year " + futureyear;
    }




    
}
        
function slideValue(){

    document.getElementById("rateSpan").innerHTML = document.getElementById("rate").value + "%";

}