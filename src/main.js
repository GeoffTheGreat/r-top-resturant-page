// imports
import "./styles/styles.css";

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
