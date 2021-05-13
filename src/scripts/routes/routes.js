/* eslint-disable import/no-duplicates */
/* eslint-disable quotes */
import HomePage from "../views/pages/home";
import DetailPage from "../views/pages/detail";

const routes = {
  "/": HomePage, // default page
  "/home": HomePage,
  "/detail": DetailPage,
};

export default routes;
