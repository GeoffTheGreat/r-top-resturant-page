import logo from "./assets/mjLogo.svg";
function index() {
  //main container
  const content = document.createElement("div");
  content.setAttribute("class", "content");
  //restaurant name
  const restHeader = document.createElement("div");
  restHeader.classList.add("restHeader");

  const headLogo = document.createElement("img");
  headLogo.classList.add("logo");
  headLogo.src = logo;
  restHeader.appendChild(headLogo);

  const restName = document.createElement("h1");
  restName.classList.add("restName");
  restName.textContent = "The House of Jol and Zol";
  restHeader.appendChild(restName);

  content.appendChild(restHeader);

  //who are we div content
  const whoAreWeDiv = document.createElement("div");
  whoAreWeDiv.classList.add("about");
  //who are we heading
  const whoAreWeHeading = document.createElement("h3");
  whoAreWeHeading.textContent = "Who are we?";
  whoAreWeDiv.appendChild(whoAreWeHeading);
  //who are we content
  const whoAreWeContent = document.createElement("p");
  whoAreWeContent.textContent =
    "The House of Jol and Zol, is an establishment that specializes in the art of using cannabis. We were formed in 2010 as a mere dream but since the decriminalization of the plant in 2018 we have established ourselves as the most exquisite eatery in South Africa.";
  whoAreWeDiv.appendChild(whoAreWeContent);
  content.appendChild(whoAreWeDiv);

  //what we do section
  const whatWeDoDiv = document.createElement("div");
  whatWeDoDiv.classList.add("about");
  //what do we do heading
  const whatWeDoHeading = document.createElement("h3");
  whatWeDoHeading.textContent = "What We Do?";
  whatWeDoDiv.appendChild(whatWeDoHeading);
  //what We Do content
  const whatWeDoContent = document.createElement("p");
  whatWeDoContent.textContent =
    "We provide our customers access to our private space, where they can order some of the best cbd/thc infused cuisine in the southern hemisphere.";
  whatWeDoDiv.appendChild(whatWeDoContent);
  content.appendChild(whatWeDoDiv);

  //why us section
  const whyUsDiv = document.createElement("div");
  whyUsDiv.classList.add("about");
  //why us heading
  const whyUsHeading = document.createElement("h3");
  whyUsHeading.textContent = "Why us?";
  whyUsDiv.appendChild(whyUsHeading);
  //why us content
  const whyUsContent = document.createElement("p");
  whyUsContent.textContent =
    "We provide our customers with a safe place where they can relax and enjoy our services";
  whyUsDiv.appendChild(whyUsContent);
  content.appendChild(whyUsDiv);

  //trading hours
  const tradingDiv = document.createElement("div");
  tradingDiv.classList.add("about");
  tradingDiv.classList.add("tradingHrs");

  //trading heading
  const tradingHeading = document.createElement("h3");
  tradingHeading.textContent = "Trading Hours";
  tradingDiv.appendChild(tradingHeading);
  //trading content
  const tradingList = document.createElement("ul");
  tradingList.classList.add("tradingList");
  const mon = document.createElement("li");
  mon.textContent = "Monday: 08:00 - 22:00";
  tradingList.appendChild(mon);
  const tue = document.createElement("li");
  tue.textContent = "Tuesday: 08:00 - 22:00";
  tradingList.appendChild(tue);
  const wed = document.createElement("li");
  wed.textContent = "Wednesday: 08:00 - 22:00";
  tradingList.appendChild(wed);
  const thurs = document.createElement("li");
  thurs.textContent = "Thursday: 08:00 - 22:00";
  tradingList.appendChild(thurs);
  const fri = document.createElement("li");
  fri.textContent = "Friday: 08:00 - 22:00";
  tradingList.appendChild(fri);
  const sat = document.createElement("li");
  sat.textContent = "Saturday: 09:00 - 22:00";
  tradingList.appendChild(sat);
  const sun = document.createElement("li");
  sun.textContent = "Sunday: 12:00 - 22:00";
  tradingList.appendChild(sun);
  tradingDiv.appendChild(tradingList);
  content.appendChild(tradingDiv);

  return content;
}

export default index;
