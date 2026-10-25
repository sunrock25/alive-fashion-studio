const SITE_SETTINGS = {
  phone: "917003280774",
  alternatePhone: "919333004877",
  whatsapp: "917003280774",
  city: "AshokNagar, Kolkata, West Bengal",
  address: "85/7 Chanditala Lane, AshokNagar, Kolkata 700040",
  email: "aalivefashionstudio@gmail.com"
};

const phone = SITE_SETTINGS.phone;
const whatsapp = SITE_SETTINGS.whatsapp;
document.querySelectorAll("[data-phone-link]").forEach(link => {
  link.href = `tel:+${phone}`;
  if (link.textContent.toLowerCase().includes("add phone")) link.textContent = `Call: 7003280774 / 9333004877`;
});
document.querySelectorAll("[data-whatsapp]").forEach(link => {
  link.href = `https://wa.me/${whatsapp}?text=${encodeURIComponent("Hello Alive Fashion Studio, I would like to enquire about custom tailoring.")}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});
document.querySelectorAll(".location").forEach(el => el.textContent = SITE_SETTINGS.city);
document.querySelectorAll(".contact-card").forEach(card => {
  const heading = card.querySelector("h3")?.textContent || "";
  if (heading.includes("Visit")) {
    const p = card.querySelector("p");
    if (p) p.textContent = SITE_SETTINGS.address;
  }
  if (heading.includes("Call")) {
    const p = card.querySelector("p");
    if (p) p.textContent = `7003280774 / 9333004877`;
  }
});
document.querySelectorAll("[data-email]").forEach(el => { el.href = `mailto:${SITE_SETTINGS.email}`; el.textContent = SITE_SETTINGS.email; });
document.getElementById("year").textContent = new Date().getFullYear();
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));
