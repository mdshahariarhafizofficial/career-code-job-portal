import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SingIn from "../Pages/SingIn/SingIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import Loading from "../Pages/Loading/Loading";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import ViewJobApplications from "../Pages/ViewJobApplications/ViewJobApplications";

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
            },
            {
                path: '/my-applications',
                Component: MyApplications,
            },{
                path: '/add-job',
                element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
                path: 'my-posted-jobs',
                element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
            },
            {
                path: '/applications/:job_id',
                element: <PrivateRoute><ViewJobApplications></ViewJobApplications></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:8000/applications/job/${params.job_id}`),
                hydrateFallbackElement: <Loading></Loading>
            }
        ]
    }
])

export default router;