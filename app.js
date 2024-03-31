import branches from "./assets/data/branchesList.json" assert { type: "json" };

("use strict");

const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const header = document.querySelector(".header .container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

// scroll to top section
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// send mail
// info@unicom.net.np
function sendEmail() {
  console.log("calling send email");
  try {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "testbikramlimbu@gmail.com",
      Password: "T35t@1234",
      To: "kirklimbu@gmail.com",
      From: document.getElementById("fullName"),
      Subject: "Customer Inquery",
      Body: `Name:${document.getElementById(fullName).value}
      <br/>
      email:${document.getElementById(email).value}
       <br/>
       phone:${document.getElementById(phone).value}
       <br/>
      Description:${document.getElementById(message).value}
      `,
      Attachments: [
        {
          name: "File_Name_with_Extension",
          path: "Full Path of the file",
        },
      ],
    })
      .then(function (message) {
        alert("mail sent successfully");
      })
      .catch(function (error) {
        console.log("error", error);
        alert("error", error);
      });

    // console.log('mailResponse',mailResponse)
    // mailResponse && alert("Mail has been sent successfully")
  } catch (error) {
    console.log("error", error);
  }
}
