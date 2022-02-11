// IIFE -- Immediately Invoked Function Expression
// AKA -- Anonymous Self-Executing Function
(function () {
  function DisplayHome() {
    console.log("Home Page");

    $("#AboutUsButton").on("click", function () {
      location.href = "about.html";
    });

    $("main").append(
      `<p id="MainParagraph" class="mt-3">This is the Main Paragraph</p>`
    );
    //Article.innerHTML = ArticleParagraph;
    $("body").append(`<article class="container">
    <p id="ArticleParagraph" class="mt-3">This is the Article Paragraph</p>
    </article>`);
  }
  function DisplayProducts() {
    console.log("Products Page");
  }
  function DisplayServices() {
    console.log("Services Page");
  }
  function DisplayAbout() {
    console.log("About Page");
  }
  function DisplayContacts() {
    console.log("Contacts Page");

    ContactFormValidation();

    let sendButton = document.getElementById("sendButton");
    let subscribeCheckbox = document.getElementById("subscribeCheckbox");

    sendButton.addEventListener(
      "click",
      function () // override the default onClick event. aka the submit function with this
      {
        if (subscribeCheckbox.checked) {
          console.log("Checkbox Checked!");

          if (subscribeCheckbox.checked) {
            AddContact(fullName.value, contactNumber.value, emailAddress.value);
          }
        }
      }
    );
  }

  function ContactFormValidation() {
    let fullNamePattern =
      /^([A-Z][a-z]{1,3}.\s)?([A-Z][a-z]{1,25})+(\s|,|-)([A-Z][a-z]{1,25})+(\s|,|-)*$/;
    let contactNumberPattern =
      /^(\+\d{1,3}[\s-.])?\(?\d{3}\)?[\s-.]?\d{3}[\s-.]?\d{4}$/;
    let emailAddressPattern =
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,10}$/;

    ValidateField(
      "fullName",
      fullNamePattern,
      "Please enter a valid Full Name. This must include at least a capitalized first name followed by a capitalized last name."
    );
    ValidateField(
      "contactNumber",
      contactNumberPattern,
      "Please enter a valid Contact Number. Example: 905 999 9999"
    );
    ValidateField(
      "emailAddress",
      emailAddressPattern,
      "Please enter a valid Email Address Example: abc@abc.com."
    );
  }
  function DisplayContactListPage() {
    console.log("Contact List Page");
    if (localStorage.length > 0) {
      let contactList = document.getElementById("contactList"); // The tbody from contact-list.html

      let data = ""; // data container -> add deserialized data from localStorage

      let keys = Object.keys(localStorage); // returns a string array of keys from localStorage

      let index = 1; //counter for keys

      // for every key from Keys array, loop
      for (const key of keys) {
        let contactData = localStorage.getItem(key); // get localStorage data value related to key

        let contact = new core.Contact(); //Create a new empty contact to serialize and deserialize
        contact.deserialize(contactData);

        data += `<tr>
            <th scope="row" class="text-center">${index}</th>
            <td>${contact.FullName}</td>
            <td>${contact.ContactNumber}</td>
            <td>${contact.EmailAddress}</td>
            <td class="text-center"><button value="${key}" class="btn btn-primary btn-sm edit"><i class="fas fa-edit fa-sm"></i> Edit</button></td>
            <td class="text-center"><button value="${key}" class="btn btn-danger btn-sm delete"><i class="fas fa-trash-alt fa-sm"></i> Delete</button></td>
            </tr>
            `;
        index++;
        //Create Read Update Delete
      }

      contactList.innerHTML = data;

      $("#addButton").on("click", () => {
        location.href = "edit.html#add";
      });

      $("button.delete").on("click", function () {
        if (confirm("Are you sure?")) {
          localStorage.removeItem($(this).val());
        }

        location.href = "contact-list.html";
      });

      $("button.edit").on("click", function () {
        location.href = "edit.html#" + $(this).val();
      });
    }
  }

  function DisplayEditPage() {
    console.log("Edit Page");

    ContactFormValidation();

    let page = location.hash.substring(1);

    switch (page) {
      case "add":
        {
          $("main>h1").text("Add Contact");

          $("#editButton").html(`<i class="fas fa-plus-circle fa-lg"></i> Add`);

          $("#editButton").on("click", (event) => {
            event.preventDefault();
            // Add Contactt
            AddContact(fullName.value, contactNumber.value, emailAddress.value);
            // Refresh the contact-list page
            location.href = "contact-list.html";
          });

          $("#cancelButton").on("click", () => {
            location.href = "contact-list.html";
          });
        }
        break;
      default:
        {
          // get the contact info from localStorage
          let contact = new core.Contact();
          contact.deserialize(localStorage.getItem(page));

          // display the contact info in the edit form
          $("#fullName").val(contact.FullName);
          $("#contactNumber").val(contact.ContactNumber);
          $("#emailAddress").val(contact.EmailAddress);

          // when Edit is pressed - update the contact
          $("#editButton").on("click", (event) => {
            event.preventDefault();

            // get any changes from the form
            contact.FullName = $("#fullName").val();
            contact.ContactNumber = $("#contactNumber").val();
            contact.EmailAddress = $("#emailAddress").val();

            // replace the item in localStorage
            localStorage.setItem(page, contact.serialize());

            // return to the contact-list
            location.href = "contact-list.html";
          });

          $("#cancelButton").on("click", () => {
            location.href = "contact-list.html";
          });
        }
        break;
    }
  }
  /**
   * Adds a Contact Object to localStorage
   *
   * @param {string} fullName
   * @param {string} contactNumber
   * @param {string} emailAddress
   */
  function AddContact(fullName, contactNumber, emailAddress) {
    let contact = new core.Contact(fullName, contactNumber, emailAddress);
    if (contact.serialize()) {
      let key = contact.FullName.substring(0, 1) + Date.now();

      localStorage.setItem(key, contact.serialize());
    }
  }
  /**
   *  This method validates an input text field in the form
   *  and displays an error in the message area div element
   *
   * @param {string} field_Id
   * @param {RegExp} regular_expression
   * @param {string} error_message
   */
  function ValidateField(field_Id, regular_expression, error_message) {
    let messageArea = $("#messageArea").hide();

    $("#" + field_Id).on("blur", function () {
      let textContentOfField = $(this).val();
      if (!regular_expression.test(textContentOfField)) {
        //RegExp failed to validate
        $(this).trigger("focus").trigger("select");
        $("#submit").hide();
        messageArea.addClass("alert alert-danger");
        messageArea.text(error_message).show();

      } //Everything is Ok
      else {
        messageArea.removeAttr("class").hide(); // removes the attribute named class
      }
    });

    function DisplayLoginPage()
    {
      console.log("Login Page");
    }
    function DisplayRegister()
    {
      console.log("Register Page");
    }
  }

  function Start() {
    console.log("App Started");

    switch (document.title) {
      case "Home":
        DisplayHome();
        break;
      case "About Us":
        DisplayAbout();
        break;
      case "Our Projects":
        DisplayProducts();
        break;
      case "Our Services":
        DisplayServices();
        break;
      case "Contact Us":
        DisplayContacts();
        break;
      case "Contact-List":
        DisplayContactListPage();
        break;
      case "Edit":
        DisplayEditPage();
        break;
      case "Login":
        DisplayLogin();
        break;
      case "Register":
        DisplayRegister();
        break;
    }
  }

  window.addEventListener("load", Start);
})();
