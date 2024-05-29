function funval()
{
var n=document.forms["Form1"]["username"].value;
var m=document.forms["Form1"]["password"].value;
var l=document.forms["Form1"]["password"].value;
var a=document.forms["Form1"]["passwordd"].value;
var b=document.forms["Form1"]["passwordd"].value;
    if(n=="")
    {
    window.alert("Fill Username");
    }
    if(m=="")
    {
    window.alert("Fill Password");
    }
    if(a=="")
    {
    window.alert("Confirm Your Password");
    }
    else if(l.length<6)
    {
        window.alert("The Password Must be atleast 6 characters");
    }
    else if(b.length<6)
    {
        window.alert("The Confirm Password Must be atleast 6 characters");
    }
}