import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/dashboard/Dashboard";
import Main from "../layout/main/Main";
import AppliedJobs from "../pages/candidateDashboard/AppliedJobs";
import CandidateDashboard from "../pages/candidateDashboard/CandidateDashboard";
import AddedJobs from "../pages/employeeDashboard/AddedJobs";
import AddJob from "../pages/employeeDashboard/AddJob";
import CandidateInfo from "../pages/employeeDashboard/CandidateInfo";
import EmployerDashboard from "../pages/employeeDashboard/EmployerDashboard";
import MessageCartEmployer from "../pages/employeeDashboard/MessageCartEmployer";
import MessagesEmployer from "../pages/employeeDashboard/MessagesEmployer";
import Home from "../pages/home/Home";
import JobDetails from "../pages/JobDetails";
import Jobs from "../pages/Jobs";
import Login from "../pages/Login";
import MessageCart from "../pages/MessageCart";
import Messages from "../pages/Messages";
import AccountCreator from "../pages/register/AccountCreator";
import Signup from "../pages/Signup";
import PrivateRoute from "../utils/PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/candidateInfo/:id",
        element: <CandidateInfo />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/job-details/:id",
        element: <JobDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/register",
        element: (
          <PrivateRoute>
            <AccountCreator />
          </PrivateRoute>
        ),
      },
      {
        path: "/register/:type",
        element: (
          <PrivateRoute>
            <AccountCreator />
          </PrivateRoute>
        ),
      },
      {
        path: "message/:id",
        element: <MessageCart />,
      },
      { path: "/message/employer/:id", element: <MessageCartEmployer /> },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "added-jobs",
        element: <AddedJobs />,
      },
      {
        path: "candidateInfo",
        element: <CandidateInfo />,
      },
      {
        path: "add-job",
        element: <AddJob />,
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs />,
      },
      {
        path: "employer",
        element: <EmployerDashboard />,
      },
      {
        path: "candidate",
        element: <CandidateDashboard />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "messages/employer",
        element: <MessagesEmployer />,
      },
    ],
  },
]);

export default routes;
