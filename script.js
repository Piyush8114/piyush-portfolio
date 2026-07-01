// navbar section
const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const navbarLinks = document.getElementById("navbar-links");
const navItems = document.querySelectorAll(".navbar-links a");
const navbar = document.querySelector(".navbar");

// Menu toggles
menuOpen.addEventListener("click", () => {
  navbarLinks.classList.add("active");
  menuOpen.style.display = "none";
  menuClose.style.display = "inline";
});

menuClose.addEventListener("click", () => {
  navbarLinks.classList.remove("active");
  menuOpen.style.display = "inline";
  menuClose.style.display = "none";
});

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navbarLinks.classList.remove("active");
    menuOpen.style.display = "inline";
    menuClose.style.display = "none";
  });
});

// Navbar background change on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Scroll Spy: Highlight active navbar item
const sections = document.querySelectorAll("section, body");
const navLi = document.querySelectorAll(".navbar-links li");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 120) {
      const id = section.getAttribute("id");
      if (id) current = id;
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    const link = li.querySelector("a");
    if (link && link.getAttribute("href") === `#${current}`) {
      li.classList.add("active");
    }
  });
});

// ! End of NavBar Section!

// Zoom Out image
function openModal(img) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");

  modal.style.display = "flex";
  modalImg.src = img.src;
  
  // Force a reflow to trigger CSS transition
  modal.offsetHeight;
  
  modal.classList.add("active");
}

function closeModal() {
  const modal = document.getElementById("imgModal");
  modal.classList.remove("active");
  setTimeout(() => {
    if (!modal.classList.contains("active")) {
      modal.style.display = "none";
    }
  }, 300);
}
//! end of zoom out image

// smooth

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const offset = 70; // height of fixed navbar
    const topPosition = target.offsetTop - offset;

    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  });
});

//!end of smooth screen slide

// Project section filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    projectCards.forEach((card) => {
      const categories = card.getAttribute("data-category").split(" ");

      if (filterValue === "all" || categories.includes(filterValue)) {
        card.style.display = "flex";
        setTimeout(() => {
          card.classList.remove("hide");
        }, 10);
      } else {
        card.classList.add("hide");
        setTimeout(() => {
          if (card.classList.contains("hide")) {
            card.style.display = "none";
          }
        }, 400);
      }
    });
  });
});

// contact section
// document
//   .getElementById("contactForm")
//   .addEventListener("submit", async function (e) {
//     e.preventDefault();

//     const status = document.getElementById("formStatus");
//     status.textContent = "Sending...";

//     const formData = {
//       name: this.name.value.trim(),
//     email: this.email.value.trim(),
//     message: this.message.value.trim(),
//   };

//   try {
//     const response = await fetch(
//       "https://script.google.com/macros/s/AKfycbzNfqU8NroZ_hKpnH-4CHDtZhqttXJ_czlqREV6ZyIr8-7YDqnDDurmLcUIQ7RukzlL/exec",
//       {
//         method: "POST",
//         body: JSON.stringify(formData),
//         headers: { "Content-Type": "application/json" },
//       }
//     );

//     if (response.ok) {
//       status.textContent = "Message sent successfully!";
//       status.style.color = "green";
//       this.reset();
//     } else {
//       throw new Error("Network error");
//     }
//   } catch (err) {
//     status.textContent = "Failed to send message. Please try again.";
//     status.style.color = "red";
//   }
// });

function openCert(url) {
  const modal = document.getElementById("certModal");
  const frame = document.getElementById("certFrame");
  
  modal.style.display = "flex";
  frame.src = url;
  
  // Force a reflow to trigger CSS transition
  modal.offsetHeight;
  
  modal.classList.add("active");
}

function closeCert() {
  const modal = document.getElementById("certModal");
  const frame = document.getElementById("certFrame");
  
  modal.classList.remove("active");
  setTimeout(() => {
    if (!modal.classList.contains("active")) {
      modal.style.display = "none";
      frame.src = "";
    }
  }, 300);
}

// Swiper Init
new Swiper(".certificate-swiper", {
  loop: true,
  spaceBetween: 25,
  speed: 1200,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

// Scroll Progress Indicator
window.addEventListener("scroll", () => {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollHeight > 0) {
    const scrolled = (window.scrollY / scrollHeight) * 100;
    const progressEl = document.getElementById("scroll-progress");
    if (progressEl) {
      progressEl.style.width = scrolled + "%";
    }
  }
});

// Typewriter Effect Initialization
const typewriterEl = document.getElementById("typewriter");
if (typewriterEl) {
  const typewriter = new Typewriter(typewriterEl, {
    loop: true,
    delay: 75,
    deleteSpeed: 50,
  });

  typewriter
    .typeString("Mobile App Developer")
    .pauseFor(1500)
    .deleteAll()
    .typeString("UI/UX Designer")
    .pauseFor(1500)
    .deleteAll()
    .typeString("Software Testing")
    .pauseFor(1500)
    .deleteAll()
    .typeString("Youtuber")
    .pauseFor(1500)
    .deleteAll()
    .start();
}
