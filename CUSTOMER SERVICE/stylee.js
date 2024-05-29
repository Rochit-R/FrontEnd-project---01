function funval()
{
var n=document.Form1.textarea.value;
var m=document.Form1.Rating.value;
var l=document.Form1.RATING.value;
    if(n=="")
    {
     window.alert("CAN YOU SHARE YOUR FEEDBACK WITH US");
     return false;
    }
    else if(m=="" && l=="")
    {
        window.alert("CAN YOU PLEASE SHARE YOUR EXPERIENCE AND ABOUT OUR CONTENT THROUGH YOUR RATINGS ");
        return false;
    }
}