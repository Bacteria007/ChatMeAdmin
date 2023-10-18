import Grid from "@mui/material/Grid";
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Sidenav from "examples/Sidenav";

import shopRoutes from "routes/shopRoutes";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import { Card, Table } from "@mui/material";

function BusinessMenu() {
  const brand = "";

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Sidenav color="info" brandName="Billa Technologies" routes={shopRoutes} />
      <SoftBox py={3}>
        
        
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default BusinessMenu;
