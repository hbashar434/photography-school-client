import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import UserSelectedClasses from "../pages/Dashboard/UserSelectedClasses/UserSelectedClasses";
import UserEnrolledClasses from "../pages/Dashboard/UserEnrolledClasses/UserEnrolledClasses";
import AllUser from "../pages/Dashboard/AllUser/AllUser";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import AddClassForm from "../pages/Dashboard/AddClassForm/AddClassForm";
import InstructorClasses from "../pages/Dashboard/InstructorClasses/InstructorClasses";
import ManageClass from "../pages/Dashboard/ManageClass/ManageClass";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import WelcomeDashboard from "../pages/Dashboard/WelcomeDashboard/WelcomeDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard",
        element: <WelcomeDashboard />,
      },
      {
        path: "selected",
        element: <UserSelectedClasses />,
      },
      {
        path: "payment/:id",
        element: <Payment />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/myclasslist/${params.id}`),
      },
      {
        path: "history",
        element: <PaymentHistory />,
      },
      {
        path: "enrolled",
        element: <UserEnrolledClasses />,
      },
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path: "allclasses",
        element: (
          <AdminRoute>
            <ManageClass />
          </AdminRoute>
        ),
      },
      {
        path: "addclasses",
        element: (
          <InstructorRoute>
            <AddClassForm />
          </InstructorRoute>
        ),
      },
      {
        path: "instructorclasses",
        element: (
          <InstructorRoute>
            <InstructorClasses />
          </InstructorRoute>
        ),
      },
    ],
  },
]);

export default router;
