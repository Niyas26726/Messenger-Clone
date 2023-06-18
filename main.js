function validate()
{
    var username = document.getElementById("exampleInputEmail1");
    var password = document.getElementById("exampleInputPassword1");

    if(username.value.trim()=="")
    {
        alert("Enter valid Email or Phone number");
        return false;
    }
    else if(password.value.trim().length<7)
    {

        alert("Enter valid password");
        return false;
    }
    else{
        return true;
    }
}