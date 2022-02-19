"use strict";
(function()
{
    if(!sessionStorage.getItem("user"))
    {
        // redirect to the login page
        location.href = "login.html";
    }
})();