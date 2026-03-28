const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");
const btn = document.getElementById("submitBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  btn.innerText = "Submitting...";
  btn.disabled = true;

  setTimeout(() => {
    toast.style.opacity = "1";
    toast.innerText = "Consultation Request Submitted";

    form.reset();
    btn.innerText = "Submit Request";
    btn.disabled = false;

    setTimeout(() => {
      toast.style.opacity = "0";
    }, 3000);
  }, 1000);
});

// footer
// Set current year
document.getElementById("year").textContent = new Date().getFullYear();

// Initialize Lucide icons
lucide.createIcons();


//header
lucide.createIcons();

const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

// Scroll effect
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});
  function toggleMenu() {
    document.querySelector('.desktop-nav').classList.toggle('active');
  }

// Toggle mobile menu
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  menuToggle.innerHTML = mobileMenu.classList.contains("open")
    ? '<i data-lucide="x"></i>'
    : '<i data-lucide="menu"></i>';
  lucide.createIcons();
});

// Smooth scroll
document.querySelectorAll("[data-link]").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = document.querySelector(btn.dataset.link);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    mobileMenu.classList.remove("open");
  });
});


// hero section
lucide.createIcons();

// Smooth scroll
document.querySelectorAll("[data-link]").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = document.querySelector(btn.dataset.link);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
//ptactice section
lucide.createIcons();

//testimonial
lucide.createIcons();

const testimonials = [
  {
    name: "Ramesh Krishnan",
    location: "Chennai",
    text: "The team at Advocate Law Firm handled my property dispute with exceptional professionalism. Their expertise delivered a favorable judgment.",
    rating: 5,
  },
  {
    name: "Meena Sundaram",
    location: "Coimbatore",
    text: "The advocates guided me through a difficult divorce with empathy and clarity. Truly client-focused and professional.",
    rating: 5,
  },
  {
    name: "Karthik Rajan",
    location: "Madurai",
    text: "Their strategic corporate advice saved my business during a major dispute. Highly recommended.",
    rating: 5,
  },
  {
    name: "Anjali Venkat",
    location: "Trichy",
    text: "They handled my consumer complaint efficiently and secured full compensation. Excellent service!",
    rating: 5,
  },
];

let index = 0;

const text = document.getElementById("testimonialText");
const nameEl = document.getElementById("name");
const locationEl = document.getElementById("location");
const starsEl = document.getElementById("stars");
const dotsEl = document.getElementById("dots");

function render() {
  const t = testimonials[index];

  text.style.animation = "none";
  void text.offsetWidth;
  text.style.animation = "fadeSlide 0.6s forwards";

  text.textContent = `"${t.text}"`;
  nameEl.textContent = t.name;
  locationEl.textContent = t.location;

  starsEl.innerHTML = "";
  [...Array(t.rating)].forEach(() => {
    const star = document.createElement("span");
    star.textContent = "★";
    starsEl.appendChild(star);
  });

  dotsEl.innerHTML = "";
  testimonials.forEach((_, i) => {
    const dot = document.createElement("button");
    if (i === index) dot.classList.add("active");
    dot.onclick = () => { index = i; render(); };
    dotsEl.appendChild(dot);
  });
}

document.querySelector(".next").onclick = () => {
  index = (index + 1) % testimonials.length;
  render();
};

document.querySelector(".prev").onclick = () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  render();
};

render();
//stats scroll


//testimonial scroll
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".testimonial-slider");
  const slides = document.querySelectorAll(".testimonial-slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  // Safety check
  if (!slider || slides.length === 0) {
    console.error("Testimonial slider elements not found");
    return;
  }

  let index = 0;
  const gap = 40; // must match CSS gap
  const autoDelay = 8000; // 8 seconds (recommended)

  function updateSlider() {
    const slideWidth = slides[0].offsetWidth + gap;
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  // NEXT button
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      updateSlider();
      resetAutoScroll();
    });
  }

  // PREV button
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      updateSlider();
      resetAutoScroll();
    });
  }

  // AUTO SCROLL
  let autoScroll = setInterval(() => {
    index = (index + 1) % slides.length;
    updateSlider();
  }, autoDelay);

  // Reset auto scroll on interaction
  function resetAutoScroll() {
    clearInterval(autoScroll);
    autoScroll = setInterval(() => {
      index = (index + 1) % slides.length;
      updateSlider();
    }, autoDelay);
  }

  // Update on resize
  window.addEventListener("resize", updateSlider);

  // Initial position
  updateSlider();
});

//testimonial


//conatct section
const reveals = document.querySelectorAll(".reveal-left, .reveal-right, .reveal-up");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("active");
      }
    });
  },
  { threshold:0.2 }
);

reveals.forEach(el => observer.observe(el));


//footer
lucide.createIcons();

// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();

//changable gif for experience
const icons = [
  "icons/award.gif",
  "icons/scale.gif",
  "icons/shield.gif"
];

let i = 0;
setInterval(() => {
  i = (i + 1) % icons.length;
  document.getElementById("iconSwap").src = icons[i];
}, 2000);