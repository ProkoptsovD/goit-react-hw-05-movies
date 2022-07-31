import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { navbarTabs } from "constants/navbar-tabs";
import { ToastContainer } from "react-toastify";

import Header from "components/Header";
import Navbar from "components/Navbar";
import Loader from "components/common/Loader";

import 'react-toastify/dist/ReactToastify.css';

export const SharedLayout = () => {
    return (
        <>
            <Header>
                <Navbar tabs={ navbarTabs } />
            </Header>
            <Suspense fallback={ <Loader type="dual-rings" /> }>
                <Outlet />
            </Suspense>
            <ToastContainer></ToastContainer>
        </>
    )
}

export default SharedLayout;