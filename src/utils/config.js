//*both are ways of doing named exports
//* the below cdn url is used for restaurant card images(go to restaurant card.js to see it's usage , this cdn link is basically same for all the images but only a id(cloudinaryImageId ) is different for every image , so as the cdn link(first part of the link )is same for every image that's why we kept the cdn lik here in the config file, and then we import it in the restaurantCard.js file and then we concat the cdn link and the cloudinaryImageId , which helps us to get images for all of the restaurant cards.
export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const LOGO_URL =
  "https://th.bing.com/th/id/OIG4._yMW4TQkfDwvxq0ZdxId?pid=ImgGn";
export { LOGO_URL };
export const MENU_API_URL = `https://richie-cors-proxy.glitch.me/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5743545&lng=88.3628734&restaurantId=`;
