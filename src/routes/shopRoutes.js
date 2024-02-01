// Soft UI Dashboard React icons
import { Group, HelpCenter } from "@mui/icons-material";
import Shop from "examples/Icons/Shop";
import BusinessMenu from "layouts/business/BusinessMenu";
import Cashback from "layouts/business/Cashback";
import SignIn from "layouts/business/authentication/sign-in";
import User from "layouts/business/customer";
import UserHelp from "layouts/business/customer/userHelp";
import Earning from "layouts/business/earning";
import Groups from "layouts/business/groups";
import SubAdmin from "layouts/business/subadmin";
import { FaList,FaWallet,FaUser,FaFirstOrder,FaQrcode,FaCalendar,FaMoneyBill,FaEdit } from 'react-icons/fa';

const shopRoutes = [
  
  { type: "title", title: "User Management", key: "resmgt" },
 
  {
    type: "collapse",
    name: "Users",
    key: "users",
    route: "/users",
    icon: <FaUser size="14px" />,
    component: <User />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Groups",
    key: "groups",
    route: "/Groups",
    icon: <Group size="14px" />,
    component: <Groups />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Help Center",
    key: "help center",
    route: "/helpCenter",
    icon: <HelpCenter size="14px" />,
    component: <UserHelp />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/Profile",
    icon: <FaEdit size="14px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  
];

export default shopRoutes;
