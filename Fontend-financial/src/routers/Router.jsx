import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "../layouts/MainLayout";
import { FinancialRecordProvider } from "../contexts/financial.context";
// import Home from "../pages/Home";
const Home = lazy(() => import("../pages/Home"));
// import Dashbord from "../pages/dashbord";
const Dashbord = lazy(() => import("../pages/dashbord"));
// import EditRecordForm from "../pages/EditRecordForm";
const EditRecordForm = lazy(() => import("../pages/EditRecordForm"));


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "dashbord",
        element: (
          <FinancialRecordProvider>
            <Dashbord />
          </FinancialRecordProvider>
        ),
      },
      {
       path: "editRecordForm/:id",
       element: (
        <FinancialRecordProvider>
          <EditRecordForm />
        </FinancialRecordProvider>
       ),
      }
    ],
  },
]);

export default router;
