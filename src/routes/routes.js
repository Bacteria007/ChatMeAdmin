// Soft UI Dashboard React layouts
import Dashboard from "layouts/business/dashboard";
import Profile from "layouts/business/profile";
// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import CustomerSupport from "examples/Icons/CustomerSupport";
import ViewUser from "layouts/business/customer/actions/ViewUser";
const routes = [
  {
    type: "collapse",
    name: "UserDetails",
    key: "userdetails",
    route: "/userDetail/:id",
    icon: <Shop size="12px" />,
    component: <ViewUser />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <CustomerSupport size="12px" />,
    component: <Profile />,
    noCollapse: true,
  },
  // {
  //   type: "collapse",
  //   name: "Profile",
  //   key: "profile",
  //   route: "/profile",
  //   icon: <CustomerSupport size="12px" />,
  //   component: <Profile />,
  //   noCollapse: true,
  // },
];

export default routes;
