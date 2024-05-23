import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Offers from "./components/Offers";
import Help from "./components/Help";
import Account from "./components/Account";
import Cart from "./components/Cart";
import Error from "./components/Error";
import { useState, useEffect } from "react";
import UserContext from "./utils/UserContext";

// import Grocery from "./components/Grocery";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const AppLayout = () => {
  const [userInfoName, setUserInfoName] = useState();

  //Authentication
  useEffect(() => {
    //make api call and send username and password
    const data = {
      name: "Bhavya Singh",
    };
    setUserInfoName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider
        value={{ loggedInUser: userInfoName, setUserInfoName }}
      >
        <div className="App">
          {" "}
          <Header />
          <Outlet />
          {/* if path is /, then <Body/> */}
          {/* <Body /> */}
          {/* if path is /about, then <About/> */}
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/offers-near-me",
        element: <Offers />,
      },
      {
        path: "/support",
        element: <Help />,
      },
      {
        path: "/my-account",
        element: <Account />,
      },
      {
        path: "/checkout",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
