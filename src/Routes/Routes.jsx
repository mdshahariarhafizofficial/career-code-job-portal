import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SingIn from "../Pages/SingIn/SingIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import Loading from "../Pages/Loading/Loading";
import JobApply from "../Pages/JobApply/JobApply";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children:[
            {
                index: true,
                Component: Home
            },
            {
                path: '/register',
                Component: Register,
            },
            {
                path: '/sing-in',
                Component: SingIn,
            },
            {
                path: '/jobs/:id',
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute> ,
                loader: ({params}) => fetch(`http://localhost:8000/jobs/${params.id}`),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/job-apply/:id',
                element: <PrivateRoute><JobApply></JobApply></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:8000/jobs/${params.id}`),
                hydrateFallbackElement: <Loading></Loading>
            }
        ]
    }
])

export default router;