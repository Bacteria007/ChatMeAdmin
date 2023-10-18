import {useEffect} from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";


// Soft UI Dashboard React themes
import theme from "assets/theme";


// Soft UI Dashboard React routes


// Soft UI Dashboard React contexts
import { useSoftUIController, setOpenConfigurator } from "context";

// Images
import brand from "assets/images/logo-ct.png";
import SignUp from "layouts/business/authentication/sign-up";
import SignIn from "layouts/business/authentication/sign-in";
import NotFound from "layouts/error/NotFound";
import routes from "routes/routes";
import shopRoutes from "routes/shopRoutes";


export default function App() {
  const [controller, dispatch] = useSoftUIController();
  const { direction, layout, openConfigurator, sidenavColor } = controller;
  const { pathname } = useLocation();


  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  

  return <ThemeProvider theme={theme}>
  <CssBaseline />
  
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/notfound" element={<NotFound />} />
    
    {getRoutes(routes)}
    {getRoutes(shopRoutes)}
    <Route path="*" element={<Navigate to="/notfound" />} />
  </Routes>
</ThemeProvider>
}
