// Soft UI Dashboard React layouts
import Dashboard from "layouts/business/dashboard";
import Profile from "layouts/business/profile";
// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import CustomerSupport from "examples/Icons/CustomerSupport";
import ViewUser from "layouts/business/customer/actions/ViewUser";
import ViewGroup from "layouts/business/groups/actions/ViewGroup";
import memberTableData from "layouts/business/groups/memberData/memberTableData";
import ViewDetail from "layouts/business/customer/userHelp/actions/ViewDetail";
const routes = [
  {
    type: "collapse",
    name: "helpMsgDetail",
    key: "helpMsgDetail",
    route: "/helpMsgDetail/:id",
    icon: <Shop size="12px" />,
    component: <ViewDetail />,
    noCollapse: true,
  },
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
    name: "GroupDetails",
    key: "groupdetails",
    route: "/groupDetail/:id",
    icon: <Shop size="12px" />,
    component: <ViewGroup />,
    noCollapse: true,
  },
  // {
  //   type: "collapse",
  //   name: "GroupDetails",
  //   key: "groupdetails",
  //   route: "/groupDetail/:id",
  //   icon: <Shop size="12px" />,
  //   component: <memberTableData />,
  //   noCollapse: true,
  // },
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
