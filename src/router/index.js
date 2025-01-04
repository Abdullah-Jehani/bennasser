import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import LoginView from "../views/auth/LoginView.vue";
import SignUpView from "../views/auth/SignUpView.vue";
import AboutUsView from "../views/AboutUs/AboutUsView.vue";
import CategoriesView from "../views/Categories/CategoriesView.vue";
import ContactView from "../views/Contact/ContactView.vue";
import DetailsView from "../views/Details/DetailsView.vue";
import CartView from "../views/Cart/CartView.vue";
import CheckoutView from "../views/Checkout/CheckoutView.vue";
import OrdersView from "../views/Orders/OrdersView.vue";
import OrderDetailsView from "../views/Orders/OrderDetailsView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "Signup",
    component: SignUpView,
  },
  {
    path: "/About-Us",
    name: "AboutUsView",
    component: AboutUsView,
  },
  {
    path: "/Categories",
    name: "CategoriesView",
    component: CategoriesView,
  },
  {
    path: "/Contact",
    name: "ContactView",
    component: ContactView,
  },
  {
    path: "/Products/:id",
    name: "DetailsView",
    component: DetailsView,
  },
  {
    path: "/Cart",
    name: "CartView",
    component: CartView,
  },
  {
    path: "/Checkout",
    name: "CheckoutView",
    component: CheckoutView,
  },
  {
    path: "/Orders",
    name: "OrdersView",
    component: OrdersView,
  },
  {
    path: "/Orders/:id",
    name: "OrderDetailsView",
    component: OrderDetailsView,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
