// Replace these two values with your actual Google Form URLs.
// Example: "https://docs.google.com/forms/d/e/XXXXXXXX/viewform"
const BUSINESS_FORM_URL = "https://tally.so/r/xXK26G";
const CREATOR_FORM_URL = "https://tally.so/r/jaNLq9";

document.querySelectorAll("[data-form-link]").forEach((link) => {
  const type = link.dataset.formLink;
  const url = type === "business" ? BUSINESS_FORM_URL : CREATOR_FORM_URL;
  if (url && !url.includes("PASTE_")) {
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Add your Google Form link in script.js first.");
    });
  }
});
