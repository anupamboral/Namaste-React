import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
//!Lesson 4 (Talk is cheap ,show me the code)

/** ⁡⁣⁢⁣Decided component (see the PLanning img;- " Planning of Food Ordering App(lesson4).png")
 *
 * Header
 *  - Logo
 *  - Nav Items
 *
 * Body
 * - Search
 * - Cards Container
 * - - Restaurant Cards
 * - - - Img
 * - - - Name of restaurant,star rating,    cuisine,
 *
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact⁡
 */
//*First we will create the top level component which is a big component and inside this all of the other components will reside, we are naming this component "AppLayout" so basically like a big div elm inside which all components will reside. and then we will create the header component because inside the AppLayout component we will render the first component which is header component.and then the next component will be the body component which will contain searchbar and cards container(inside this card container there will be many restaurant cards) components inside it.so whenever we need to make a component which will be repeated multiple times like the restaurant cards which will be repeated multiple times then we will make a separate component for that like for cards. we create a function so then we can use that function multiple times , and in case of building reusable components the same thing happens so we create separate component for any feature so we can use that multiple times, like here we need multiple card components.

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://th.bing.com/th/id/OIG4._yMW4TQkfDwvxq0ZdxId?pid=ImgGn"
        />
      </div>
      <nav className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </nav>
    </div>
  );
};

//*way of writing inline css in jsx
//* now we know how we create elements using jsx , now using the className we can give elements required style in a css file , but what if we want to write inline css like we write in html , then process is different, we will write the style attribute and it's value will not not be normal css, instead we have to write all css a object. and the style attributes value will be this object containing all the required properties as key value pairs. and as this a object so while we will write this inside jsx we have do that inside a {} because we know we can write javascript inside jx using {}.let's learn it using a example. we will first make the object which will contain the styles of the card and then pass that object as the value of style attribute of the card.
//*So the conclusion is when ever we need to pass in some data inside a component then pass that as a prop.
const cardStyles = {
  backgroundColor: "cyan",
};
const RestaurantCard = (prop) => {
  //*to use the data coming from the prop , we need to destructure it first and while destructuring we have to use the same name we used while passing the prop , in this case resData.
  const { resData } = prop;

  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info; //* ? mark is used is called optional chaining, so if the property exist it will read property and if does not exist then it will return undefined.
  const { deliveryTime } = resData?.info.sla;

  console.log(resData);
  return (
    <div className="res-card" style={cardStyles}>
      <img
        className="res-logo"
        alt="restaurant-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3 className="res-name">{name}</h3>
      <h4 className="cuisine-details">{cuisines.join(", ")}</h4>
      <h5 className="res-rating">⭐{avgRating} Rating</h5>
      <h5 className="delivery-time"> {deliveryTime} minutes delivery</h5>
    </div>
  );
};

