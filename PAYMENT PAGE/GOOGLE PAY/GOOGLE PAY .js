function funvall()
{
var n=document.Form1.username.value;
var m=document.Form1.user.value;
    if(n=="")
    {
     window.alert("Enter Your UPI Name");
     return false;
    }
    if(m=="")
    {
        window.alert("Enter Your UPI ID");
        return false;
    }
    else if(n && m)
    {
    window.alert("ORDER CONFIRMED.THANK YOU!");
    }
}
