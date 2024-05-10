const aboutUsInFooter = document.getElementById("about");
const contactInFooter = document.getElementById("contactInFooter");
const contactTitleInFooter = document.getElementById("contactTitleInFooter");

export function aboutUsInHeaderHandeler(e) {
  e.preventDefault();
  aboutUsInFooter.focus();
  aboutUsInFooter.scrollIntoView();
}

export function contactInHeaderHandeler(e) {
  e.preventDefault();
  contactInFooter.scrollIntoView();
  setTimeout(() => {
    contactTitleInFooter.style.color = "#ffffff";
  }, 1000);
  contactTitleInFooter.style.color = "#ffa500";
}
