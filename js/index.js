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
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Nav Section 
let aTags = document.querySelectorAll("a");
aTags[0].setAttribute('class', 'nav');
aTags[0].innerText = "Services"
aTags[1].setAttribute('class', 'nav');
aTags[1].innerText = "Product"
aTags[2].setAttribute('class', 'nav');
aTags[2].innerText = "Vision"
aTags[3].setAttribute('class', 'nav');
aTags[3].innerText = "Features"
aTags[4].setAttribute('class', 'nav');
aTags[4].innerText = "About"
aTags[5].setAttribute('class', 'nav');
aTags[5].innerText = "Contact"

aTags.forEach( element => {
  element.style.color = 'green';
});

let addAnchor = document.querySelector('nav');
addAnchor.append("Sign Up");
addAnchor.prepend("Welcome!");
console.log(addAnchor.textContent);

// CTA Section
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

// let ctaTitle = document.querySelector("h1");
// ctaTitle.style.whiteSpace = 'pre';
// ctaTitle.textContent = 'DOM\nIS\nAWESOME';

const ctaTitle = document.querySelector('.cta-text > h1');
ctaTitle.innerHTML = siteContent['cta']['h1'].replace(/ /g, '<br>');

let button = document.querySelector("button");
button.textContent = "Get Started"


// Main Content Section
let midImg = document.querySelector("#middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let mainContent = document.querySelectorAll('.text-content');
mainContent[0].querySelector('h4').innerText = siteContent['main-content']['features-h4'];
mainContent[0].querySelector('p').innerText = siteContent['main-content']['features-content'];
mainContent[1].querySelector('h4').innerText = siteContent['main-content']['about-h4'];
mainContent[1].querySelector('p').innerText = siteContent['main-content']['about-content'];
mainContent[2].querySelector('h4').innerText = siteContent['main-content']['services-h4'];
mainContent[2].querySelector('p').innerText = siteContent['main-content']['services-content'];
mainContent[3].querySelector('h4').innerText = siteContent['main-content']['product-h4'];
mainContent[3].querySelector('p').innerText = siteContent['main-content']['product-content'];
mainContent[4].querySelector('h4').innerText = siteContent['main-content']['vision-h4'];
mainContent[4].querySelector('p').innerText = siteContent['main-content']['vision-content'];


// Contact Section

let contactSection = document.querySelector('section.contact').children;
contactSection[0].innerText= siteContent.contact['contact-h4'];
contactSection[1].innerText = siteContent.contact.address;
contactSection[1].style.whiteSpace = "pre";
contactSection[2].innerText= siteContent.contact.phone;
contactSection[3].innerText = siteContent.contact.email;


// Footer Section
let footer = document.querySelector('footer');
footer.innerText = siteContent.footer.copyright;
console.log(footer);