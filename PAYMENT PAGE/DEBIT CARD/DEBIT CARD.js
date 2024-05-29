function funvall()
{
var n=document.Form1.cardname.value;
var m=document.Form1.number.value;
var l=document.Form1.number.value;
var o=document.Form1.cvv.value;
var p=document.Form1.cvv.value;
    if(n=="")
    {
     window.alert("Enter Your Card Name");
     return false;
    }
    if(m=="")
    {
        window.alert("Enter Your Card Number");
        return false;
    }
    if(o=="")
    {
        window.alert("Enter Your CVV Number");
        return false;
    }
    else if(l.length<16)
    {
        window.alert("CARD NUMBER SHOULD BE 16 NUMBERS");
        return false;
    }
    
    else if(p.length<3)
    {
        window.alert("CVV SHOULD BE 3 NUMBERS");
        return false;
    }
    else
    {
    window.alert("ORDER CONFIRMED.THANK YOU!");
    }
}
