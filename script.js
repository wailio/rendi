// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle")
const mobileMenu = document.getElementById("mobileMenu")

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".mobile-menu .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open")
  })
})

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault()
      const target = document.querySelector(href)
      target.scrollIntoView({ behavior: "smooth" })
    }
  })
})

// Add scroll animation for elements
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.6s ease-out"
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observe sections
document.querySelectorAll(".showcase, .categories, .products").forEach((section) => {
  observer.observe(section)
})