//*using real api data from swiggy to make the card components dynamic. reslist is an array of objects and every object is for one restaurant
const resList = [
  {
    info: {
      id: "27112",
      name: "Domino's Pizza",
      cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
      locality: "Near Honda Showroom",
      areaName: "Shibpur",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.3,
      parentId: "2456",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-10 00:55:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-65716741-6953-447a-8bd8-b799435720b4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-near-honda-showroom-shibpur-kolkata-27112",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "651011",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "New Market",
      areaName: "Esplanade Kolkata",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.3,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 49,
        lastMileTravel: 7.3,
        serviceability: "SERVICEABLE_WITH_BANNER",
        slaString: "45-50 mins",
        lastMileTravelString: "7.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Currently not taking orders for this location",
        nextCloseTime: "2024-05-10 04:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-65716741-6953-447a-8bd8-b799435720b4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-new-market-esplanade-kolkata-kolkata-651011",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "392663",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Avni Mall",
      areaName: "Howrah",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.2,
      parentId: "166",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 48,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE_WITH_BANNER",
        slaString: "45-50 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Currently not taking orders for this location",
        nextCloseTime: "2024-05-10 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-65716741-6953-447a-8bd8-b799435720b4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-avni-mall-howrah-kolkata-392663",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "3078",
      name: "Balwant Singh's Eating House",
      cloudinaryImageId: "oshzewpdqvmphedhkxgt",
      locality: "Bhawanipur",
      areaName: "Bhawanipur",
      costForTwo: "₹600 for two",
      cuisines: [
        "North Indian",
        "Beverages",
        "Snacks",
        "Chinese",
        "Continental",
      ],
      avgRating: 4.3,
      veg: true,
      parentId: "6143",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 45,
        lastMileTravel: 7.3,
        serviceability: "SERVICEABLE_WITH_BANNER",
        slaString: "45-50 mins",
        lastMileTravelString: "7.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Currently not taking orders for this location",
        nextCloseTime: "2024-05-10 04:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-65716741-6953-447a-8bd8-b799435720b4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/balwant-singhs-eating-house-bhawanipur-kolkata-3078",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "192815",
      name: "A1 Ajooba Biryani center",
      cloudinaryImageId: "sg319veq0rjbsytlqdib",
      locality: "Jadavpur",
      areaName: "Regent Park",
      costForTwo: "₹150 for two",
      cuisines: ["Biryani"],
      avgRating: 3.5,
      parentId: "25013",
      avgRatingString: "3.5",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 73,
        lastMileTravel: 13.5,
        serviceability: "SERVICEABLE_WITH_BANNER",
        slaString: "70-75 mins",
        lastMileTravelString: "13.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Currently not taking orders for this location",
        nextCloseTime: "2024-05-16 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-65716741-6953-447a-8bd8-b799435720b4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/a1-ajooba-biryani-center-jadavpur-regent-park-kolkata-192815",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "252048",
      name: "Food Peddler Sandwiches",
      cloudinaryImageId: "otxx7vyajludhn1nhkol",
      locality: "Kalighat (Hazra)",
      areaName: "Kalighat",
      costForTwo: "₹150 for two",
      cuisines: [
        "Continental",
        "Beverages",
        "Snacks",
        "Salads",
        "Healthy Food",
      ],
      avgRating: 4.6,
      parentId: "81834",
      avgRatingString: "4.6",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 62,
        lastMileTravel: 9.5,
        serviceability: "SERVICEABLE_WITH_BANNER",
        slaString: "60-65 mins",
        lastMileTravelString: "9.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Currently not taking orders for this location",
        nextCloseTime: "2024-05-10 03:30:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-65716741-6953-447a-8bd8-b799435720b4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/food-peddler-sandwiches-hazra-kalighat-kolkata-252048",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "691558",
      name: "ELAHI LUXURY DINING",
      cloudinaryImageId: "4a25600fed5ae7a75ee70a91e0a885cd",
      locality: "Ripon Street",
      areaName: "Central Kolkata",
      costForTwo: "₹1000 for two",
      cuisines: [
        "North Indian",
        "Chinese",
        "Biryani",
        "Kebabs",
        "Seafood",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.4,
      parentId: "76982",
      avgRatingString: "4.4",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 54,
        lastMileTravel: 8.5,
        serviceability: "SERVICEABLE_WITH_BANNER",
        slaString: "50-55 mins",
        lastMileTravelString: "8.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Currently not taking orders for this location",
        nextCloseTime: "2024-05-10 04:01:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-65716741-6953-447a-8bd8-b799435720b4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/elahi-luxury-dining-ripon-street-central-kolkata-kolkata-691558",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "13571",
      name: "Haji Saheb Park Circus",
      cloudinaryImageId: "bedbbaa7543c3d70d7a01b02046ee86e",
      locality: "Ballygunge",
      areaName: "Ballygunge",
      costForTwo: "₹800 for two",
      cuisines: ["Mughlai", "North Indian", "Chinese"],
      avgRating: 4.3,
      parentId: "18627",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 55,
        lastMileTravel: 8.9,
        serviceability: "SERVICEABLE_WITH_BANNER",
        slaString: "55-60 mins",
        lastMileTravelString: "8.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Currently not taking orders for this location",
        nextCloseTime: "2024-05-10 06:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-65716741-6953-447a-8bd8-b799435720b4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/haji-saheb-park-circus-ballygunge-kolkata-13571",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "19515",
      name: "Mezban Ripon Street",
      cloudinaryImageId: "jaj2dspo6b2pfvflxiap",
      locality: "Wellesley",
      areaName: "Wellesley",
      costForTwo: "₹300 for two",
      cuisines: ["Indian", "Biryani", "Chinese", "Tandoor"],
      avgRating: 4.3,
      parentId: "135608",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 60,
        lastMileTravel: 8.9,
        serviceability: "SERVICEABLE_WITH_BANNER",
        slaString: "55-60 mins",
        lastMileTravelString: "8.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Currently not taking orders for this location",
        nextCloseTime: "2024-05-10 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "ABOVE ₹1000",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-65716741-6953-447a-8bd8-b799435720b4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/mezban-ripon-street-wellesley-kolkata-19515",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="cards-container">
        {/* //* restaurant cards */}
        {/*//* Example of passing props to a functional component */}
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
        {/*  // *above reslist is an array of objects and every object is for one restaurant, and as we using reslist array inside jsx that's why we are putting that inside {} because to write javascript inside jsx we have to use {}. */}
        {/*//*⁡⁢⁣⁢Importance of key prop⁡:- now after doing all of this we will see a warning in the console, many of developers can ignore this warning because it is not an error, but if we want to to be good developer then we should never ignore warnings, so the warning is " Warning: Each child in a list should have a unique "key" prop." and this warning means that each of list item so each of the  RestaurantCard component should uniquely presented, so each of the restaurant cards should have a unique "key" property , so we have pass an unique key prop for every RestaurantCard component . remember this "key" is a reserved keyword in React. and this key prop should have a unique value. so to pass an unique value in the data we have an id property in every restaurants object so we can use that as unique key.after doing this , the warning will be disappeared*/}
      </div>
    </div>
  );
}; //*Props: props are short form of properties, to make a component reusable we have to pass the pass the dynamically so we can reuse a component to display different data.and to pass that data into components we use props. props are just arguments for functions. because at the end of the day functional components are just normal function and props are like arguments for functions.and like we usually say passing arguments to function , the same way we say in react that we pass props to a component. so basically we render a component inside another component like this <RestaurantCard /> then we can use props to pass the data dynamically , like this :- <RestaurantCard resName="Foody Bites" cuisine="cakes" /> , and then RestaurantCard component will receive this prop as an object, and behind the scenes RestaurantCard is function and when we pass this props that is actually passing arguments RestaurantCard because it is actually a function and RestaurantCard will receive this prop data as an object an we check that if we mention the prop parameter in RestaurantCard functional component and then print that using console.log() we will see in the browser console that an object will be printed containing the prop data we have passed and the data is stored as properties.

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<AppLayout />);

//*config driven ui:- In today's time config driven ui is very much important for system design interviews and also for creating user interfaces for different locations at once which will be controlled or changed using the data coming from the backend api that data will drive or basically control the ui design or ui components so let us understand it using an example so let's say we have opened a food delivery website like swiggy and after opening below the heading there is a carousel Which contains multiple cards and the cards are showing multiple offers and discounts which are different for every location for example the restraints of Delhi can have different offers and discounts and the Hyderabad restaurants can have different offers and discounts and on the other hand Lucknow restaurants Can have no discounts and offers so in that case the developer will not develop different websites for every place instead he will build just one user interface which will be dynamic so basically dependent on the data it will change and that eventually will help to display different kind of offers and discounts for different places and that's why it is called config driven ui,Because the configuration are basically the data which is coming from backend api has some configurations for different places and that data will control or drive The components which will be displayed on the user interface so basically it will show different offers for Delhi and different offers for Hyderabad and for the Lucknow City it will show no carousal Because there are no offers for Lucknow City that's why it will remove the whole carousel component because there are no offers to display, so the carousal component is not needed for lucknow, any specific place, so basically the api data coming backend, depending on the data configuration the ui will be driven/controlled.This is very modern practice companies like uber, swiggy uses this.

//*This is the beauty of react, when react was built it was built with a fundamental that in javascript file only we will kind of build our markup as well as logic, earlier we used to have our html file different for markup and different javascript files for logic now we can run loop in jsx right inside our javascript file and we can put in markup ,pass in classnames ,div ,id properties ,H1 tag , everything we can do in the same place in the js file.

//* now after doing all of this we will see a warning in the console, many of developers can ignore this warning because it is not an error, but if we want to to be good developer then we should never ignore warnings, so the warning is " Warning: Each child in a list should have a unique "key" prop." and this warning

//*⁡⁢⁣⁡⁢⁣⁢Importance of key prop⁡⁡:- now after creating the dynamic card component using map method, we will see a warning in the console, many of developers can ignore this warning because it is not an error, but if we want to to be good developer then we should never ignore warnings, so the warning is " Warning: Each child in a list should have a unique "key" prop." and this warning means that each of list item so each of the  RestaurantCard component should uniquely presented, so each of the restaurant cards should have a unique "key" property , so we have pass an unique key prop for every RestaurantCard component . remember this "key" is a reserved keyword in React. and this key prop should have a unique value. so to pass an unique value in the data we have an id property in every restaurants object so we can use that as unique key.after doing this , the warning will be disappeared.

//*⁡⁢⁣⁢ But why we need to use this key prop and give every component an unique id⁡:- Because like RestaurantCard component , when we have multiple reusable components at the same hierarchy level, let's say we have 100 RestaurantCard components, and all of them have no ids, and then we add another RestaurantCard component then react will not know which of the component is newly added , and then it will re render all of components which increase the loading time and make the code un-optimized and decrease the performance, and there is no need to re-render all of the components from scratch.that's why to tell react which components is newly added we have provide a unique key to every component.and this unique key also helps to place the components in proper order one after according to the id number.and Many developers say that if we don't have any unique then we can use the second parameter of the map method, which is index, so we can also use indexes to create an unique id for components.but react documentation mentions that we should  use indexes as the key.they say "Index as a key is an anti-pattern" to know why go to this link "https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/"

//!Lesson 5 (Let's get hooked)

//! whatever we do using react we can also do that using html ,css,javascript so then why do we use use a library like react or framework?
//* because it makes your developer experience easy and fast. it makes you write less code and do more on the webpage.

//* some of the best practices in react world:- until now we have written all the components like - header,body, footer in the same file, and now our file looks ugly because of so much code in just one file and it is not a good practice. and the best practice in the industry is to create separate files for separate components.so we will not restructure our code and create files for separate components.though it is not mandatory to structure like this , we can even put all the code in a single file, but it is good practice to have good structure.and when evr we create a file for a component we should always name that file in the name of the component.
//* let's also know about a convention in the developer world which is to put all of the source code in the src folder.so all of the important files will be kept inside the src folder so let's create this src folder and move the app.js file inside it.and for adding components we will create also components folder inside src folder. so app.js is direct child of src folder which contains root level code and now whatever components we need inside App.js we will put those inside the components folder.

//* right now our javascript files has .js extension but as we are writing jsx inside this file that's why as the extension many developers .jsx extension. like App.jsx or when someone is writing typescript with jsx the they use .tsx extension. but it doesn't effect our app so we can use any of them.
