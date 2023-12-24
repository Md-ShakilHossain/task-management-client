import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Login & Register/Login";
import Register from "../Login & Register/Register";
import Dashboard from "../Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import NewTask from "../Components/NewTask";
import EditTask from "../Components/EditTask";
import Tasks from "../Pages/Tasks/Tasks";
import TargetedAudience from "../Pages/TargetedAudience/TargetedAudience";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
          path: "/dashboard",
          element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        },
        {
          path: "/newTask",
          element: <NewTask></NewTask>
        },
        {
          path: "/tasks/:id",
          element: <EditTask></EditTask>,
          loader: ({params})=> fetch(`https://task-managemet-server-nu.vercel.app/tasks/${params.id}`)
        },
        {
          path: "/tasks",
          element: <Tasks></Tasks>
        },
        {
          path: "/targetedAudience",
          element: <TargetedAudience></TargetedAudience>
        }
      ]
    },
  ]);

  export default router;