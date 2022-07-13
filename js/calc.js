function Calculate(){
let n1=parseFloat(document.getElementById("in1").value)
let n2=parseFloat(document.getElementById("in2").value)
let r=document.getElementById("selectid").value;
let result=0;


    switch (r) {
        case "+":
            result=n1+n2;
            document.getElementById("calcal").innerHTML=result;
            break;
        case "-":
            result=n1-n2;
            document.getElementById("calcal").innerHTML=result
        case "/":
          
            if (n2==0) {
                document.getElementById("calcal").innerHTML="Cannot Devide By Zero";
            } else{
                result=n1/n2;
                document.getElementById("calcal").innerHTML=result;
            }
            break;
        case "x":
            result=n1*n2;
            document.getElementById("calcal").innerHTML=result;
            break;
        default:
            document.getElementById("calcal").innerHTML="Please Select an Operation";
            break;
    }

}