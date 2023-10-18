// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import BusinessMenu from "layouts/business/BusinessMenu";
import Cashback from "layouts/business/Cashback";
import SignIn from "layouts/business/authentication/sign-in";
import Customer from "layouts/business/customer";
import Earning from "layouts/business/earning";
import SubAdmin from "layouts/business/subadmin";
import { FaList,FaWallet,FaUser,FaFirstOrder,FaQrcode,FaCalendar,FaMoneyBill,FaEdit } from 'react-icons/fa';

const shopRoutes = [
  
  { type: "title", title: "Restaurant Management", key: "resmgt" },
  {
    type: "collapse",
    name: "Sub admins",
    key: "subadmins",
    route: "/subAdmins",
    icon: <FaUser size="14px" />,
    component: <SubAdmin />,
    noCollapse: true,
  },{
    type: "collapse",
    name: "Customers",
    key: "customers",
    route: "/customers",
    icon: <FaUser size="14px" />,
    component: <Customer />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Earnings",
    key: "earning",
    route: "/Earnings",
    icon: <FaWallet size="14px" />,
    component: <Earning />,
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
  { type: "title", title: "Menu & Cashback", key: "m&cb" },  
  {
    type: "collapse",
    name: "Menu",
    key: "menu",
    route: "/menu",
    icon: <FaList size="14px" />,
    component: <BusinessMenu />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Cashback",
    key: "cashback",
    route: "/cashback",
    icon: <FaMoneyBill size="14px" />,
    component: <Cashback />,
    noCollapse: true,
  },
  { type: "title", title: "Orders & Reservations", key: "m&cb" },  
  {
    type: "collapse",
    name: "Orders",
    key: "orders",
    route: "/orders",
    icon: <FaFirstOrder size="18px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Reservations",
    key: "reservations",
    route: "/reservations",
    icon: <FaCalendar size="14px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  { type: "title", title: "QR Codes & Coins", key: "m&cb" },  
  {
    type: "collapse",
    name: "QR Codes",
    key: "qrcodes",
    route: "/qrcodes",
    icon: <FaQrcode size="18px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Coins",
    key: "coins",
    route: "/coins",
    icon: <FaCalendar size="14px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  
];

export default shopRoutes;
