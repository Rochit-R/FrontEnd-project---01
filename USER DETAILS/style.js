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
    return false;
    }
    if(m=="")
    {
    window.alert("Fill Password");
    return false;
    }
    if(a=="")
    {
    window.alert("Confirm Your Password");
    return false;
    }
    else if(l.length<6)
    {
        window.alert("The Password Must be atleast 6 characters");
        return false;
    }
    else if(b.length<6)
    {
        window.alert("The Confirm Password Must be atleast 6 characters");
        return false;
    }
    else
    {
        window.alert("SUBMITED");
    }
    if(l!=a)
    {
       window.alert("PASSWORD DOES NOT MATCH");
       return false;
    }
}