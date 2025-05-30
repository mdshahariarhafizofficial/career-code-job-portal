import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SingIn from "../Pages/SingIn/SingIn";
import JobDetails from "../Pages/JobDetails/JobDetails";

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
                Component: JobDetails,
                loader: ({params}) => fetch(`http://localhost:8000/jobs/${params.id}`)
            }
        ]
    }
])

export default router;