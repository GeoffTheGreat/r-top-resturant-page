function index() {
  const content = document.createElement("div");
  content.setAttribute("class", "content");
  //restaurant name
  const restName = document.createElement("h1");
  restName.classList.add("restName");
  restName.textContent = "The House of Jol and Zol";
  content.appendChild(restName);

  //about content
  const about = document.createElement("div");
  about.classList.add("about");
  //who are we heading
  const whoAreWeHeading = document.createElement("h3");
  whoAreWeHeading.textContent = "Who are we?";
  about.appendChild(whoAreWeHeading);
  //who are we content
  const whoAreWeContent = document.createElement("p");
  whoAreWeContent.textContent =
    "The House of Jol and Zol, is an establishment that specializes in the art of using cannabis. We were formed in 2010 as a mere dream but since the decriminalization of the plant in 2018 we have established ourselves as the most exquisite eatery in South Africa.";
  about.appendChild(whoAreWeContent);
  //what do we do heading
  const whatWeDoHeading = document.createElement("h3");
  whatWeDoHeading.textContent = "What We Do?";
  about.appendChild(whatWeDoHeading);
  //what We Do content
  const whatWeDoContent = document.createElement("p");
  whatWeDoContent.textContent =
    "We provide our customers access to our private space, where they can order some of the best cbd/thc infused cuisine in the southern hemisphere.";
  about.appendChild(whatWeDoContent);
  //why us heading
  const whyUsHeading = document.createElement("h3");
  whyUsHeading.textContent = "Why us?";
  about.appendChild(whyUsHeading);
  //why us content
  const whyUsContent = document.createElement("p");
  whyUsContent.textContent =
    "We provide our customers with a safe place where they can relax and enjoy our services";
  about.appendChild(whyUsContent);

  content.appendChild(about);
  return content;
}

export default index;
