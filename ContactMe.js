/* Contains functions of feedback form*/
function formChecking()
{
    if (document.getElementById('Email').value =="")
    {
        alert("Field Required!");
        document.getElementById('Email').style.border = "5px Solid red";
    }
    else if (document.getElementById('comment').value =="")
    {
        alert("Field Required!");
        document.getElementById('comment').style.border= "5px Solid red";
    }
    else if (document.getElementById('rating').value =="")
    {
        alert("Field Required!");
        document.getElementById('rating').style.border= "5px Solid red";
    }

    else
    {
        alert("Thank You for Providing feedback!");
        return false;
    }
}

function rateForm()
{
    if (document.getElementById('rating').value >5)
    {
        alert("Provide Rating out of 5");
        return false;
    }
    else
    {
        return;
    }   
}
