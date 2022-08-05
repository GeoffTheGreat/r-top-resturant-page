import logo from "./assets/mjLogo.svg";

function contact() {
  //main container
  const content = document.createElement("div");
  content.setAttribute("class", "content");
  //contact header
  const contactHeader = document.createElement("div");
  contactHeader.classList.add("restHeader");
  const headLogo = document.createElement("img");
  headLogo.classList.add("logo");
  headLogo.src = logo;
  contactHeader.appendChild(headLogo);
  const restName = document.createElement("h1");
  restName.classList.add("restName");
  restName.textContent = "Get in Touch";
  contactHeader.appendChild(restName);
  content.appendChild(contactHeader);

  //contact item
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("contactItem");
  const callUs = document.createElement("h3");
  callUs.textContent = "Call us on:";
  infoDiv.appendChild(callUs);

  const number = document.createElement("h3");
  number.textContent = "123-456-7890";
  infoDiv.appendChild(number);

  const emailUs = document.createElement("h3");
  emailUs.textContent = "Email us at:";
  infoDiv.appendChild(emailUs);

  const emailAddress = document.createElement("h3");
  emailAddress.textContent = "thojaz@mail.com";
  infoDiv.appendChild(emailAddress);

  content.appendChild(infoDiv);

  return content;
}

export default contact;
