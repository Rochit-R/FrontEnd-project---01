function menu()
{
var n=document.Form1.cod.value;
var m=document.Form1.n.value;
    if(n=="")
    {
     window.alert("CONFIRM FOR CASH ON DELIVERY ?");
     return false;
    }
    if(m=n)
    {
        window.alert("ORDER CONFIRMED .THANK YOU!");
        return false;
    }
}
