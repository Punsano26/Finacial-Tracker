import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Dashbord from "../pages/dashbord";
import { FinancialRecordProvider } from "../contexts/financial.context";

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
    ],
  },
]);

export default router;
