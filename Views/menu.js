"use client"

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.createElement("button")
  menuButton.className = "menu-button"
  menuButton.setAttribute("aria-label", "Toggle menu")
  menuButton.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `

  const navbar = document.querySelector(".navbar .container")
  const navbarLinks = document.querySelector(".navbar-links")

  navbar.insertBefore(menuButton, navbarLinks)

  menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("active")
    navbarLinks.classList.toggle("active")
  })
})

