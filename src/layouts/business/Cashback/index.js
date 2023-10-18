import Grid from "@mui/material/Grid";
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import DefaultBlogCard from "examples/Cards/BlogCards/DefaultBlogCard";
import Sidenav from "examples/Sidenav";

import shopRoutes from "routes/shopRoutes";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import { Card } from "@mui/material";

function Cashback() {
  const brand = "";
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Sidenav color="info" brandName="Billa Technologies" routes={shopRoutes} />
      <SoftBox py={3}>
        <Card>
          <SoftBox mb={3} px={2} mt={4}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} xl={3}>
                <SoftBox mb={2}>
                  <SoftBox mb={1} ml={0.5}>
                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                      Email
                    </SoftTypography>
                  </SoftBox>
                  <SoftInput type="email" placeholder="Email" />
                </SoftBox>
              </Grid>
              <Grid item xs={12} sm={6} xl={3}>
                <SoftBox mb={2}>
                  <SoftBox mb={1} ml={0.5}>
                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                      Email
                    </SoftTypography>
                  </SoftBox>
                  <SoftInput type="email" placeholder="Email" />
                </SoftBox>
              </Grid>
              <Grid item xs={12} sm={6} xl={3}>
                <SoftBox mb={2}>
                  <SoftBox mb={1} ml={0.5}>
                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                      Email
                    </SoftTypography>
                  </SoftBox>
                  <SoftInput type="email" placeholder="Email" />
                </SoftBox>
              </Grid>
              <Grid item xs={12} sm={6} xl={3}>
                <SoftBox mb={2}>
                  <SoftBox mb={1} ml={0.5}>
                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                      Email
                    </SoftTypography>
                  </SoftBox>
                  <SoftInput type="email" placeholder="Email" />
                </SoftBox>
              </Grid>
            </Grid>
          </SoftBox>
        </Card>
      </SoftBox>
      <SoftBox py={10}></SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Cashback;
