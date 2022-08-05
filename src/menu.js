import logo from "./assets/mjLogo.svg";
import foodLogo from "./assets/food.svg";
import beverageLogo from "./assets/beverages.svg";
import itemOneImg from "./assets/burger-eiliv-sonas-aceron.jpg";
import itemTwoImg from "./assets/wine-justin-aikin.jpg";

function menu() {
  //main container
  const content = document.createElement("div");
  content.setAttribute("class", "content");
  content.classList.add("menuContent");
  //menu Header
  const restHeader = document.createElement("div");
  restHeader.classList.add("restHeader");
  const headLogo = document.createElement("img");
  headLogo.classList.add("logo");
  headLogo.src = logo;
  restHeader.appendChild(headLogo);
  const restName = document.createElement("h1");
  restName.classList.add("restName");
  restName.textContent = "The Menu";
  restHeader.appendChild(restName);
  content.appendChild(restHeader);

  //food
  const foodItems = document.createElement("div");
  foodItems.classList.add("foodSection");

  const foodHeader = document.createElement("div");
  foodHeader.classList.add("foodHeader");

  const foodL = document.createElement("img");
  foodL.classList.add("logo");
  foodL.src = foodLogo;
  foodHeader.appendChild(foodL);

  const foodHeading = document.createElement("h2");
  foodHeading.textContent = "Meals";
  foodHeader.appendChild(foodHeading);

  foodItems.appendChild(foodHeader);
  //menuItem
  //item one
  const foodItemList = document.createElement("div");
  foodItemList.classList.add("menuItem");

  //description side
  const foodType = document.createElement("div");
  foodType.classList.add("itemDescription");
  //make a grid
  const itemSet = document.createElement("div");
  itemSet.classList.add("itemSet");
  //foodType Heading
  const foodTypeHeadingOne = document.createElement("h3");
  foodTypeHeadingOne.textContent = "Burgers";
  foodTypeHeadingOne.classList.add("gridHeading");
  itemSet.appendChild(foodTypeHeadingOne);
  //item one
  const itemOneDes = document.createElement("h4");
  itemOneDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  itemSet.appendChild(itemOneDes);

  const itemOnePrice = document.createElement("h4");
  itemOnePrice.textContent = "lorem";
  itemSet.appendChild(itemOnePrice);
  //item two
  const itemTwoDes = document.createElement("h4");
  itemTwoDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  itemSet.appendChild(itemTwoDes);

  const itemTwoPrice = document.createElement("h4");
  itemTwoPrice.textContent = "lorem";
  itemSet.appendChild(itemTwoPrice);
  //item three
  const itemThreeDes = document.createElement("h4");
  itemThreeDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  itemSet.appendChild(itemThreeDes);

  const itemThreePrice = document.createElement("h4");
  itemThreePrice.textContent = "lorem";
  itemSet.appendChild(itemThreePrice);

  //item four
  const itemFourDes = document.createElement("h4");
  itemFourDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  itemSet.appendChild(itemFourDes);

  const itemFourPrice = document.createElement("h4");
  itemFourPrice.textContent = "lorem";
  itemSet.appendChild(itemFourPrice);

  //foodType Heading
  const foodTypeHeadingTwo = document.createElement("h3");
  foodTypeHeadingTwo.textContent = "Pizza";
  foodTypeHeadingTwo.classList.add("gridHeading");
  itemSet.appendChild(foodTypeHeadingTwo);
  //item five
  const itemFiveDes = document.createElement("h4");
  itemFiveDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  itemSet.appendChild(itemFiveDes);

  const itemFivePrice = document.createElement("h4");
  itemFivePrice.textContent = "lorem";
  itemSet.appendChild(itemFivePrice);

  //item six
  const itemSixDes = document.createElement("h4");
  itemSixDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  itemSet.appendChild(itemSixDes);

  const itemSixPrice = document.createElement("h4");
  itemSixPrice.textContent = "lorem";
  itemSet.appendChild(itemSixPrice);
  //item seven
  const itemSevenDes = document.createElement("h4");
  itemSevenDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  itemSet.appendChild(itemSevenDes);

  const itemSevenPrice = document.createElement("h4");
  itemSevenPrice.textContent = "lorem";
  itemSet.appendChild(itemSevenPrice);

  //item eight
  const itemEightDes = document.createElement("h4");
  itemEightDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  itemSet.appendChild(itemEightDes);

  const itemEightPrice = document.createElement("h4");
  itemEightPrice.textContent = "lorem";
  itemSet.appendChild(itemEightPrice);

  //append grid
  foodType.appendChild(itemSet);

  //append item list
  foodItemList.appendChild(foodType);
  //item picture
  const itemOneImgSection = document.createElement("div");
  itemOneImgSection.classList.add("imgSection");

  const itemOnePic = document.createElement("img");
  itemOnePic.classList.add("itemImg");
  itemOnePic.src = itemOneImg;
  itemOneImgSection.appendChild(itemOnePic);
  foodItemList.appendChild(itemOneImgSection);
  // item list
  foodItems.appendChild(foodItemList);

  //append all food items
  content.appendChild(foodItems);
  //beverage
  const beverageItems = document.createElement("div");
  beverageItems.classList.add("beverageSection");

  const beverageHeader = document.createElement("div");
  beverageHeader.classList.add("beverageHeader");

  const beverageL = document.createElement("img");
  beverageL.classList.add("logo");
  beverageL.src = beverageLogo;
  beverageHeader.appendChild(beverageL);

  const beverageHeading = document.createElement("h2");
  beverageHeading.textContent = "Beverages";
  beverageHeader.appendChild(beverageHeading);

  beverageItems.appendChild(beverageHeader);
  //menuItem
  //item one
  const beverageItemList = document.createElement("div");
  beverageItemList.classList.add("menuItem");

  //description side
  const beverageType = document.createElement("div");
  beverageType.classList.add("itemDescription");
  //make a grid
  const beverageItemSet = document.createElement("div");
  beverageItemSet.classList.add("beverageItemSet");
  //beverageType Heading
  const beverageTypeHeadingOne = document.createElement("h3");
  beverageTypeHeadingOne.textContent = "Beers";
  beverageTypeHeadingOne.classList.add("gridHeading");
  beverageItemSet.appendChild(beverageTypeHeadingOne);
  //item Nine
  const itemNineDes = document.createElement("h4");
  itemNineDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  beverageItemSet.appendChild(itemNineDes);

  const itemNinePrice = document.createElement("h4");
  itemNinePrice.textContent = "lorem";
  beverageItemSet.appendChild(itemNinePrice);
  //item Ten
  const itemTenDes = document.createElement("h4");
  itemTenDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  beverageItemSet.appendChild(itemTenDes);

  const itemTenPrice = document.createElement("h4");
  itemTenPrice.textContent = "lorem";
  beverageItemSet.appendChild(itemTenPrice);
  //item Eleven
  const itemElevenDes = document.createElement("h4");
  itemElevenDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  beverageItemSet.appendChild(itemElevenDes);

  const itemElevenPrice = document.createElement("h4");
  itemElevenPrice.textContent = "lorem";
  beverageItemSet.appendChild(itemElevenPrice);

  //item Twelve
  const itemTwelveDes = document.createElement("h4");
  itemTwelveDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  beverageItemSet.appendChild(itemTwelveDes);

  const itemTwelvePrice = document.createElement("h4");
  itemTwelvePrice.textContent = "lorem";
  beverageItemSet.appendChild(itemTwelvePrice);

  //beverageType Heading
  const beverageTypeHeadingTwo = document.createElement("h3");
  beverageTypeHeadingTwo.textContent = "Wine";
  beverageTypeHeadingTwo.classList.add("gridHeading");
  beverageItemSet.appendChild(beverageTypeHeadingTwo);
  //item Thirteen
  const itemThirteenDes = document.createElement("h4");
  itemThirteenDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  beverageItemSet.appendChild(itemThirteenDes);

  const itemThirteenPrice = document.createElement("h4");
  itemThirteenPrice.textContent = "lorem";
  beverageItemSet.appendChild(itemThirteenPrice);

  //item Fourteen
  const itemFourteenDes = document.createElement("h4");
  itemFourteenDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  beverageItemSet.appendChild(itemFourteenDes);

  const itemFourteenPrice = document.createElement("h4");
  itemFourteenPrice.textContent = "lorem";
  beverageItemSet.appendChild(itemFourteenPrice);
  //item Fifteen
  const itemFifteenDes = document.createElement("h4");
  itemFifteenDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  beverageItemSet.appendChild(itemFifteenDes);

  const itemFifteenPrice = document.createElement("h4");
  itemFifteenPrice.textContent = "lorem";
  beverageItemSet.appendChild(itemFifteenPrice);

  //item Sixteen
  const itemSixteenDes = document.createElement("h4");
  itemSixteenDes.textContent = "Ipsum mollit velit ex sit eiusmod";
  beverageItemSet.appendChild(itemSixteenDes);

  const itemSixteenPrice = document.createElement("h4");
  itemSixteenPrice.textContent = "lorem";
  beverageItemSet.appendChild(itemSixteenPrice);

  //append grid
  beverageType.appendChild(beverageItemSet);

  //append item list
  beverageItemList.appendChild(beverageType);
  //item picture
  const itemTwoImgSection = document.createElement("div");
  itemTwoImgSection.classList.add("imgSection");

  const itemTwoPic = document.createElement("img");
  itemTwoPic.classList.add("itemImg");
  itemTwoPic.src = itemTwoImg;
  itemTwoImgSection.appendChild(itemTwoPic);
  beverageItemList.appendChild(itemTwoImgSection);
  // item list
  beverageItems.appendChild(beverageItemList);

  //append all beverage items
  content.appendChild(beverageItems);
  return content;
}

export default menu;
