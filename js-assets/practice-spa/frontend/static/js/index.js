import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  //creating routes for each section
  const routes = [
    {
      path: "/",
      view: Dashboard,
    },
    {
      path: "/posts",
      view: Posts,
    },
    {
      path: "/settings",
      view: Settings,
    },
  ];

  //Test each route for potential match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.result);

  //If no match found, use the default route
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  //creating a new instance of the view
  const view = new match.route.view();
  document.querySelector("#app").innerHTML = await view.getHtml();
};

//Ensuring that the sections are loaded when using the browser's forward/backward arrows
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  //if an element contains [data-link], prevent default and navigate to the href
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
