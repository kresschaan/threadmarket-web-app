import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store, persistor } from "./store/index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Login from "./layouts/Login.jsx";
import Register from "./layouts/Register.jsx";
import Shop from "./layouts/Shop.jsx";
import Cart from "./layouts/Cart.jsx";
import Shipping from "./components/Shipping.jsx";
import Checkout from "./layouts/Checkout.jsx";
import Success from "./layouts/Success.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { AuthProvider } from "./auth/AuthProvider";
import PrivateRoute from "./auth/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/home",
        element: <App />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/shop",
        element: <Shop />,
    },
    // {
    //     path: "/cart",
    //     element: <Cart />,
    // },
    // {
    //     path: "/shipping",
    //     element: <Shipping />,
    // },
    // {
    //     path: "/checkout",
    //     element: <Checkout />,
    // },
    // {
    //     path: "/success",
    //     element: <Success />,
    // },
    {
        path: "/cart",
        element: <PrivateRoute component={Cart} />,
    },
    {
        path: "/shipping",
        element: <PrivateRoute component={Shipping} />,
    },
    {
        path: "/checkout",
        element: <PrivateRoute component={Checkout} />,
    },
    {
        path: "/success",
        element: <PrivateRoute component={Success} />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </PersistGate>
    </Provider>
);
