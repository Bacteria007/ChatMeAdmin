// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import authorsTableData from "./data/authorsTableData";
import Sidenav from "examples/Sidenav";
import shopRoutes from "routes/shopRoutes";
// import projectsTableData from "./data/projectsTableData";

function SubAdmin() {
  const { columns, rows } = authorsTableData;
  // const { columns: prCols, rows: prRows } = projectsTableData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Sidenav
        color="info"
        brandName="Billa Technologies"
        routes={shopRoutes}       
      /> 
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">SubAdmins List</SoftTypography>
            </SoftBox>
            <SoftBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table columns={columns} rows={rows} />
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default SubAdmin;
