/* Update the settings below before publishing. Use digits only for the phone number, including country code. */
const SITE_SETTINGS = {
  phone: "919876543210", // Replace with your real phone number, e.g. 91 followed by your 10-digit number
  whatsapp: "919876543210", // Replace with your WhatsApp number, digits only
  city: "Your City, West Bengal, India",
  email: "", // Optional: add your business email
  instagram: "", // Optional: add your Instagram profile URL
  facebook: "" // Optional: add your Facebook page URL
};

const digits = value => String(value || "").replace(/\D/g, "");
const phone = digits(SITE_SETTINGS.phone);
const whatsapp = digits(SITE_SETTINGS.whatsapp);

document.querySelectorAll("[data-phone-link]").forEach(link => {
  if (phone && phone !== "919876543210") {
    link.href = `tel:+${phone}`;
    if (link.textContent.toLowerCase().includes("call")) link.textContent = "Call Us";
  } else {
    link.href = "#contact";
    link.addEventListener("click", event => {
      event.preventDefault();
      alert("Please add your real phone number in script.js before publishing the website.");
    });
  }
});

document.querySelectorAll("[data-whatsapp]").forEach(link => {
  if (whatsapp && whatsapp !== "919876543210") {
    link.href = `https://wa.me/${whatsapp}?text=${encodeURIComponent("Hello Alive Fashion Studio, I would like to enquire about custom tailoring.")}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.href = "#contact";
    link.addEventListener("click", event => {
      event.preventDefault();
      alert("Please add your real WhatsApp number in script.js before publishing the website.");
    });
  }
});

document.querySelectorAll(".location").forEach(el => el.textContent = SITE_SETTINGS.city);
document.querySelectorAll(".contact-card").forEach(card => {
  if (card.querySelector("h3")?.textContent.includes("Visit")) {
    const p = card.querySelector("p");
    if (p) p.textContent = SITE_SETTINGS.city;
  }
});
if (SITE_SETTINGS.email) {
  document.querySelectorAll("[data-email]").forEach(el => { el.href = `mailto:${SITE_SETTINGS.email}`; el.textContent = SITE_SETTINGS.email; });
}
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
