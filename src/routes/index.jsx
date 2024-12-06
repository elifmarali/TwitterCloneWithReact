import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/main";
import Bookmarks from "~/pages/Bookmarks";
import Explore from "~/pages/Explore";
import Home from "~/pages/Home";
import Lists from "~/pages/Lists";
import Messages from "~/pages/Messages";
import Notifications from "~/pages/Notifications";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/explore",
                element: <Explore />
            },
            {
                path: "/notifications",
                element: <Notifications />
            },
            {
                path: "/messages",
                element: <Messages />
            },
            {
                path: "/lists",
                element: <Lists />
            },
            {
                path: "/bookmarks",
                element: <Bookmarks />
            },
        ]
    },

])

export default routes;