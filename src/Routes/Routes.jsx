import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SingIn from "../Pages/SingIn/SingIn";

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
            }
        ]
    }
])

export default router;