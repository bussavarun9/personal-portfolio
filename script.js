// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function(e){

    e.preventDefault();

    document.querySelector(
      this.getAttribute('href')
    ).scrollIntoView({

      behavior:'smooth'

    });

  });

});


// =========================
// SCROLL REVEAL ANIMATION
// =========================

const cards = document.querySelectorAll(
  '.card, .skill, .contact-card'
);

window.addEventListener('scroll', revealCards);

function revealCards(){

  const triggerBottom =
    window.innerHeight * 0.85;

  cards.forEach(card => {

    const cardTop =
      card.getBoundingClientRect().top;

    if(cardTop < triggerBottom){

      card.style.opacity = '1';

      card.style.transform =
      'translateY(0)';

    }

  });

}


// =========================
// INITIAL CARD STYLE
// =========================

cards.forEach(card => {

  card.style.opacity = '0';

  card.style.transform =
  'translateY(40px)';

  card.style.transition =
  '0.6s ease';

});

revealCards();


// =========================
// TYPING EFFECT
// =========================
const text =
"Computer Science and Engineering student passionate about MERN stack development, Java,Python, SQL, Azure DevOps, and Tableau. I enjoy building responsive, user-friendly web applications and continuously exploring modern technologies through hands-on projects.";

let i = 0;

const typingText =
document.querySelector('.hero-text p');

typingText.innerHTML = "";

function typing(){

  if(i < text.length){

    typingText.innerHTML +=
    text.charAt(i);

    i++;

    setTimeout(typing, 50);

  }

}

typing();


// =========================
// EMAILJS CONTACT FORM
// =========================

emailjs.init({
  publicKey: "q2CutzPP_WlERqi7N"
});

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const button = contactForm.querySelector("button");

  button.innerText = "Sending...";
  button.disabled = true;

  emailjs.sendForm(
    "service_2ji6hnh",
    "template_tf7qu8k",
    contactForm
  )
  .then(function() {

    alert("Message sent successfully! Thank you.");

    contactForm.reset();

    button.innerText = "Send Message";
    button.disabled = false;

  })
  .catch(function(error) {

    console.error("EmailJS Error:", error);

    alert("Failed to send message. Please try again.");

    button.innerText = "Send Message";
    button.disabled = false;

  });

});
