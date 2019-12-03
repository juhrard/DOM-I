const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let headerNav = document.querySelectorAll('a');
headerNav.forEach((item, i)=> item.textContent = siteContent["nav"][`nav-item-${i}`])

headerNav.forEach(item => item.style.color = 'green');


//Appending/Prepending Children to Nav
let nav = document.querySelector("nav");

let newA = document.createElement('a');
let newA2 = document.createElement('a');

newA.textContent = "Hello!";
newA2.textContent = "Goodbye!";

nav.appendChild(newA);
nav.appendChild(newA2);

newA.style.color = "green";
newA2.style.color = "green";

// headerNav[0].textContent = siteContent["nav"][`nav-item-1`];
// headerNav[1].textContent = siteContent["nav"][`nav-item-2`];
// headerNav[2].textContent = siteContent["nav"][`nav-item-3`];
// headerNav[3].textContent = siteContent["nav"][`nav-item-4`];
// headerNav[4].textContent = siteContent["nav"][`nav-item-5`];
// headerNav[5].textContent = siteContent["nav"][`nav-item-6`];

//Header Variables

let headerH1 = document.querySelector(".cta-text h1");
headerH1.textContent = siteContent["cta"]["h1"];

let headerButton = document.querySelector(".cta-text button");
headerButton.textContent = siteContent["cta"]["button"];

let headerImg = document.querySelector(".cta img")
headerImg.setAttribute('src', siteContent["cta"]["img-src"])

//Center Variables

let h4Text = document.querySelectorAll('h4');

// h4Text.forEach((item, i)=> item.textContent = siteContent["main-content"][`nav-item-${i}`])

h4Text[0].textContent = siteContent["main-content"]["features-h4"]
h4Text[1].textContent = siteContent["main-content"]["about-h4"]
h4Text[2].textContent = siteContent["main-content"]["services-h4"]
h4Text[3].textContent = siteContent["main-content"]["product-h4"]
h4Text[4].textContent = siteContent["main-content"]["vision-h4"]

let pContent = document.querySelectorAll('p');

pContent[0].textContent = siteContent["main-content"]["features-content"];
pContent[1].textContent = siteContent["main-content"]["about-content"];
pContent[2].textContent = siteContent["main-content"]["services-content"];
pContent[3].textContent = siteContent["main-content"]["product-content"];
pContent[4].textContent = siteContent["main-content"]["vision-content"];

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//Contact Variables

h4Text[5].textContent = siteContent["contact"]["contact-h4"];

pContent[5].textContent = siteContent["contact"]["address"];
pContent[6].textContent = siteContent["contact"]["phone"];
pContent[7].textContent = siteContent["contact"]["email"];

//Footer Variables

pContent[8].textContent = siteContent["footer"]["copyright"];
