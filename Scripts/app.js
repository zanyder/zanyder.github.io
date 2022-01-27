// IIFE -- Immediately Invoked Function Expression
// AKA -- Anonymous Self-Executing Function
(function()
{
    function DisplayHome()
    {
        let About = document.getElementById("AboutUsButton");
        About.addEventListener("click", function()
        {
            console.log("Home Page");
            location.href = "about.html";
        });
        // step 1: get reference to an entry point
        let MainContent = document.getElementsByTagName("main")[0];
        let DocBody = document.body;

        // step 2: create an HTML element to insert
        let MainParagraph = document.createElement("p");
        let Article = document.createElement("article");
        let ArticleParagraph = `
        <p id="ArticleParagraph" class="mt-3">This is the Article Paragraph
        </p>
        `

        // step 3: configure the created element
        MainParagraph.setAttribute("id","MainParagraph");
        MainParagraph.setAttribute("class","mt-3");
        let FirstString = "This is";
        let SecondString = `${FirstString} the main paragraph`;
        MainParagraph.textContent = SecondString;
        Article.setAttribute("class","container");

        // step 4 perform insertion / deletion

        //insert before
        //MainContent.before(MainParagraph);

        //example of appending to end
        MainContent.appendChild(MainParagraph); 
        Article.innerHTML = ArticleParagraph;
        DocBody.appendChild(Article); 
        // DocBody.innerHTML = `
        //     <div class="container">
        //     <h1 class="display-1">Hello World!</h1>
        //     <p class="mt-5">and...what do you think of this!</p>
        //     </div>
        // `;

        // example of deletion
        // document.getElementsById("AboutUsButton").remove();

        
    }
    function DisplayProducts()
    {
        console.log("Products Page");
    }
    function DisplayServices()
    {
        console.log("Services Page");
    }
    function DisplayAbout()
    {
        console.log("About Page");
    }
    function DisplayContacts()
    {
        console.log("Contacts Page");
    }

    // let Start = function() 
    function Start()
    {
        console.log("App Started");

        switch(document.title)
        {
            case "Home":
                DisplayHome();
                break;
            case "About":
                DisplayAbout();
                break;
            case "Products":
                DisplayProducts();
                break;
            case "Services":
                DisplayServices();
                break;
            case "Contact":
                DisplayContacts();
                break;
        
        }
    }   
    
    window.addEventListener("load", Start);
})();