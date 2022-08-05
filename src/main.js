// imports
import mjLeaf from "./assets/mj.svg";
import "./styles/styles.css";
import index from "./index.js";
import menu from "./menu.js";
import contact from "./contact.js";

///get the main dom element #container
const pageContainer = document.getElementById("container");

//tab navigation section

const tabSelect = document.createElement("div");
tabSelect.setAttribute("id", "tabNavigation");
const homeTab = document.createElement("div");
homeTab.setAttribute("id", "homeTab");
homeTab.classList.add("tabNav");
homeTab.innerText = "Home";
const menuTab = document.createElement("div");
menuTab.setAttribute("id", "menuTab");
menuTab.classList.add("tabNav");
menuTab.textContent = "Menu";
const contactTab = document.createElement("div");
contactTab.setAttribute("id", "contactTab");
contactTab.classList.add("tabNav");
contactTab.textContent = "Contact";
tabSelect.appendChild(homeTab);
tabSelect.appendChild(menuTab);
tabSelect.appendChild(contactTab);
pageContainer.appendChild(tabSelect);

///content section
const contentContainer = document.createElement("div");
contentContainer.setAttribute("id", "contentContainer");
pageContainer.appendChild(contentContainer);

///footer
const footer = document.createElement("div");
footer.setAttribute("id", "footer");
const footerContent = document.createElement("p");
footerContent.textContent = "created by Timothy";
footer.appendChild(footerContent);
pageContainer.appendChild(footer);
//event listeners
homeTab.addEventListener("click", homePage);
menuTab.addEventListener("click", menuPage);
contactTab.addEventListener("click", contactPage);
homePage();
function homePage() {
  setFocus(homeTab);
  removeFocus(menuTab);
  removeFocus(contactTab);
  if (contentContainer.childElementCount > 0) {
    const content = document.querySelector(".content");
    contentContainer.removeChild(content);
  }
  contentContainer.appendChild(index());
}

function menuPage() {
  setFocus(menuTab);
  removeFocus(homeTab);
  removeFocus(contactTab);
  if (contentContainer.childElementCount > 0) {
    const content = document.querySelector(".content");
    contentContainer.removeChild(content);
  }
  contentContainer.appendChild(menu());
}

function contactPage() {
  setFocus(contactTab);
  removeFocus(menuTab);
  removeFocus(homeTab);
  if (contentContainer.childElementCount > 0) {
    const content = document.querySelector(".content");
    contentContainer.removeChild(content);
  }
  contentContainer.appendChild(contact());
}

function setFocus(tab) {
  tab.classList.add("currentTab");
}
function removeFocus(tab) {
  tab.classList.remove("currentTab");
}
