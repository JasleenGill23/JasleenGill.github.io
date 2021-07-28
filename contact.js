/*Contains the functioning of feedback form:
checkform() function displays error alert if any field is empty while submittion or dispay Thank you message 
if all the requirements are fullfiled.
ratingform() function dispalay error alert if rating number id greater than 5 */
function checkform()
{
    if(document.getElementById('name').value =="")
    {
        alert("Enter the data in the required fields!");
        document.getElementById('name').style.border =  "3px Solid red";
    }
    else if(document.getElementById('review').value =="")
    {
        alert("Enter the data in the required fields!");
        document.getElementById('review').style.border =  "3px Solid red";
    }
    else if(document.getElementById('rating').value =="")
    {
        alert("Enter the data in the required fields!");
        document.getElementById('rating').style.border =  "3px Solid red";
    }

   else
    {
        alert("Thank You for providing Feedback!");
        return false;
    }
}
function ratingform()
{
    if(document.getElementById('rating').value >5)
    {
        alert("Provide Rating out of 5");
        return false;
    }
    else
    {
    return;
}
}